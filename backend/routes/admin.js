import express from "express";
import { addUpcomingMatch } from "../controllers/admin.js";

const router = express.Router();

router.post("/add/upcoming-match", addUpcomingMatch);

export default router;
