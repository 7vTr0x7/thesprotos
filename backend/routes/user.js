import express from "express";
import { getBanner, getUpcomingMatches } from "../controllers/user.js";

const router = express.Router();

router.get("/upcoming-matches", getUpcomingMatches);
router.get("/banner", getBanner);

export default router;
