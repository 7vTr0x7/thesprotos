import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
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

export const Admin = mongoose.model("Admin", AdminSchema);
