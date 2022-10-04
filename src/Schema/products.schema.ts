import { Schema } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"],
      trim: true, // trim whitespace
      maxLength: [100, "Product name cannot exceed 100 characters"],
      minLength: [3, "Product name cannot be less than 3 characters"],
      unique: true, // unique
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      minLength: [0, "Price cannot be less than 0"],
    },
    unit: {
      type: String,
      required: true,
      enum: {
        values: ["kg", "litre", "pcs"],
        message:
          "Please select the correct unit for product, it must be either kg or litre or pcs",
      },
    },
    quantity: {
      type: Number,
      required: true,
      minLength: [0, "Quantity cannot be less than 0"],
      validate: {
        validator: Number.isInteger,
        message: "{VALUE} is not an integer value",
      },
    },
    status: {
      type: String,
      required: true,
      enum: {
        values: ["in-stock", "out-of-stock", "discontinued"],
        message:
          "Please select the correct status for product, it must be either in-stock or out-of-stock or discontinued",
      },
    },
    // createdAt: {
    //   type: Date,
    //   default: Date.now,
    // },
    // updatedAt: {
    //   type: Date,
    //   default: Date.now,
    // },
    supplier: {
      type: Schema.Types.ObjectId,
      ref: "Supplier",
    },
    catagories: [
      {
        name: {
          type: String,
          required: true,
        },
        _id: Schema.Types.ObjectId,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default productSchema;
