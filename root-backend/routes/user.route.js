const express = require('express');
const userController = require('../controllers/user.controller.js');
const jwtMiddleware = require('../middleware/jwt.js');

const router = express.Router();

router.delete("/:id", jwtMiddleware.verifyToken, userController.deleteUser);
router.get("/:id", userController.getUser);

module.exports = router;
