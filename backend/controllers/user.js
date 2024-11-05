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
    res.status(500).json(`Failed to get upcoming matches`);
  }
};
