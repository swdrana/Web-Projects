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
router.get("/:id", async (req, res) => {
  const userId = req.params.id;
  await connectMongoClient();
  const usersCollection = client.db('sheraorganicshopdb').collection('users');
  const user = await usersCollection.findOne({ _id: new ObjectId(userId) });
  res.send(user);
});

// Get a specific user by email
router.get("/:email", async (req, res) => {
  const userEmail = req.params.email;

  try {
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


// Create a new user
// Create a new user
router.post("/", async (req, res) => {
    try {
      const userData = req.body;
  
      // Check if the user is swdrana1@gmail.com
      if (userData.email === process.env.CEO_EMAIL) {
        // Set the role to admin
        userData.role = "admin";
      } else {
        // Set the default role to user
        userData.role = "user";
      }
  
      console.log('Received user data:', userData);
      await connectMongoClient();
      const usersCollection = client.db('sheraorganicshopdb').collection('users');
      const result = await usersCollection.insertOne(userData);
  
      console.log('Insert result:', result);
  
      if (result.insertedId) {
        console.log('User created successfully:', result.insertedId);
        const insertedUser = await usersCollection.findOne({ _id: result.insertedId });
        
        if (insertedUser) {
          res.send(insertedUser);
        } else {
          console.error('Error creating user: Inserted user not found');
          res.status(500).send('Internal Server Error: Inserted user not found');
        }
      } else {
        console.error('Error creating user: No document inserted');
        res.status(500).send('Internal Server Error: No document inserted');
      }
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).send(`Internal Server Error: ${error.message}`);
    }
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
