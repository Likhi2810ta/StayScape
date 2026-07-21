const express=require("express");
const ExpressError=require("../utils/ExpressError.js");

const router=express.Router({mergeParams:true});

//acquiring reqd schema and models
const {listingSchema,reviewSchema}=require("../schema.js");
const Listing=require("../models/listing.js");

//acquiring middlewares
const {isLoggedIn,isOwner,validateListing}=require("../middleware.js");

const listingController=require("../controllers/listing.js");

const {storage}=require("../cloudConfig.js");

const multer  = require('multer')
const upload = multer({storage});




router.route("/")
.get(listingController.index) //Index route
.post(isLoggedIn,upload.single('listing[image]'),validateListing,listingController.createNewListing);//create route

//Add route
router.get("/new",isLoggedIn,listingController.renderNewForm);

//Create route
// router.post("/",validateListing,listingController.createNewListing);

router.get("/search",listingController.search);//search results


router.route("/:id")
.get(listingController.renderListing) //show route
.put(isLoggedIn, isOwner,upload.single('listing[image]'),validateListing,listingController.updateListing)//update route
.delete(isLoggedIn,isOwner,listingController.destroyListing); //delete route

//Edit route
router.get("/:id/edit",isLoggedIn,isOwner,listingController.editListing);

router.get("/category/:category", listingController.filterCategory);

//Update route
// router.put("/:id", isLoggedIn, isOwner,validateListing,listingController.updateListing);

//Delete route
// router.delete("/:id",isLoggedIn,isOwner,listingController.destroyListing);

module.exports=router;