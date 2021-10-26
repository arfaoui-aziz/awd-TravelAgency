const express = require("express");
const Booking = require("./booking");
const axios = require("axios");
const router = new express.Router();

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const { find } = require("./booking");

router.use("/api-docs", swaggerUi.serve);
router.get("/api-docs", swaggerUi.setup(swaggerDocument));

router.post("/booking", async (req, res) => {
  const booking = new Booking(req.body);
  try {
    await booking.save();
    res.status(201).send(booking);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/booking/me/:id", async (req, res) => {
  try {
    const MyBookings = await Booking.find({ userID: req.params.id });
    let bookInfo = [];
    let MyBookingsInfo;
    for (let i = 0; i < MyBookings.length; i++) {
      let response = await axios.get(
        `http://localhost:8080/${MyBookings[i].type}s/search/${MyBookings[i].type}ById?id=${MyBookings[i].serviceID}`
      );
      MyBookingsInfo = response.data._embedded.hotels;

      bookInfo = [...bookInfo, MyBookingsInfo];
    }

    res.send(bookInfo);

    console.log("boiz");
  } catch (e) {
    res.send(e);
    console.log(e);
  }
});

router.get("/booking", async (req, res) => {
  try {
    const bookings = await Booking.find({});
    !bookings && console.log("empty");
    res.send(bookings);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.delete("/booking/:id", async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) return res.status(404).send("Booking Not Found");
    res.send(" Booking deleted ");
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
