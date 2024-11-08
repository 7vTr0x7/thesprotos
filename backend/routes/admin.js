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

router.post("/add/match", isAuthenticated, addMatch);
router.post("/add/multiple/matches", isAuthenticated, addMultipleMatches);

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
router.post("/add/featured-player", isAuthenticated, addFeaturedPlayer);

router.post("/add/player", isAuthenticated, addPlayer);
router.post("/add/multiple/players", isAuthenticated, addMultiplePlayers);

router.post("/add/blog", isAuthenticated, addBlog);
router.post("/add/multiple/blogs", isAuthenticated, addMultipleBlogs);

router.post("/add/standing", isAuthenticated, addStanding);
router.post("/add/multiple/standings", isAuthenticated, addMultipleStandings);

router.post("/add/league", isAuthenticated, addLeague);
router.post("/add/multiple/leagues", isAuthenticated, addMultipleLeagues);

export default router;
