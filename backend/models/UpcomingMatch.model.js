import mongoose from "mongoose";

const UpcomingMatchSchema = new mongoose.Schema({
  competition: { type: String, required: true },
  league_logo_url: { type: String },
  date: { type: String, required: true },
  stadium: { type: String, required: true },
  team1: {
    name: { type: String, required: true },
    logo_url: { type: String },
  },
  team2: {
    name: { type: String, required: true },
    logo_url: { type: String },
  },
  status: { type: String, required: true },
  time: { type: String },
  FT: { type: Boolean, default: true },
  score: { team1: Number, team2: Number },
});

export const UpcomingMatch = mongoose.model(
  "UpcomingMatch",
  UpcomingMatchSchema
);
