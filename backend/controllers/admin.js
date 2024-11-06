import { UpcomingMatch } from "../models/UpcomingMatch.model.js";
import bcrypt from "bcrypt";
import { Admin } from "./../models/Admin.model.js";
import { sendCookies } from "../utils/features.js";
import { Banner } from "../models/Banner.model.js";

export const registerAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    let admin = await Admin.findOne({ email });
    if (admin) {
      res.status(404).json({ success: false, message: "admin already exists" });
    } else {
      const hashedPass = await bcrypt.hash(password, 10);

      admin = await Admin.create({ email, password: hashedPass });
      sendCookies(admin, res, "Register Successfully");
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to register Admin",
      error: error.message,
    });
  }
};

export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email }).select("+password");

    if (!admin) {
      res
        .status(404)
        .json({ success: false, message: "Invalid Email or Password" });
    } else {
      const isMatch = await bcrypt.compare(password, admin.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ success: false, message: "Invalid Email or Password" });
      } else {
        sendCookies(admin, res, "Login Successfully");
      }
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to login Admin",
      error: error.message,
    });
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
    res.status(500).json({
      success: false,
      message: "Failed to add Upcoming Match",
      error: error.message,
    });
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
    res.status(500).json({
      success: false,
      message: "Failed to add Upcoming Matches",
      error: error.message,
    });
  }
};

export const addBanner = async (req, res) => {
  try {
    const banner = await Banner.create(req.body);
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
