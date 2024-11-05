import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  email: {
    type: string,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
});

export const admin = mongoose.model("admin", adminSchema);
