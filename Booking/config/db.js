const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://awd:awd@awd.eiafa.mongodb.net/awd?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      }
    );

    console.log("Connected successfully To DB");
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectToDB;
//SCRAPER_API_KEY="1fc696b5-c58e-42ac-88b6-143beb31224e"
