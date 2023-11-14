const express = require("express");
const router = express.Router();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();

const isAdminMiddleware = require('../middlewares/isAdminMiddleware');
const { getClient, connectMongoClient } = require('../db/mongoDB');
const client = getClient();  // Get the client instance from the shared module

// Get all categories
router.get("/", async (_req, res) => {
  try {
    await connectMongoClient();
    const categoriesCollection = client.db('sheraorganicshopdb').collection('categories');
    const cursor = categoriesCollection.find();
    const result = await cursor.toArray();
    res.send(result);
  } catch (error) {
    console.error("Error getting categories:", error);
    res.status(500).send(`Internal Server Error: ${error.message}`);
  }
});

// Get a specific category by ID
router.get("/:id", async (req, res) => {
  const categoryId = req.params.id;
  try {
    await connectMongoClient();
    const categoriesCollection = client.db('sheraorganicshopdb').collection('categories');
    const category = await categoriesCollection.findOne({ _id: new ObjectId(categoryId) });
    res.send(category);
  } catch (error) {
    console.error("Error finding category:", error);
    res.status(500).send(`Internal Server Error: ${error.message}`);
  }
});

// Create a new category
router.post("/", async (req, res) => {
    try {
      const categoryData = req.body;
      console.log('Received category data:', categoryData);
      
      await connectMongoClient();
      const categoriesCollection = client.db('sheraorganicshopdb').collection('categories');
      
      // Check if a category with the same name already exists
      const existingCategory = await categoriesCollection.findOne({ categoryName: categoryData.categoryName });
  
      if (existingCategory) {
        console.error('Error creating category: Category name must be unique');
        return res.status(400).send('Category name must be unique');
      }
  
      const result = await categoriesCollection.insertOne(categoryData);
  
      console.log('Insert result:', result);
  
      if (result.insertedId) {
        console.log('Category created successfully:', result.insertedId);
        const insertedCategory = await categoriesCollection.findOne({ _id: result.insertedId });
  
        if (insertedCategory) {
          res.send(insertedCategory);
        } else {
          console.error('Error creating category: Inserted category not found');
          res.status(500).send('Internal Server Error: Inserted category not found');
        }
      } else {
        console.error('Error creating category: No document inserted');
        res.status(500).send('Internal Server Error: No document inserted');
      }
    } catch (error) {
      console.error("Error creating category:", error);
      res.status(500).send(`Internal Server Error: ${error.message}`);
    }
  });
  

// Update a category by ID
router.put("/:id", async (req, res) => {
  const categoryId = req.params.id;
  const updatedCategoryData = req.body;
  await connectMongoClient();
  const categoriesCollection = client.db('sheraorganicshopdb').collection('categories');
  const result = await categoriesCollection.updateOne(
    { _id: new ObjectId(categoryId) },
    { $set: updatedCategoryData }
  );
  res.send({ success: result.modifiedCount > 0 });
});

// Delete a category by ID
router.delete("/:id", async (req, res) => {
  const categoryId = req.params.id;
  await connectMongoClient();
  const categoriesCollection = client.db('sheraorganicshopdb').collection('categories');
  const result = await categoriesCollection.deleteOne({ _id: new ObjectId(categoryId) });
  res.send({ success: result.deletedCount > 0 });
});

module.exports = router;
