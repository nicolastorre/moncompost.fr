import { useEffect, useState } from "react";
import { API_BASE_URL } from "../config/apiConfig";

export default function StatisticScreen() {
  const [visitCount, setVisitCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVisitCount = async () => {
      try {
        // POST pour incrémenter
        await fetch(`${API_BASE_URL}/statistic`, {
          method: "POST",
        });

        // GET pour récupérer le nombre de visites
        const res = await fetch(`${API_BASE_URL}/statistic`);
        const data = await res.json();
        setVisitCount(data.visit);
      } catch (err) {
        console.error("Erreur lors de la récupération des statistiques :", err);
      } finally {
        setLoading(false);
      }
    };

    fetchVisitCount();
  }, []);

  return (
    <div>
      <h2>Statistiques</h2>
      {loading ? <p>Chargement...</p> : <p>Nombre de visites : {visitCount}</p>}
    </div>
  );
}
