import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import uploadRoute from "./routes/upload.js";
import productsRoute from "./routes/product.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// routes
app.use("/upload", uploadRoute);
app.use("/products", productsRoute);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
