import { Router } from 'express';
import multer from 'multer';
import { Category } from '../models/category';

const router: Router = Router();

// Setup Multer and specify the storage strategy
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + file.originalname);
  },
});

// Filter files based on type
const fileFilter = (req: any, file: any, cb: any) => {
  // Accept images only
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5, // Allow up to 5MB
  },
  fileFilter: fileFilter,
});

// POST endpoint to create a new category.
router.post('/', upload.single('categoryImage'), async (req, res) => {
  try {
    // Log file info
    console.log(req.file);

    // Create a new category using the Category model and request body.
    const category = new Category({
      ...req.body,
      categoryImage: req.file.path  // Add image path to the database
    });

    await category.save();
    res.status(201).send(category); // Send back the new category.
  } catch (error) {
    // Handle error (e.g. validation error)
    res.status(400).send(error);
  }
});

// [Other routes remain unchanged]

// GET endpoint to retrieve all categories.
router.get('/', async (_req, res) => {
  try {
    const categories = await Category.find();
    res.send(categories);
  } catch (error) {
    // Handle error (e.g. database error)
    res.status(500).send(error);
  }
});

// PUT endpoint to update a category by ID.
router.put('/:id', async (req, res) => {
  try {
    // Update the category and return the new category document.
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!category) {
      return res.status(404).send('Category not found');
    }
    res.send(category);
  } catch (error) {
    // Handle error (e.g. validation or database error)
    res.status(500).send(error);
  }
});

// DELETE endpoint to remove a category by ID.
router.delete('/:id', async (req, res) => {
  try {
    // Delete the category and return the deleted document.
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) {
      return res.status(404).send('Category not found');
    }
    res.send(category);
  } catch (error) {
    // Handle error (e.g. database error)
    res.status(500).send(error);
  }
});

// Export the router for use in other modules.
export default router;