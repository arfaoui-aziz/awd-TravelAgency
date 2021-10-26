const express = require("express");
const cors = require("cors");
const connectToDB = require("../config/db");
require("./eureka-helper");
const app = express();

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

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
