import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";

import statisticRoutes from "./routes/statistic";

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const app = express();
const PORT = process.env.PORT || 3000;
const mongoURI = process.env.MONGO_URI || "";

app.use(cors());

app.use(express.json());

app.use("/statistic", statisticRoutes);

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("✅ MongoDB connecté");
    app.listen(PORT, () => {
      console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Erreur MongoDB :", err);
  });
