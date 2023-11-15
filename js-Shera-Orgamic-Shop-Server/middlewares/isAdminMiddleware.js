// isAdminMiddleware.js

const { connectMongoClient, getClient } = require("../db/mongoDB");

const isAdminMiddleware = async (req, res, next) => {
  try {
    const userEmail = req.headers.email;
console.log(userEmail)
    await connectMongoClient();
    const usersCollection = getClient()
      .db("sheraorganicshopdb")
      .collection("users");

    // Fetch the user's information from the database using the email
    const user = await usersCollection.findOne({ email: userEmail });

    // Check if the user is an admin
    if (user && user.role === "admin") {
      next(); // User is an admin, proceed to the next middleware or route handler
    } else {
      res.status(403).send("Forbidden: Access denied. User is not an admin.");
    }
  } catch (error) {
    console.error("Error checking admin status:", error);
    res.status(500).send(`Internal Server Error: ${error.message}`);
  }
};

module.exports = isAdminMiddleware;
