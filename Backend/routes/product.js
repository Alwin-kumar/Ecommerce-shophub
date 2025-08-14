import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// GET all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET popular in women (your existing route)
router.get("/popularinwomen", async (req, res) => {
  try {
    const products = await Product.find().limit(8); // adjust filter as needed
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST new product
router.post("/", async (req, res) => {
  const { name, image, old_price, new_price } = req.body;
  try {
    const product = new Product({
      name,
      image, // now will be cloudinary URL
      old_price,
      new_price
    });
    await product.save();
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
