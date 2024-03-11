"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const productSchema = new mongoose_1.default.Schema({
    productName: { type: String, required: true },
    shortDescription: { type: String, required: true },
    description: { type: String, required: true },
    productThumbnail: { type: String, required: true },
    productGallery: { type: [String], required: true },
    productCategory: { type: String, required: true },
    variants: {
        type: [
            {
                size: { type: String, required: true },
                price: { type: String, required: true }
            }
        ],
        required: true
    },
    isPublished: { type: Boolean, required: true }
});
exports.Product = mongoose_1.default.model('Product', productSchema);
