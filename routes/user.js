const express=require("express");
const router=express.Router({mergeParams:true});
const User=require("../models/user");
const passport=require("passport");
const {saveReDirectUrl}=require("../middleware");

const userController=require("../controllers/user");

router.route("/signup")
.get(userController.renderSignUpForm)//Signup form render
.post(userController.createUser);//create user

router.route("/login")
.get(userController.renderLoginForm)//login form route
.post(saveReDirectUrl,passport.authenticate("local",{failureRedirect:"/login",failureFlash:true}),userController.loginUser);//validate user and pass or fail login

router.get("/logout",userController.logoutUser);

module.exports=router;