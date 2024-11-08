import express from "express";
import {
  getBanner,
  getBlogs,
  getFeaturedPlayer,
  getMatches,
  getPlayers,
  getSponsor,
  getStandings,
  getStarPerformers,
  getTrophies,
} from "../controllers/user.js";

const router = express.Router();

router.get("/matches", getMatches);
router.get("/banner", getBanner);
router.get("/sponsor", getSponsor);
router.get("/star-performers", getStarPerformers);
router.get("/trophies", getTrophies);
router.get("/featured-player", getFeaturedPlayer);
router.get("/players", getPlayers);
router.get("/blogs", getBlogs);
router.get("/standings", getStandings);

export default router;
