const express = require("express");
require("./eureka-helper");
const app = express();

const bookingRouter = require("./bookingRouter");

const port = process.env.PORT || 3007;

app.use(express.json());

app.use(bookingRouter);

app.listen(port, () => {
  console.log(`Server Connected on Port ${port}`);
});
