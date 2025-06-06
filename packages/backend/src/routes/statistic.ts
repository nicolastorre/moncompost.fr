import { Router } from "express";
import { Statistic } from "../models/Statistic";

const router = Router();

// POST /statistic — incrémente le compteur
router.post("/", async (_req, res) => {
  try {
    let stat = await Statistic.findOne();
    if (!stat) {
      stat = new Statistic({ visit: 1 });
    } else {
      stat.visit += 1;
    }
    await stat.save();
    res.json({ visit: stat.visit });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// ✅ GET /statistic — récupère le nombre de visites
router.get("/", async (_req, res) => {
  try {
    let stat = await Statistic.findOne();
    if (!stat) {
      stat = new Statistic({ visit: 0 });
      await stat.save();
    }
    res.json({ visit: stat.visit });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

export default router;
