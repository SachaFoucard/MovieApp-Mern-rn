const mongoose = require('mongoose');

require('dotenv').config();

async function dbConnect() {
    try {
      await mongoose.connect(process.env.URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Successfully connected to MongoDB Atlas!");
    } catch (error) {
      console.log("Unable to connect to MongoDB Atlas!");
      console.error(error);
    }
  }
  
module.exports = dbConnect;