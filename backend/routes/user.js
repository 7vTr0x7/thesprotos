import express from "express";
import {
  getBanner,
  getFeaturedPlayer,
  getPlayers,
  getSponsor,
  getStarPerformers,
  getTrophies,
  getUpcomingMatches,
} from "../controllers/user.js";

const router = express.Router();

router.get("/upcoming-matches", getUpcomingMatches);
router.get("/banner", getBanner);
router.get("/sponsor", getSponsor);
router.get("/star-performers", getStarPerformers);
router.get("/trophies", getTrophies);
router.get("/featured-player", getFeaturedPlayer);
router.get("/players", getPlayers);

export default router;
