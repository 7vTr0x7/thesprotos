import { Banner } from "../models/Banner.model.js";
import { Sponsor } from "../models/Sponsor.model.js";
import { UpcomingMatch } from "./../models/UpcomingMatch.model.js";

export const getUpcomingMatches = async (req, res) => {
  try {
    const upcomingMatches = await UpcomingMatch.find();
    if (upcomingMatches.length > 0) {
      res.json({
        success: true,
        upcomingMatches,
      });
    } else {
      res.status(404).json({
        success: true,
        message: "Upcoming matches not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to get Upcoming Matches",
      error: error.message,
    });
  }
};

export const getBanner = async (req, res) => {
  try {
    const banner = await Banner.find();
    if (banner) {
      res.json({
        success: true,
        banner,
      });
    } else {
      res.status(404).json({
        success: true,
        message: "Banner match not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add Banner",
      error: error.message,
    });
  }
};

export const getSponsor = async (req, res) => {
  try {
    const sponsor = await Sponsor.find();
    if (sponsor) {
      res.json({
        success: true,
        sponsor,
      });
    } else {
      res.status(404).json({
        success: true,
        message: "sponsor match not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add sponsor",
      error: error.message,
    });
  }
};
