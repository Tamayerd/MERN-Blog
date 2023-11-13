import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { errorResponseHandler, inivalidPathHandler } from "./middleware/errorHandler.js";
//Routes
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
connectDB();
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.use("/users", userRoutes);
app.use(inivalidPathHandler)
app.use(errorResponseHandler);

app.listen(PORT, () => console.log(`Server is running on port ${PORT} `));
