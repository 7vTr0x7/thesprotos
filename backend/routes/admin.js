import express from "express";
import {
  addMultipleUpcomingMatches,
  addUpcomingMatch,
} from "../controllers/admin.js";

const router = express.Router();

router.post("/add/upcoming-match", addUpcomingMatch);
router.post("/add/multiple/upcoming-matches", addMultipleUpcomingMatches);

export default router;
