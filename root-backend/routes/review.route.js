const express = require('express');
const jwtMiddleware = require('../middleware/jwt.js');
const reviewController = require('../controllers/review.controller.js');

const router = express.Router();

router.post("/", jwtMiddleware.verifyToken, reviewController.createReview);
router.get("/:serviceId", reviewController.getReviews);
router.delete("/:id", reviewController.deleteReview);

module.exports = router;
