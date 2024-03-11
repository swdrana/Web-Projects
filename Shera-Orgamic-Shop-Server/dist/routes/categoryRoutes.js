"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const category_1 = require("../models/category");
const fs_1 = __importDefault(require("fs"));
const router = (0, express_1.Router)();
// Setup Multer and specify the storage strategy
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString() + file.originalname);
    },
});
// Filter files based on type
const fileFilter = (req, file, cb) => {
    // Accept images only
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    }
    else {
        cb(null, false);
    }
};
const upload = (0, multer_1.default)({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5, // Allow up to 5MB
    },
    fileFilter: fileFilter,
});
// POST endpoint to create a new category.
router.post('/', upload.single('categoryImage'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Log file info
        console.log(req.file);
        if (!req.file) {
            return res.status(400).send('No file uploaded.');
        }
        // Create a new category using the Category model and request body.
        const category = new category_1.Category(Object.assign(Object.assign({}, req.body), { categoryImage: req.file.path // Add image path to the database
         }));
        yield category.save();
        res.status(201).send(category); // Send back the new category.
    }
    catch (error) {
        // Handle error (e.g. validation error)
        res.status(400).send(error);
    }
}));
// [Other routes remain unchanged]
// GET endpoint to retrieve all categories.
router.get('/', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield category_1.Category.find();
        res.send(categories);
    }
    catch (error) {
        // Handle error (e.g. database error)
        res.status(500).send(error);
    }
}));
// PUT endpoint to update a category by ID.
router.put('/:id', upload.single('categoryImage'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const oldCategory = yield category_1.Category.findById(req.params.id);
        if (!oldCategory) {
            return res.status(404).send('Category not found');
        }
        // If a new file is uploaded, delete the old one and update with the new one
        if (req.file) {
            fs_1.default.unlinkSync(oldCategory.categoryImage); // Synchronously delete the old file
            oldCategory.categoryImage = req.file.path;
        }
        // Update other properties
        oldCategory.categoryName = req.body.categoryName || oldCategory.categoryName;
        // Add other fields to update as needed...
        yield oldCategory.save(); // Save the updated category
        res.send(oldCategory); // Send back the updated category
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
// DELETE endpoint to remove a category by ID.
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = yield category_1.Category.findById(req.params.id);
        if (!category) {
            return res.status(404).send('Category not found');
        }
        // If an image file path exists, try to remove it from the filesystem.
        if (category.categoryImage) {
            fs_1.default.unlink(category.categoryImage, (err) => {
                if (err) {
                    console.error("Error deleting the file:", err);
                }
            });
        }
        // await category.remove();
        yield category_1.Category.findByIdAndDelete(req.params.id);
        res.send(category); // Send back the deleted category
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
// Export the router for use in other modules.
exports.default = router;
