import { UpcomingMatch } from "../models/UpcomingMatch.model.js";
import bcrypt from "bcrypt";
import { Admin } from "./../models/Admin.model.js";

export const registerAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    let admin = await admin.findOne({ email });
    if (admin) {
      res.status(404).json({ success: false, message: "admin already exists" });
    } else {
      const hashedPass = await bcrypt.hash(password, 20);

      admin = await Admin.create({ email, password: hashedPass });
      sendCookies(admin, res);
    }
  } catch (error) {
    res.status(500).json(`Failed to register Admin`, error);
  }
};

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
    res.status(500).json(`Failed to add Upcoming Match`, error);
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
    res.status(500).json(`Failed to add Multiple Upcoming Matches`, error);
  }
};
