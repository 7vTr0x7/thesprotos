import express from "express";
import { getUpcomingMatches } from "../controllers/user.js";

const router = express.Router();

router.get("/upcoming-matches", getUpcomingMatches);

export default router;
