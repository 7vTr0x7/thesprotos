import { UpcomingMatch } from "../models/UpcomingMatch.model.js";

export const addUpcomingMatch = async (req, res) => {
  try {
    const upcomingMatch = await UpcomingMatch.create(req.body);
    if (upcomingMatch) {
      res.json({
        success: true,
        upcomingMatch,
      });
    } else {
      res.status(404).json({
        success: true,
        message: "Upcoming match not found",
      });
    }
  } catch (error) {
    res.status(500).json(`Failed to add admin`);
  }
};
export const addMultipleUpcomingMatches = async (req, res) => {
  try {
    const upcomingMatch = await UpcomingMatch.insertMany(req.body);
    if (upcomingMatch) {
      res.json({
        success: true,
        upcomingMatch,
      });
    } else {
      res.status(404).json({
        success: true,
        message: "Upcoming match not found",
      });
    }
  } catch (error) {
    res.status(500).json(`Failed to add admin`);
  }
};
