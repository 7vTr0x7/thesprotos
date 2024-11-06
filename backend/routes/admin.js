import express from "express";
import {
  addBanner,
  addMultipleUpcomingMatches,
  addSponsor,
  addStarPerformer,
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
router.post("/add/star-performers", isAuthenticated, addStarPerformer);
router.post(
  "/add/multiple/star-performers",
  isAuthenticated,
  addMultipleStarPerformers
);

router.post("/add/banner", isAuthenticated, addBanner);
router.post("/add/sponsor", isAuthenticated, addSponsor);

export default router;
