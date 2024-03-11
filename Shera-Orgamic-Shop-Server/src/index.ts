import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import categoryRoutes from './routes/categoryRoutes';
import productRoutes from './routes/productRoutes';
import cors from 'cors'; // CORS (Cross-Origin Resource Sharing) middleware
import multer from 'multer';
import bodyParser from 'body-parser';

// Load environment variables from a .env file into process.env
dotenv.config();

const upload = multer();
const app = express();

// Set the maximum request body size (useful for uploads)
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Define the port the server will run on
const port = process.env.PORT || 3000;
// Serve static files from the 'uploads' directory
app.use('/uploads', express.static('uploads'));

// Middleware to parse JSON requests into JS objects
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// Asynchronous function to connect to MongoDB
async function connectDB() {
  try {
    await mongoose.connect(process.env.DB_URI as string, { useNewUrlParser: true, useUnifiedTopology: true } as any);
    console.log('DB Connected'); // Log success
  } catch (err) {
    console.error('DB Connection Error:', err); // Log errors
  }
}

// Connect to the database
connectDB();

// Define API routes
app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);

// Start the server on the defined port
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`); // Log the URL where the server is running
});
