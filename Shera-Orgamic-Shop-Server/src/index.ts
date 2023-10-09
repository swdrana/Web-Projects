import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import categoryRoutes from './routes/categoryRoutes';
import productRoutes from './routes/productRoutes'; 
import cors from 'cors';  // <-- Import cors here
import multer from 'multer';
import bodyParser from 'body-parser';


dotenv.config();

const upload = multer();
const app = express();
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
const port = process.env.PORT || 3000;
// Serve static files from the 'uploads' directory
app.use('/uploads', express.static('uploads'));

// app.use('/uploads', express.static('uploads'));
// app.use('/dashboard/uploads', express.static('uploads'));
// Use express.json middleware to parse JSON requests into JS objects.
app.use(express.json());

// Add the CORS middleware
app.use(cors());  // <-- Use cors here. This will enable CORS for all routes.

// Asynchronous function to connect to the database.
async function connectDB() {
  try {
    await mongoose.connect(process.env.DB_URI as string, { useNewUrlParser: true, useUnifiedTopology: true } as any);
    console.log('DB Connected');
  } catch (err) {
    console.error('DB Connection Error:', err);
  }
}

// Execute the function to establish database connection.
connectDB();

// Use the category router for paths starting with '/categories'.
app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);
// Start the server and listen on the given port.
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
