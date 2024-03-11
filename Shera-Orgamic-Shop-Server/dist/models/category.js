"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// Schema to enforce the structure of the category document.
const categorySchema = new mongoose_1.default.Schema({
    categoryName: { type: String, required: true, unique: true },
    categoryImage: { type: String, required: true },
});
// Export the mongoose model for use in other modules.
exports.Category = mongoose_1.default.model('Category', categorySchema);
