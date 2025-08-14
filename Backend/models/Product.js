import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true }, // cloudinary url
  old_price: { type: Number, required: true },
  new_price: { type: Number, required: true }
});

export default mongoose.model("Product", productSchema);
