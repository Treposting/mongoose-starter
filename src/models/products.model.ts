import mongoose from "mongoose";
import productSchema from "../Schema/products.schema";

export const ProductModel = mongoose.model("ProductModel", productSchema);
