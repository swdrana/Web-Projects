import mongoose from 'mongoose';

// Interface to define the type for category document.
export interface CategoryDocument extends mongoose.Document {
  categoryName: string;
  categoryImage: string;
}

// Schema to enforce the structure of the category document.
const categorySchema = new mongoose.Schema({
  categoryName: { type: String, required: true, unique: true },
  categoryImage: { type: String, required: true },
});

// Export the mongoose model for use in other modules.
export const Category = mongoose.model<CategoryDocument>('Category', categorySchema);
