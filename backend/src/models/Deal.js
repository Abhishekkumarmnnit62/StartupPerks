import mongoose from "mongoose";

const dealSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    partnerName: String,
    category: String,
    isLocked: {
      type: Boolean,
      default: false,
    },
    eligibility: String,
  },
  { timestamps: true }
);

export default mongoose.model("Deal", dealSchema);
