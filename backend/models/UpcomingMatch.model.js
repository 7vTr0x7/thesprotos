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
  score: {
    team1: { type: Number, default: 0 },
    team2: { type: Number, default: 0 },
  },
  match: {
    daysLeft: { type: Number, required: true },
    hoursLeft: { type: Number, required: true },
    location: { type: String, required: true },
    matchType: { type: String, required: true },
  },
  headToHead: {
    played: { type: Number, required: true },
    wins: {
      team1: { type: Number, required: true },
      team2: { type: Number, required: true },
    },
    homeWins: {
      team1: { type: Number, required: true },
      team2: { type: Number, required: true },
    },
    awayWins: {
      team1: { type: Number, required: true },
      team2: { type: Number, required: true },
    },
  },
  previousResult: {
    team1: {
      name: { type: String, required: true },
      score: { type: Number, required: true },
    },
    team2: {
      name: { type: String, required: true },
      score: { type: Number, required: true },
    },
  },
});

export const UpcomingMatch = mongoose.model(
  "UpcomingMatch",
  UpcomingMatchSchema
);
