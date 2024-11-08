import express from "express";
import {
  addBanner,
  addBlog,
  addFeaturedPlayer,
  addLeague,
  addMatch,
  addMultipleBlogs,
  addMultipleLeagues,
  addMultipleMatches,
  addMultiplePlayers,
  addMultipleStandings,
  addMultipleStarPerformers,
  addMultipleTrophies,
  addPlayer,
  addSponsor,
  addStanding,
  addStarPerformer,
  addTrophy,
  adminLogin,
  registerAdmin,
} from "../controllers/admin.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", registerAdmin);
router.post("/login", adminLogin);

router.post("/add/match", addMatch);
router.post("/add/multiple/matches", addMultipleMatches);

router.post("/add/star-performers", addStarPerformer);
router.post(
  "/add/multiple/star-performers",,
  addMultipleStarPerformers
);

router.post("/add/trophy", addTrophy);
router.post("/add/multiple/trophies", addMultipleTrophies);

router.post("/add/banner", addBanner);
router.post("/add/sponsor", addSponsor);
router.post("/add/featured-player", addFeaturedPlayer);

router.post("/add/player", addPlayer);
router.post("/add/multiple/players", addMultiplePlayers);

router.post("/add/blog", addBlog);
router.post("/add/multiple/blogs", addMultipleBlogs);

router.post("/add/standing", addStanding);
router.post("/add/multiple/standings", addMultipleStandings);

router.post("/add/league", addLeague);
router.post("/add/multiple/leagues", addMultipleLeagues);

export default router;
