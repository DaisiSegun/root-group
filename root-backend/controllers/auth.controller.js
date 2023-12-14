import User from "../models/user.model.js";
import Crypto from "crypto-js";
import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

export const register = async (req, res, next) => {
  try {
    const {
      username,
      email,
      password,
      confirmPassword,
      phone,
      userType,
      adminType,
      businessLocation,
      interests,
      profilePictureUrl 
    } = req.body;

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      return res.status(400).json({ error: 'Password and confirm password do not match' });
    }
    if (password.length < 8) {
      return res.status(400).json({ error: 'Password must be at least 8 characters long' });
    }

    // Assuming you have a file upload middleware that sets req.file
    const profilePicture = req.file ? req.file.path : null;

    const newUser = new User({
      username,
      email,
      password: Crypto.AES.encrypt(req.body.password, process.env.PASSWORD).toString(),
      confirmPassword: Crypto.AES.encrypt(req.body.password, process.env.PASSWORD).toString(),
      phone,
      isSeller: userType === 'seller',
      isAdmin:  adminType === 'yes',
      businessLocation,
      interests,
      profilePicture: profilePictureUrl,
    });

    // Save the user to the database
    await newUser.save();

    // Generate an access token
    const token = jwt.sign(
      {
        id: newUser._id,
        isSeller: newUser.isSeller,
        isAdmin: newUser.isAdmin,
      },
      process.env.JWT_KEY
    );

    // Set the access token cookie
    res.cookie("accessToken", token, {
      httpOnly: true,
    });

    // Respond with a success message
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
    next(error);
  }
};



export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) return next(createError(404, "User not found!"));

    // Use CryptoJS to decrypt the stored password
    const decryptedPassword = Crypto.AES.decrypt(
      user.password,
      process.env.PASSWORD
    ).toString(Crypto.enc.Utf8);

    if (req.body.password !== decryptedPassword) {
      return next(createError(400, "Wrong password or username!"));
    }

    const token = jwt.sign(
      {
        id: user._id,
        isSeller: user.isSeller,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_KEY
    );

    const { password, ...info } = user._doc;
    res
    .cookie("accessToken", token, {
      httpOnly: true,
    })
    .status(200)
    .json({
      message: "Login successful!",
      user: info,
    });
} catch (err) {
  next(err);
}
};

export const logout = async (req, res) => {
  res
    .clearCookie("accessToken", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .send("User has been logged out.");
};
