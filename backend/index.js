import express from "express";
import { initializeDatabase } from "./db/db.connection.js";
import cors from "cors";

const app = express();
app.use(express.json);

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions));

initializeDatabase();

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
