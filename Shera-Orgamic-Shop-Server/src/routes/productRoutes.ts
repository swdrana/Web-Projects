import { Router } from 'express';
import multer from 'multer';
import { Product } from '../models/product';  // Update path accordingly

import fs from 'fs';
import path from 'path';

const router: Router = Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });
router.post('/', upload.fields([
  { name: 'productThumbnail', maxCount: 1 },
  { name: 'productGallery', maxCount: 10 }
]), async (req, res) => {
  try {
    if (!req.files || Array.isArray(req.files)) {
      return res.status(400).send('No files uploaded.');
    }

    const files = req.files as { [fieldname: string]: Express.Multer.File[] }; // Type assertion here

    const productData = {
      ...req.body,
      productThumbnail: files.productThumbnail ? files.productThumbnail[0].path : '',
      productGallery: files.productGallery ? files.productGallery.map(file => file.path) : [],
      variants: req.body.variants ? JSON.parse(req.body.variants) : [],
      isPublished: req.body.isPublished === 'true',
    };
    
    const product = new Product(productData);
    
    await product.save();
    res.status(201).send(product);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Retrieve a single product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    console.log(product)
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// New GET route to fetch all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();  // Fetch all products from the database
    res.status(200).json(products);  // Send the products as a JSON response
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.put('/:id', upload.fields([
  { name: 'productThumbnail', maxCount: 1 },
  { name: 'productGallery', maxCount: 10 }
]), async (req, res) => {
  try {
    const productId = req.params.id;
    const files = req.files as { [fieldname: string]: Express.Multer.File[] };

    const oldProduct = await Product.findById(productId);

    if (!oldProduct) {
      return res.status(404).send('Product not found');
    }

    const productData = {
      ...req.body,
      productThumbnail: files.productThumbnail ? files.productThumbnail[0].path : oldProduct.productThumbnail,
      productGallery: files.productGallery ? files.productGallery.map(file => file.path) : oldProduct.productGallery,
      variants: req.body.variants ? JSON.parse(req.body.variants) : [],
      isPublished: req.body.isPublished === 'true',
    };

    // Remove old files if new ones are uploaded
    if (files.productThumbnail && oldProduct.productThumbnail) {
      fs.unlink(oldProduct.productThumbnail, (err) => {
        if (err) console.error("Error deleting old thumbnail:", err);
      });
    }

    if (files.productGallery && oldProduct.productGallery) {
      oldProduct.productGallery.forEach(oldFilePath => {
        fs.unlink(oldFilePath, (err) => {
          if (err) console.error("Error deleting old gallery image:", err);
        });
      });
    }

    const updatedProduct = await Product.findByIdAndUpdate(productId, productData, { new: true });

    res.status(200).json(updatedProduct);
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error:', error);
      res.status(500).send(`Internal Server Error: ${error.message}`);
    } else {
      console.error('An unknown error occurred');
      res.status(500).send('Internal Server Error');
    }
  }
  
});







router.delete('/:id', async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).send('Product not found');
    }

    // Function to attempt to delete an image file and log an error if it occurs
    const deleteImage = (imagePath: string) => {

      // If an image file path exists, try to remove it from the filesystem.
    if (imagePath) {
      fs.unlink(imagePath, (err) => {
        if (err) {
          console.error("Error deleting the file:", err);
        }
      });
    }
    };
    

    // Delete Thumbnail
    if (typeof product.productThumbnail === 'string') {
      deleteImage(product.productThumbnail);
    }

    // Delete Gallery Images
    product.productGallery.forEach(deleteImage);

    // Delete Product from DB
    await Product.findByIdAndDelete(productId);

    res.status(200).json({ message: 'Product and associated files deleted successfully!' });

  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});



export default router;
