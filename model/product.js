const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  artName: String,
  price: Number,
  description: String,
  glassSurface: Boolean,
  image: String,
  brand: String,
  limitedTimeDeal: Number,
  feedbacks: [
    {
      rating: Number,
      comment: String,
      author: String,
      date: String,
    },
  ],
}, { timestamps: true });

module.exports = mongoose.model("Product", ProductSchema);
