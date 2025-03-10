import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { userRouter } from "./routes/user.js";
import { recipesRouter } from "./routes/recipes.js";

dotenv.config(); // Load environment variables

const app = express();

app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Allow requests from all origins

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

const mongodbUser = process.env.MONGODB_USER;
const mongodbPwd = process.env.MONGODB_PWD;

mongoose.connect(
 `mongodb+srv://${mongodbUser}:${mongodbPwd}@recipes.qsd5v.mongodb.net/?retryWrites=true&w=majority&appName=recipes`
)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.listen(3001, () => console.log("Server started"));
