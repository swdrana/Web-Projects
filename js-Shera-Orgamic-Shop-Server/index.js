const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const categoryRoutes = require('./routes/categoryRoutes');
const userRoutes = require('./routes/userRoutes');
const productsRoute = require('./routes/productsRoute');
const { connectMongoClient } = require('./db/mongoDB');
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
});

// Initialize MongoDB connection
connectMongoClient();

// Define API routes
app.use('/api/categories', categoryRoutes);
app.use('/api/users', userRoutes);
app.use('/api/products', productsRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
