import express from "express";
import { initializeDatabase } from "./db/db.connection.js";
import cors from "cors";
import adminRoutes from "./routes/admin.js";
import userRoutes from "./routes/user.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());

const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://thesprotos.vercel.app",
    "http://localhost:5174",
  ],
  credentials: true,
};

app.use(cors(corsOptions));

app.use(cookieParser());

app.use("/api/admin", adminRoutes);
app.use("/api/user", userRoutes);

initializeDatabase();

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
