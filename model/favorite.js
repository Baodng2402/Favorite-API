const mongoose = require("mongoose");

const favoriteSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  artName: String,
  image: String,
  price: Number,
  brand: String,
  limitedTimeDeal: Number
}, { timestamps: true });

module.exports = mongoose.model("Favorite", favoriteSchema);
