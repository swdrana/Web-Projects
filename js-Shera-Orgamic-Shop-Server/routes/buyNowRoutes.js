const express = require("express");
const router = express.Router();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();

const { getClient, connectMongoClient } = require('../db/mongoDB');
const client = getClient();  // Get the client instance from the shared module


// Rest of your route handling code...


// Get all users
router.get("/", async (_req, res) => {
  await connectMongoClient();
  const usersCollection = client.db('sheraorganicshopdb').collection('users');
  const cursor = usersCollection.find();
  const result = await cursor.toArray();
  res.send(result);
});

// Get a specific user by ID
// router.get("/:id", async (req, res) => {
//   const userId = req.params.id;
//   await connectMongoClient();
//   const usersCollection = client.db('sheraorganicshopdb').collection('users');
//   const user = await usersCollection.findOne({ _id: new ObjectId(userId) });
//   res.send(user);
// });

// Get a specific user by email
router.get("/:email", async (req, res) => {
  const userEmail = req.params.email;
  try {
    await connectMongoClient();
    const usersCollection = client.db('sheraorganicshopdb').collection('users');

    const user = await usersCollection.findOne({ email: userEmail });
    // console.log(req)
    if (user) {
      res.send(user);
    } else {
      console.error('User not found');
      res.status(404).send('User not found');
    }
  } catch (error) {
    console.error("Error finding user:", error);
    res.status(500).send(`Internal Server Error: ${error.message}`);
  }
});
// Get a specific user by email
router.get("/byEmail", async (req, res) => {
    try {
      // Get the currently authenticated user's email from headers
      const userEmail = req.headers['user-email'];
  
      if (!userEmail) {
        return res.status(401).send("Unauthorized: User not logged in");
      }
  
      await connectMongoClient();
      const usersCollection = client.db('sheraorganicshopdb').collection('users');
  
      const user = await usersCollection.findOne({ email: userEmail });
  
      if (user) {
        res.send(user);
      } else {
        console.error('User not found');
        res.status(404).send('User not found');
      }
    } catch (error) {
      console.error("Error finding user:", error);
      res.status(500).send(`Internal Server Error: ${error.message}`);
    }
  });

// get info a single product after hit buy now button 
router.post("/", async (req, res) => {
    console.log(req.body);
    res.send("OK")
  });


// Update a user by ID
// router.put("/:id", async (req, res) => {
//   const userId = req.params.id;
//   const updatedUserData = req.body;
//   await connectMongoClient();
//   const usersCollection = client.db('sheraorganicshopdb').collection('users');
//   const result = await usersCollection.updateOne(
//     { _id: new ObjectId(userId) },
//     { $set: updatedUserData }
//   );
//   res.send({ success: result.modifiedCount > 0 });
// });


// Update user by ID for make admin
router.put("/:id", async (req, res) => {
    const userId = req.params.id;
    const updatedUserData = req.body;

    try {
      await connectMongoClient();
      const usersCollection = client.db('sheraorganicshopdb').collection('users');
      
      // Fetch the user's email from the database
      const existingUser = await usersCollection.findOne({ _id: new ObjectId(userId) });
      
      // Check if the user is "swdrana1@gmail.com"
      if (existingUser.email === process.env.CEO_EMAIL) {
        return res.status(403).send("Forbidden: Cannot update role for this user");
      }
  
      const result = await usersCollection.updateOne(
        { _id: new ObjectId(userId) },
        { $set: updatedUserData }
      );
      
      res.send({ success: result.modifiedCount > 0 });
    } catch (error) {
      console.error("Error updating user:", error);
      res.status(500).send(`Internal Server Error: ${error.message}`);
    }
  });


// Delete a user by ID
router.delete("/:id", async (req, res) => {
  const userId = req.params.id;
  await connectMongoClient();
  const usersCollection = client.db('sheraorganicshopdb').collection('users');
  const result = await usersCollection.deleteOne({ _id: new ObjectId(userId) });
  res.send({ success: result.deletedCount > 0 });
});

module.exports = router;
