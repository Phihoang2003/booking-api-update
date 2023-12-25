import express from "express";

import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import cors from "cors";
import authRoute from "./routes/auth.js";
import hotelRoute from "./routes/hotel.js";
import userRoute from "./routes/users.js";
import roomRoute from "./routes/room.js";
dotenv.config();

const app = express();
const port = 8800;

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
  } catch (error) {
    throw error;
  }
};
app.use(cors())
// middleware
app.use(cookieParser());

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/hotel", hotelRoute);
app.use("/api/user", userRoute);
app.use("/api/room", roomRoute); 
app.use("/",(req,res)=>{
  res.send("Welcome to server home page")
})

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(port, () => {
  connect();
  console.log("Connected to backend.");
  console.log(`Example app listening on port ${port}`);
});
