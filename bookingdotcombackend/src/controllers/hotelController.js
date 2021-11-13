const express = require("express");
const Hotel = require("../models/hotelModel");

const router = express.Router();
express().use(express.json());

router.get("/", async (req, res) => {
  try {
    const hotels = await Hotel.find().lean().exec();
    return res.send(hotels);
  } catch (error) {
    return res.send(error);
  }
});

module.exports = router;
