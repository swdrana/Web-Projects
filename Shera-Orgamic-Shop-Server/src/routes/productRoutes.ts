import { Router } from 'express';
import multer from 'multer';
import { Product } from '../models/product';  // Update path accordingly

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

// router.post('/', upload.fields([
//   { name: 'productThumbnail', maxCount: 1 },
//   { name: 'productGallery', maxCount: 10 }
// ]), async (req, res) => {
//   try {
//     if (!req.files) {
//       return res.status(400).send('No files uploaded.');
//     }

//     const productData = {
//       ...req.body,
//       productThumbnail: req.files['productThumbnail'] ? req.files['productThumbnail'][0].path : '',
//       productGallery: req.files['productGallery'] ? req.files['productGallery'].map((file: any) => file.path) : [],
//       variants: req.body.variants ? JSON.parse(req.body.variants) : [],
//       isPublished: req.body.isPublished === 'true',
//     };

//     const product = new Product(productData);
    
//     await product.save();
//     res.status(201).send(product);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Internal Server Error');
//   }
// });

export default router;
