const express = require("express");
const router = express.Router();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const isAdminMiddleware = require('../middlewares/isAdminMiddleware');
const { getClient, connectMongoClient } = require('../db/mongoDB');
const client = getClient();  // Get the client instance from the shared module
require('dotenv').config();

// Get all products
router.get("/", async (_req, res) => {
  try {
    await connectMongoClient();
    const productsCollection = client.db('sheraorganicshopdb').collection('products');
    const cursor = productsCollection.find();
    const result = await cursor.toArray();
    res.send(result);
  } catch (error) {
    console.error("Error getting products:", error);
    res.status(500).send(`Internal Server Error: ${error.message}`);
  }
});

// Get a specific product by ID
router.get("/:id", async (req, res) => {
  const productId = req.params.id;
  try {
    await connectMongoClient();
    const productsCollection = client.db('sheraorganicshopdb').collection('products');
    const product = await productsCollection.findOne({ _id: new ObjectId(productId) });
    res.send(product);
  } catch (error) {
    console.error("Error finding product:", error);
    res.status(500).send(`Internal Server Error: ${error.message}`);
  }
});

// Create a new product
router.post("/", isAdminMiddleware, async (req, res) => {
  try {
    const productData = req.body;

    await connectMongoClient();
    const productsCollection = client.db('sheraorganicshopdb').collection('products');

    const result = await productsCollection.insertOne(productData);

    console.log('Insert result:', result);

    if (result.insertedId) {
      console.log('Product created successfully:', result.insertedId);
      const insertedProduct = await productsCollection.findOne({ _id: result.insertedId });

      if (insertedProduct) {
        res.send(insertedProduct);
      } else {
        console.error('Error creating product: Inserted product not found');
        res.status(500).send('Internal Server Error: Inserted product not found');
      }
    } else {
      console.error('Error creating product: No document inserted');
      res.status(500).send('Internal Server Error: No document inserted');
    }
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).send(`Internal Server Error: ${error.message}`);
  }
});

// Update a product by ID
router.put("/:id", async (req, res) => {
  const productId = req.params.id;
  const updatedProductData = req.body;
  await connectMongoClient();
  const productsCollection = client.db('sheraorganicshopdb').collection('products');
  const result = await productsCollection.updateOne(
    { _id: new ObjectId(productId) },
    { $set: updatedProductData }
  );
  res.send({ success: result.modifiedCount > 0 });
});

// Delete a product by ID
router.delete("/:id", isAdminMiddleware, async (req, res) => {
  const productId = req.params.id;
  await connectMongoClient();
  const productsCollection = client.db('sheraorganicshopdb').collection('products');
  const result = await productsCollection.deleteOne({ _id: new ObjectId(productId) });
  res.send({ success: result.deletedCount > 0 });
});
// Calculate total price
router.post("/calculateTotalPrice", async (req, res) => {
  try {
    const { productId, selectedVariant, quantity } = req.body;

    // Fetch the product price and perform the calculation
    await connectMongoClient();
    const productsCollection = client.db('sheraorganicshopdb').collection('products');
    const product = await productsCollection.findOne({ _id: new ObjectId(productId) });

    if (product && product.variants && product.variants[selectedVariant]) {
      const variantPrice = product.variants[selectedVariant].price;
      const totalPrice = variantPrice * quantity;
      const deliveryCharge = 100;
      const totalPriceWithDeliveryCharge = totalPrice + deliveryCharge;
      res.send({ totalPrice, deliveryCharge, totalPriceWithDeliveryCharge });
    } else {
      res.status(404).send("Product or variant not found");
    }
  } catch (error) {
    console.error("Error calculating total price:", error);
    res.status(500).send(`Internal Server Error: ${error.message}`);
  }
});
module.exports = router;
