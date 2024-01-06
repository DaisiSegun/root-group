const createError = require("../utils/createError.js");
const Review = require("../models/review.model.js");
const Service = require("../models/sp.model.js");

const createReview = async (req, res, next) => {
  // Check if the user is a seller and if they are trying to review their own service
  if (req.isSeller && req.body.userId === req.userId)
    return next(createError(403, "Sellers cannot review their own services!"));

  const newReview = new Review({
    userId: req.userId,
    serviceId: req.body.serviceId,
    desc: req.body.desc,
    star: req.body.star,
  });

  try {
    // TODO: You can add logic here to check if the user has purchased the service

    const savedReview = await newReview.save();

    await Service.findByIdAndUpdate(req.body.serviceId, {
      $inc: { totalStars: req.body.star, starNumber: 1 },
    });
    res.status(201).send(savedReview);
  } catch (err) {
    next(err);
  }
};

const getReviews = async (req, res, next) => {
  try {
    const reviews = await Review.find({ serviceId: req.params.serviceId });
    res.status(200).send(reviews);
  } catch (err) {
    next(err);
  }
};

const deleteReview = async (req, res, next) => {
  try {
    // Add logic to delete a review if needed
  } catch (err) {
    next(err);
  }
};

module.exports = { createReview, getReviews, deleteReview };
