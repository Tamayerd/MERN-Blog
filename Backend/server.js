import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

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

app.listen(PORT, () => console.log(`Server is running on port ${PORT} `));
