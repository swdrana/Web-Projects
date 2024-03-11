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
const product_1 = require("../models/product"); // Update path accordingly
const fs_1 = __importDefault(require("fs"));
const router = (0, express_1.Router)();
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString() + '-' + file.originalname);
    },
});
const upload = (0, multer_1.default)({ storage: storage });
router.post('/', upload.fields([
    { name: 'productThumbnail', maxCount: 1 },
    { name: 'productGallery', maxCount: 10 }
]), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.files || Array.isArray(req.files)) {
            return res.status(400).send('No files uploaded.');
        }
        const files = req.files; // Type assertion here
        const productData = Object.assign(Object.assign({}, req.body), { productThumbnail: files.productThumbnail ? files.productThumbnail[0].path : '', productGallery: files.productGallery ? files.productGallery.map(file => file.path) : [], variants: req.body.variants ? JSON.parse(req.body.variants) : [], isPublished: req.body.isPublished === 'true' });
        const product = new product_1.Product(productData);
        yield product.save();
        res.status(201).send(product);
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}));
// Retrieve a single product by ID
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield product_1.Product.findById(req.params.id);
        console.log(product);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}));
// New GET route to fetch all products
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield product_1.Product.find(); // Fetch all products from the database
        res.status(200).json(products); // Send the products as a JSON response
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}));
router.put('/:id', upload.fields([
    { name: 'productThumbnail', maxCount: 1 },
    { name: 'productGallery', maxCount: 10 }
]), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.id;
        const files = req.files;
        const oldProduct = yield product_1.Product.findById(productId);
        if (!oldProduct) {
            return res.status(404).send('Product not found');
        }
        const productData = Object.assign(Object.assign({}, req.body), { productThumbnail: files.productThumbnail ? files.productThumbnail[0].path : oldProduct.productThumbnail, productGallery: files.productGallery ? files.productGallery.map(file => file.path) : oldProduct.productGallery, variants: req.body.variants ? JSON.parse(req.body.variants) : [], isPublished: req.body.isPublished === 'true' });
        // Remove old files if new ones are uploaded
        if (files.productThumbnail && oldProduct.productThumbnail) {
            fs_1.default.unlink(oldProduct.productThumbnail, (err) => {
                if (err)
                    console.error("Error deleting old thumbnail:", err);
            });
        }
        if (files.productGallery && oldProduct.productGallery) {
            oldProduct.productGallery.forEach(oldFilePath => {
                fs_1.default.unlink(oldFilePath, (err) => {
                    if (err)
                        console.error("Error deleting old gallery image:", err);
                });
            });
        }
        const updatedProduct = yield product_1.Product.findByIdAndUpdate(productId, productData, { new: true });
        res.status(200).json(updatedProduct);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error('Error:', error);
            res.status(500).send(`Internal Server Error: ${error.message}`);
        }
        else {
            console.error('An unknown error occurred');
            res.status(500).send('Internal Server Error');
        }
    }
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.id;
        const product = yield product_1.Product.findById(productId);
        if (!product) {
            return res.status(404).send('Product not found');
        }
        // Function to attempt to delete an image file and log an error if it occurs
        const deleteImage = (imagePath) => {
            // If an image file path exists, try to remove it from the filesystem.
            if (imagePath) {
                fs_1.default.unlink(imagePath, (err) => {
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
        yield product_1.Product.findByIdAndDelete(productId);
        res.status(200).json({ message: 'Product and associated files deleted successfully!' });
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}));
exports.default = router;
