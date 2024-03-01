const express = require("express");
const router = express.Router();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const isAdminMiddleware = require('../middlewares/isAdminMiddleware');
const { getClient, connectMongoClient } = require('../db/mongoDB');
const client = getClient();  // Get the client instance from the shared module
require('dotenv').config();

// Get all orders sorted by createdAt in descending order
router.get("/", async (_req, res) => {
  try {
    await connectMongoClient();
    const ordersCollection = client.db('sheraorganicshopdb').collection('orders');
    
    // Sort by createdAt field in descending order
    const cursor = ordersCollection.find().sort({ createdAt: -1 });
    
    const result = await cursor.toArray();
    res.send(result);
  } catch (error) {
    console.error("Error getting orders:", error);
    res.status(500).send(`Internal Server Error: ${error.message}`);
  }
});

// get orders by user email in descending order of createdAt
router.get("/user/:email", async (req, res) => {
  const userEmail = req.params.email;

  try {
    await connectMongoClient();
    const ordersCollection = client.db('sheraorganicshopdb').collection('orders');

    // Find orders for the specified user email and sort by createdAt in descending order
    const userOrders = await ordersCollection.find({ 'personalInformation.email': userEmail })
      .sort({ createdAt: -1 })
      .toArray();

    res.send(userOrders);
  } catch (error) {
    console.error("Error getting user orders:", error);
    res.status(500).send(`Internal Server Error: ${error.message}`);
  }
});


// Get a specific order by ID
router.get("/:id", async (req, res) => {
  const orderId = req.params.id;
  try {
    await connectMongoClient();
    const ordersCollection = client.db('sheraorganicshopdb').collection('orders');
    const order = await ordersCollection.findOne({ _id: parseInt(orderId) });

    if (order) {
      res.send(order);
    } else {
      res.status(404).send('Order not found');
    }
  } catch (error) {
    console.error("Error finding order:", error);
    res.status(500).send(`Internal Server Error: ${error.message}`);
  }
});


// Create a new order
router.post("/", async (req, res) => {
  try {
    const orderData = req.body;

    // Add createdAt and updatedAt timestamps
    orderData.createdAt = new Date();

    await connectMongoClient();
    const ordersCollection = client.db('sheraorganicshopdb').collection('orders');

    // Fetch the latest order to get the last used _id value
    const latestOrder = await ordersCollection.findOne({}, { sort: { _id: -1 } });

    // Calculate the next _id value
    const nextId = latestOrder ? latestOrder._id + 1 : 0;

    // Set the _id and updatedAt fields
    orderData._id = nextId;
    orderData.updatedAt = new Date();
    orderData.status = "pending";

    // Insert the new order
    const result = await ordersCollection.insertOne(orderData);

    if (result.insertedId) {
      console.log('Order created successfully:', result.insertedId);
      const insertedOrder = await ordersCollection.findOne({ _id: result.insertedId });

      if (insertedOrder) {
        res.send(insertedOrder);
      } else {
        console.error('Error creating order: Inserted order not found');
        res.status(500).send('Internal Server Error: Inserted order not found');
      }
    } else {
      console.error('Error creating order: No document inserted');
      res.status(500).send('Internal Server Error: No document inserted');
    }
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).send(`Internal Server Error: ${error.message}`);
  }
});


// Update an order by ID
router.put("/:id", async (req, res) => {
  const orderId = req.params.id;
  const updatedOrderData = req.body;

  // Update the updatedAt timestamp
  updatedOrderData.updatedAt = new Date();

  try {
    await connectMongoClient();
    const ordersCollection = client.db('sheraorganicshopdb').collection('orders');

    const result = await ordersCollection.updateOne(
      { _id: parseInt(orderId) },
      { $set: updatedOrderData }
    );

    if (result.modifiedCount > 0) {
      res.send({ success: true, message: 'Order updated successfully' });
    } else {
      res.status(404).send('Order not found or no changes were made');
    }
  } catch (error) {
    console.error("Error updating order:", error);
    res.status(500).send(`Internal Server Error: ${error.message}`);
  }
});

// Delete an order by ID
router.delete("/:id", isAdminMiddleware, async (req, res) => {
  const orderId = req.params.id;
  try {
    await connectMongoClient();
    const ordersCollection = client.db('sheraorganicshopdb').collection('orders');

    const result = await ordersCollection.deleteOne({ _id: parseInt(orderId) });

    if (result.deletedCount > 0) {
      res.send({ success: true, message: 'Order deleted successfully' });
    } else {
      res.status(404).send('Order not found or already deleted');
    }
  } catch (error) {
    console.error("Error deleting order:", error);
    res.status(500).send(`Internal Server Error: ${error.message}`);
  }
});


module.exports = router;
