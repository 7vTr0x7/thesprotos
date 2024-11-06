import express from "express";
import {
  addBanner,
  addMultipleStarPerformers,
  addMultipleTrophies,
  addMultipleUpcomingMatches,
  addSponsor,
  addStarPerformer,
  addTrophy,
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

router.post("/add/trophy", isAuthenticated, addTrophy);
router.post("/add/multiple/trophies", isAuthenticated, addMultipleTrophies);

router.post("/add/banner", isAuthenticated, addBanner);
router.post("/add/sponsor", isAuthenticated, addSponsor);

export default router;
