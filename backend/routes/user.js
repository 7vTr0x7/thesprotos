import express from "express";
import {
  getBanner,
  getSponsor,
  getUpcomingMatches,
} from "../controllers/user.js";

const router = express.Router();

router.get("/upcoming-matches", getUpcomingMatches);
router.get("/banner", getBanner);
router.get("/sponsor", getSponsor);
router.get("/star-performers", getStarPerformers);

export default router;
