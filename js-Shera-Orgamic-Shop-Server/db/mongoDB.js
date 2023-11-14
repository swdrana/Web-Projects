const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const uri = process.env.DB_URI;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectMongoClient() {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

function getClient() {
  return client;
}

// Use the `connectMongoClient` function to connect to MongoDB
// connectMongoClient();
module.exports = {
  connectMongoClient,
  getClient,
  // Add other CRUD operations as needed
};
