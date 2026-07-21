const Listing=require("../models/listing.js");

const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken=process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index=async(req,res)=>{
    const allListings=await Listing.find({});
    res.render("listings/index.ejs",{allListings});
    
}

module.exports.renderNewForm=(req,res)=>{
    res.render("listings/new.ejs");
}

module.exports.createNewListing=async(req,res,next)=>{

   let response=await geocodingClient.forwardGeocode({
   query:req.body.listing.location,
   limit: 1
  })
  .send();
    try{
        let url=req.file.path;
        let filename=req.file.filename;
        //console.log(url,"...",filename);
    let newListing=new Listing(req.body.listing);
    //console.log(newListing);
    newListing.owner=req.user._id;
    newListing.image={url,filename};
    newListing.geometry=response.body.features[0].geometry;
    let savedListing=await newListing.save();//.then((res)=>{console.log(res)});
    //console.log(savedListing);
    req.flash("success","New listing created!!");
    res.redirect("/listings");

    }catch(err)
    {
        next(err);
    }
}

module.exports.renderListing=async(req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id).populate({path:"reviews",populate:{path:"author"}}).populate("owner");//nested populate is used so that the info abut author of the reviews is also stored to display
    if(!listing)
    {
        req.flash("error","The listing you requested for does not exist!!");
        return res.redirect("/listings");
    }
    
    res.render("listings/show.ejs",{listing});
}

 module.exports.editListing=async(req,res)=>{
    let {id}=req.params;
    let listing= await Listing.findById(id);
    if(!listing)
    {
        req.flash("error","The listing you requested for does not exist!!");
        return res.redirect("/listings");
    }
    let originalImageUrl=listing.image.url;
    originalImageUrl=originalImageUrl.replace("/upload","/upload/h_250,w_300");
    res.render("listings/edit.ejs",{listing,originalImageUrl});

}

 module.exports.updateListing=async (req, res) => {
    let { id } = req.params;
   

    const checkListing = await Listing.findById(id);

    if (!checkListing.owner.equals(req.user._id)) {
        req.flash("error", "You are not allowed to edit this listing!");
        return res.redirect(`/listings/${id}`);
    }

    let listing=await Listing.findByIdAndUpdate(id, req.body.listing);
    if(req.file){
    let url=req.file.path;
    let filename=req.file.filename;
    listing.image={url,filename};
    await listing.save();
    }
    req.flash("success", "Listing updated!");
    res.redirect(`/listings/${id}`);
}

module.exports.destroyListing=async(req,res)=>{
    let {id}=req.params;
    await Listing.findByIdAndDelete(id);
     req.flash("success"," listing deleted!!");
    res.redirect("/listings");
}

module.exports.filterCategory = async (req, res) => {

    const { category } = req.params;

    const allListings = await Listing.find({ category });

    res.render("listings/index.ejs", { allListings });
};

module.exports.search = async (req, res) => {

    const { query } = req.query;

    const allListings = await Listing.find({
    $or: [
        { title: { $regex: query, $options: "i" } },
        { country: { $regex: query, $options: "i" } },
        { description: { $regex: query, $options: "i" } },
        { location: { $regex: query, $options: "i" } },
        { category: { $regex: query, $options: "i" } }
    ]
});

    res.render("listings/index.ejs", { allListings });
};

