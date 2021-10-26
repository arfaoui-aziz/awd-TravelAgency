const express = require("express");

const router = new express.Router();

router.get("/book", async (req, res) => {
  res.status(200).send("Book Microservice");
});

module.exports = router;
