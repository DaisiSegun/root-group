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

const app = express()
dotenv.config();
mongoose.set('strictQuery', true)

const connect = async () => {
  try {
    await mongoose.connect (process.env.MONGO);
    console.log("Connected to mongoDB!")
  } catch (error) {
    console.log(error);
  }
}

app.use(express.json());
app.use(cookieParser());

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use ("/api/users", userRoute)
app.use ("/api/auth", authRoute)
app.use("/api/services", spRoute);
app.use("/api/cat", catRoute);
app.use("/api/reviews", reviewRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";

  return res.status(errorStatus).send(errorMessage);
});

app.listen (8800, ()=> {
  connect()
  console.log('Backend server is running!')
})