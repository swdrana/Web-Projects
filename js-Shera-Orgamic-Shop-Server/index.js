const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const categoryRoutes = require('./routes/categoryRoutes');
const userRoutes = require('./routes/userRoutes');
const productsRoute = require('./routes/productsRoute');
const cartRoutes = require('./routes/cartRoutes');
const buyNowRoutes = require('./routes/buyNowRoutes');
const couponRoutes = require('./routes/couponRoutes');
const orderRoutes = require('./routes/orderRoutes');
const { connectMongoClient } = require('./db/mongoDB');

app.use(express.json());
app.use(cors()); // Enable CORS for all routes

app.get('/', (req, res) => {
  res.send('Hello World!')
});

// Initialize MongoDB connection
connectMongoClient();

// Define API routes
app.use('/api/categories', categoryRoutes);
app.use('/api/users', userRoutes);
app.use('/api/products', productsRoute);
app.use('/api/buynow', buyNowRoutes);
app.use('/api/carts', cartRoutes);
app.use('/api/coupon', couponRoutes);
app.use('/api/orders', orderRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
