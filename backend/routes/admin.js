import express from "express";
import {
  addMultipleUpcomingMatches,
  addUpcomingMatch,
  adminLogin,
  registerAdmin,
} from "../controllers/admin.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", registerAdmin);
router.post("/login", adminLogin);

router.post("/add/upcoming-match", isAuthenticated, addUpcomingMatch);
router.post(
  "/add/multiple/upcoming-matches",
  isAuthenticated,
  addMultipleUpcomingMatches
);

export default router;
