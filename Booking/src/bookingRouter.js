const express = require("express");
const Booking = require("./booking");

const router = new express.Router();

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

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
