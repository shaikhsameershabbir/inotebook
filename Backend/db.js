const { MongoClient } = require("mongodb");
const { mongoose } = require("mongoose");

// Replace the uri string with your connection string.
const mongoUri = "mongodb://127.0.0.1:27017/inotebook";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoUri);
    console.log("connected Sccusfully ");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectToMongo;
