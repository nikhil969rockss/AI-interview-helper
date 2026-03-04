const mongoose = require("mongoose");

async function connectDB() {
  mongoose.connect(process.env.MONGO_URI);
  console.log("Connected to database")
}

module.exports = connectDB;
