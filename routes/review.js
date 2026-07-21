const express=require("express");
const router=express.Router({mergeParams:true});
const {listingSchema,reviewSchema}=require("../schema.js");
const ExpressError=require("../utils/ExpressError.js");
const Review=require("../models/review.js");
const Listing=require("../models/listing.js");

const reviewController=require("../controllers/review.js");

const {validateReview,isLoggedIn,isReviewAuthor}=require("../middleware.js");

//Post Review route
router.post("/",isLoggedIn,validateReview,reviewController.createReview);

//Delete review route
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,reviewController.destroyReview);

module.exports=router;

