const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userID: String,
  type: String,
  serviceID: String,
  bookingDate: String,
  fromDate: String,
  toDate: String,
  price: String,
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
