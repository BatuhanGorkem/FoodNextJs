import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    prices: {
      type: [Number],
    },
    category: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    extraOptions: {
      type: [
        {
          text: { type: String },
          price: { type: Number },
        },
      ],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
