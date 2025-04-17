import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.js";
import mongoose from "mongoose";

dotenv.config(); //Load environment variables from .env file

const app = express(); //Create express app
const PORT = process.env.PORT || 3000; //Set port

app.use(express.json()); //Parse JSON bodies in the request
app.use(cookieParser()); //Parse cookies in the request

app.use("/auth", authRoutes); //Use auth routes

app.get("/", (req, res) => {
  res.send("Welcome to the login/registration system");
});

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });
