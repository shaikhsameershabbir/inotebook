const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri);
async function connectToMongo() {
  try {
    console.log("connected Successfully ");
  } catch {
    console.log("Mongo error - ", error);
  }
}

module.exports = connectToMongo;
