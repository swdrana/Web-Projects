const express = require("express");
const router = express.Router();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const isAdminMiddleware = require('../middlewares/isAdminMiddleware');
const { getClient, connectMongoClient } = require('../db/mongoDB');
const client = getClient();  // Get the client instance from the shared module
require('dotenv').config();

// Get all coupons
router.get("/", async (_req, res) => {
  try {
    await connectMongoClient();
    const couponsCollection = client.db('sheraorganicshopdb').collection('coupons');
    const cursor = couponsCollection.find();
    const result = await cursor.toArray();
    res.send(result);
  } catch (error) {
    console.error("Error getting coupons:", error);
    res.status(500).send(`Internal Server Error: ${error.message}`);
  }
});

// Get a specific coupon by code
router.get("/code/:code", async (req, res) => {
    const couponCode = req.params.code;
    try {
      await connectMongoClient();
      const couponsCollection = client.db('sheraorganicshopdb').collection('coupons');
      const coupon = await couponsCollection.findOne({ code: couponCode });

      if (coupon) {
        res.send(coupon);
      } else {
        res.status(404).send('Coupon not found');
      }
    } catch (error) {
      console.error("Error finding coupon:", error);
      res.status(500).send(`Internal Server Error: ${error.message}`);
    }
});

// Get a specific coupon by ID
router.get("/:id", async (req, res) => {
  const couponId = req.params.id;
  try {
    await connectMongoClient();
    const couponsCollection = client.db('sheraorganicshopdb').collection('coupons');
    const coupon = await couponsCollection.findOne({ _id: new ObjectId(couponId) });

    if (coupon) {
      res.send(coupon);
    } else {
      res.status(404).send('Coupon not found');
    }
  } catch (error) {
    console.error("Error finding coupon:", error);
    res.status(500).send(`Internal Server Error: ${error.message}`);
  }
});

// Create a new coupon
router.post("/", async (req, res) => {
    try {
      const couponData = req.body;
  
      await connectMongoClient();
      const couponsCollection = client.db('sheraorganicshopdb').collection('coupons');
  
      // Check if the coupon code already exists
      const existingCoupon = await couponsCollection.findOne({ code: couponData.code });
      if (existingCoupon) {
        console.error('Error creating coupon: Duplicate coupon code');
        return res.status(400).send('Duplicate coupon code. Please use a unique code.');
      }
  
      const result = await couponsCollection.insertOne(couponData);
  
      console.log('Insert result:', result);
  
      if (result.insertedId) {
        console.log('Coupon created successfully:', result.insertedId);
        const insertedCoupon = await couponsCollection.findOne({ _id: result.insertedId });
  
        if (insertedCoupon) {
          res.send(insertedCoupon);
        } else {
          console.error('Error creating coupon: Inserted coupon not found');
          res.status(500).send('Internal Server Error: Inserted coupon not found');
        }
      } else {
        console.error('Error creating coupon: No document inserted');
        res.status(500).send('Internal Server Error: No document inserted');
      }
    } catch (error) {
      console.error("Error creating coupon:", error);
      res.status(500).send(`Internal Server Error: ${error.message}`);
    }
});

// Update a coupon by ID
router.put("/:id", async (req, res) => {
  const couponId = req.params.id;
  const updatedCouponData = req.body;
  try {
    await connectMongoClient();
    const couponsCollection = client.db('sheraorganicshopdb').collection('coupons');

    const result = await couponsCollection.updateOne(
      { _id: new ObjectId(couponId) },
      { $set: updatedCouponData }
    );

    if (result.modifiedCount > 0) {
      res.send({ success: true, message: 'Coupon updated successfully' });
    } else {
      res.status(404).send('Coupon not found or no changes were made');
    }
  } catch (error) {
    console.error("Error updating coupon:", error);
    res.status(500).send(`Internal Server Error: ${error.message}`);
  }
});

// Delete a coupon by ID
router.delete("/:id", isAdminMiddleware, async (req, res) => {
  const couponId = req.params.id;
  try {
    await connectMongoClient();
    const couponsCollection = client.db('sheraorganicshopdb').collection('coupons');

    const result = await couponsCollection.deleteOne({ _id: new ObjectId(couponId) });

    if (result.deletedCount > 0) {
      res.send({ success: true, message: 'Coupon deleted successfully' });
    } else {
      res.status(404).send('Coupon not found or already deleted');
    }
  } catch (error) {
    console.error("Error deleting coupon:", error);
    res.status(500).send(`Internal Server Error: ${error.message}`);
  }
});

module.exports = router;
