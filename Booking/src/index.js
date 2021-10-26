const express = require("express");
const cors = require("cors");
const connectToDB = require("../config/db");
require("./eureka-helper");
const app = express();

const bookingRouter = require("./bookingRouter");

const port = process.env.PORT || 3007;

app.use(cors());
app.use(express.json());

//* Connect to DB
connectToDB();

app.use(bookingRouter);

app.listen(port, () => {
  console.log(`Server Connected on Port ${port}`);
});
