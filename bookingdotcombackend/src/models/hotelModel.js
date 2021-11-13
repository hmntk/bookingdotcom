const mongoose = require("mongoose");

const hotelSchema = mongoose.Schema({
  img_url: { type: String, required: true },
  name: { type: String, required: true },
  category: { type: String, required: true },
  location_string: { type: String, required: true },
  price_level: { type: String, required: true },
  price: { type: Number, required: true },
  category_ext: { type: String, required: true },
  comment: { type: String, required: true },
  rating: { type: String, required: true },
  reviews: [
    { name: { type: String, required: true } },
    { review: { type: String, required: true } },
  ],
  latitude: { type: String, required: true },
  longitude: { type: String, required: true },
  facilities: [{ type: String, required: true }],
  reasons: [{ type: String, required: true }],
});

const Hotel = mongoose.model("hotel", hotelSchema);

module.exports = Hotel;
