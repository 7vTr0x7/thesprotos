import express from "express";
import {
  addBanner,
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
router.post("/add/banner", isAuthenticated, addBanner);

export default router;
