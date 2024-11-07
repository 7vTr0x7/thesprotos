import mongoose from "mongoose";

const TeamStatsSchema = new mongoose.Schema({
  teamName: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },

  stats: {
    played: {
      type: Number,
      required: true,
    },
    won: {
      type: Number,
      required: true,
    },
    drawn: {
      type: Number,
      required: true,
    },
    lost: {
      type: Number,
      required: true,
    },
  },
});

const PlayerProfileSchema = new mongoose.Schema({
  dateOfBirth: {
    type: Date,
    required: true,
  },
  flagImageUrl: {
    type: String,
    required: true,
  },
  preferredFoot: {
    type: String,
    enum: ["Left", "Right", "Both"],
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  preferredPosition: {
    type: String,
    required: true,
  },
});

const recentFixtures = new mongoose.Schema({
  competition: {
    type: String,
    required: true,
  },
  league_logo_url: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  stadium: {
    type: String,
    required: true,
  },
  team1: {
    name: {
      type: String,
      required: true,
    },
    logo_url: {
      type: String,
      required: true,
    },
  },
  team2: {
    name: {
      type: String,
      required: true,
    },
    logo_url: {
      type: String,
      required: true,
    },
  },
  status: {
    type: String,
    required: true,
  },
  score: {
    team1: {
      type: Number,
      required: true,
    },
    team2: {
      type: Number,
      required: true,
    },
  },
  FT: {
    type: Boolean,
    required: true,
  },
});

const PlayerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  position: {
    type: String,
    required: true,
  },
  playerProfile: {
    type: PlayerProfileSchema,
    required: true,
  },
  teamsPlayedFor: {
    type: [TeamStatsSchema],
    required: true,
  },
  recentFixtures: {
    type: [recentFixtures],
  },
});

export const Player = mongoose.model("Player", PlayerSchema);
