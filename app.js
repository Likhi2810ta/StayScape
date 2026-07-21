if(process.env.NODE_ENV!="production"){
require('dotenv').config();
}


const express=require("express");
const app=express();
const mongoose=require("mongoose");
const path=require("path");
const methodOverride = require("method-override");
const ejsMate=require("ejs-mate");
const wrapAsync=require("./utils/wrapAsync.js");
const ExpressError=require("./utils/ExpressError.js");
const {listingSchema,reviewSchema}=require("./schema.js");
const Review=require("./models/review.js");

const session=require("express-session");
const {MongoStore} = require('connect-mongo');


const flash=require("connect-flash");
const passport=require("passport");
const User=require("./models/user.js");
const LocalStrategy=require("passport-local");


//acquiring routers
const listingRouter=require("./routes/listing.js");
const reviewRouter=require("./routes/review.js");
const userRouter=require("./routes/user.js");


app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname,"/public")))
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.engine('ejs', ejsMate);
app.use(express.urlencoded({extended:true}));

//Acquiring DB model
const Listing=require("./models/listing.js");
const dbUrl=process.env.ATLASDB_URL;
main()
.then(()=>console.log("Connected to database"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(dbUrl);
}

const store=MongoStore.create({
    mongoUrl:dbUrl,
    crypto:{
        secret:process.env.SECRET
    },
    touchAfter:24*60*60

})

store.on("error",(err)=>{
    console.log("Error in Mongo session store",err);
})

const sessionOptions={
        store:store,
        secret:process.env.SECRET,
        resave:false,
        saveUninitialized:true,
        cookie:{
            expires:Date.now()+7*24*60*60*1000,
            maxAge:7*24*60*60*1000,
            httpOnly:true

        }

};


app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



app.use((req,res,next)=>{//middleware to store flash success messages in res.locals
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    res.locals.currUser=req.user;
    res.locals.mapToken=process.env.MAP_TOKEN;
    next();
})

app.get("/",(req,res)=>{
     res.redirect("/listings");
});

app.get("/demouser", async(req,res)=>{
    
    let fakeUser=new User({
        email:"demouser@gmail.com",
        username:"arjun",
    });

    let registeredUser=await User.register(fakeUser,"password");
    res.send(registeredUser);

})

app.use("/listings",listingRouter);
app.use("/listings/:id/reviews",reviewRouter);
app.use("/",userRouter);


//Default path: If no path/middleware matches, this gets executed
app.use((req,res,next)=>{
    next(new ExpressError(404,"Page not found!"));
})

//Error handling middleware
app.use((err,req,res,next)=>{
    let {statusCode=500,message="Something went wrong!"}=err;
    // res.status(statusCode).send(message);
    res.status(statusCode).render("error.ejs",{err});
})


app.listen(8080,()=>{
    console.log("Server is listening to port 8080")
})



