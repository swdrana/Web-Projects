const express = require('express');
const { connectMongoClient, getClient } = require('../db/mongoDB');
const { ObjectId } = require('mongodb');

const client = getClient();  // Get the client instance from the shared module
const router = express.Router();

// Add item to the cart
router.post("/:userId/add-to-cart", async (req, res) => {
  const userId = req.params.userId;
  const { _id, selectedVariant, quantity } = req.body;

  try {
    await connectMongoClient();
    const usersCollection = client.db('sheraorganicshopdb').collection('users');

    const user = await usersCollection.findOne({ _id: new ObjectId(userId) });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (!user.cart) {
      await usersCollection.updateOne(
        { _id: new ObjectId(userId) },
        { $set: { cart: [] } }
      );
    }

    // Check if the item with the given _id and selectedVariant already exists in the cart
    const existingCartItem = user.cart.find(item => item._id === _id && item.selectedVariant === selectedVariant);

    if (existingCartItem) {
      // Item with the same _id and selectedVariant already exists
      return res.json({ message: "Item with the same variant already exists in the cart. Cannot add to cart." });
    }

    // If the item doesn't exist, add it to the cart
    const cartItem = {
      _id,
      selectedVariant,
      quantity
    };

    const result = await usersCollection.updateOne(
      { _id: new ObjectId(userId) },
      { $push: { cart: cartItem } }
    );

    res.json({ success: result.modifiedCount > 0 });
  } catch (error) {
    console.error("Error adding item to the cart:", error);
    res.status(500).json({ error: `Internal Server Error: ${error.message}` });
  }
});


// Get all cart items for a user
router.get("/:userId/get-cart", async (req, res) => {
  const userId = req.params.userId;

  try {
    await connectMongoClient();
    const usersCollection = client.db('sheraorganicshopdb').collection('users');

    const user = await usersCollection.findOne({ _id: new ObjectId(userId) });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const cartItems = user.cart || [];

    res.json({ cartItems });
  } catch (error) {
    console.error("Error getting user's cart:", error);
    res.status(500).json({ error: `Internal Server Error: ${error.message}` });
  }
});

// Update a cart item for a user
router.put("/:userId/update-cart/:itemId", async (req, res) => {
  const userId = req.params.userId;
  const itemId = req.params.itemId;
  const { selectedVariant, quantity } = req.body;

  try {
    await connectMongoClient();
    const usersCollection = client.db('sheraorganicshopdb').collection('users');

    const result = await usersCollection.updateOne(
      { _id: new ObjectId(userId), "cart._id": itemId },
      { $set: { "cart.$.selectedVariant": selectedVariant, "cart.$.quantity": quantity } }
    );

    res.json({ success: result.modifiedCount > 0 });
  } catch (error) {
    console.error("Error updating cart item:", error);
    res.status(500).json({ error: `Internal Server Error: ${error.message}` });
  }
});

// Delete a cart item for a user
router.delete("/:userId/delete-cart/:itemId", async (req, res) => {
  const userId = req.params.userId;
  const itemId = req.params.itemId;

  try {
    await connectMongoClient();
    const usersCollection = client.db('sheraorganicshopdb').collection('users');

    const result = await usersCollection.updateOne(
      { _id: new ObjectId(userId) },
      { $pull: { cart: { _id: itemId } } }
    );

    res.json({ success: result.modifiedCount > 0 });
  } catch (error) {
    console.error("Error deleting cart item:", error);
    res.status(500).json({ error: `Internal Server Error: ${error.message}` });
  }
});

module.exports = router;
