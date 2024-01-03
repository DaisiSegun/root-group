import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import userRoute from './routes/user.route.js'
import authRoute from './routes/auth.route.js'
import spRoute from './routes/sp.route.js'
import catRoute from './routes/cat.route.js'
import cookieParser from "cookie-parser"
import reviewRoute from './routes/review.route.js'
import cors from "cors";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.set('strictQuery', true);

const connect = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.log(error);
  }
}

app.use(express.json());
app.use(cookieParser());

app.use(cors({ origin: "https://busy-rose-nematode-sari.cyclic.app", credentials: true }));


app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/services", spRoute);
app.use("/api/cat", catRoute);
app.use("/api/reviews", reviewRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";

  return res.status(errorStatus).send(errorMessage);
});

app.listen(PORT, () => {
  connect();
  console.log(`Backend server is running on port ${PORT}!`);
});
