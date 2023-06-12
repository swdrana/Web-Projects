const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 8080;

const app = express();

//middleware
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("MR Computer Server is running");
});




















app.post("/customers", async (req, res) => {
  try {
    // Create a new customer object from the request body
    const customer = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
    };

    // Insert the customer into the customers collection
    // const result = await customersCollection.insertOne(customer);
    console.log(customer);

    // Send a success response with the ID of the new customer
    res.status(200).json({
      message: `Customer with ID added successfully.`,
    });
  } catch (error) {
    // Send an error response if there is a problem adding the customer
    res.status(500).json({ message: "Error adding customer." });
  }
});

app.listen(port, () => {
  console.log(`MR Computer Server is running on port ${port}`);
});

// // Require the necessary libraries
// const express = require("express");
// const cors = require("cors");
// const axios = require("axios");
// const mongodb = require("mongodb");
// const dotenv = require("dotenv");

// // Load environment variables from .env file
// dotenv.config();

// // Create an instance of express app
// const app = express();

// // Set up cors middleware
// app.use(cors());

// // Set up json middleware for parsing requests
// app.use(express.json());

// // Define the MongoDB connection URL and database name
// const mongoURL = process.env.MONGO_URL;
// const dbName = process.env.DB_NAME;

// // Connect to the MongoDB database
// mongodb.MongoClient.connect(
//   mongoURL,
//   { useNewUrlParser: true },
//   function (err, client) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(`Connected to MongoDB database "${dbName}"`);

//       // Create a new collection object for the customers collection
//       const customersCollection = client.db(dbName).collection("customers");

//       // Define a route for adding a customer
//       app.post("/addcustomer", async (req, res) => {
//         try {
//           // Create a new customer object from the request body
//           const customer = {
//             name: req.body.name,
//             email: req.body.email,
//             phone: req.body.phone,
//           };

//           // Insert the customer into the customers collection
//           const result = await customersCollection.insertOne(customer);
//         console.log(result)

//           // Send a success response with the ID of the new customer
//           res
//             .status(200)
//             .json({
//               message: `Customer with ID ${result.insertedId} added successfully.`,
//             });
//         } catch (error) {
//           // Send an error response if there is a problem adding the customer
//           res.status(500).json({ message: "Error adding customer." });
//         }
//       });

//     }

//   }
// );

// // Require the necessary libraries
// const express = require('express');
// const cors = require('cors');
// const axios = require('axios');
// const mongodb = require('mongodb');
// const dotenv = require('dotenv');

// // Load environment variables from .env file
// dotenv.config();

// // Create an instance of express app
// const app = express();

// // Set up cors middleware
// app.use(cors());

// // Set up json middleware for parsing requests
// app.use(express.json());

// // Define the MongoDB connection URL and database name
// const mongoURL = process.env.MONGO_URL;
// const dbName = process.env.DB_NAME;

// // Connect to the MongoDB database
// mongodb.MongoClient.connect(mongoURL, { useNewUrlParser: true }, function (err, client) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(`Connected to MongoDB database "${dbName}"`);

//     // Create a new collection object for the customers collection
//     const customersCollection = client.db(dbName).collection('customers');

//     // Define a route for adding a customer
//     app.post('/addcustomer', async (req, res) => {
//       try {
//         // Create a new customer object from the request body
//         const customer = {
//           name: req.body.name,
//           email: req.body.email,
//           phone: req.body.phone
//         };

//         // Insert the customer into the customers collection
//         const result = await customersCollection.insertOne(customer);

//         // Send a success response with the ID of the new customer
//         res.status(200).json({ message: `Customer with ID ${result.insertedId} added successfully.` });
//       } catch (error) {
//         // Send an error response if there is a problem adding the customer
//         res.status(500).json({ message: 'Error adding customer.' });
//       }
//     });

//     // Start the express app
//     app.listen(port, () => {
//         console.log(`MR Computer Server is running on port ${port}`);
//         console.log(process.env.MONGO_URL);
//       });
//   }
// });
