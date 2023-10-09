import mongoose, { Document } from 'mongoose';

export interface ProductDocument extends Document {
  productName: string;
  shortDescription: string;
  description: string;
  productThumbnail: string;  // <-- Add this to store thumbnail image path
  productGallery: string[];
  productCategory: string;
  variants: { size: string; price: string }[];
  isPublished: boolean;
}

const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  shortDescription: { type: String, required: true },
  description: { type: String, required: true },
  productThumbnail: { type: String, required: true },  // <-- Define schema for thumbnail
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

export const Product = mongoose.model<ProductDocument>('Product', productSchema);
