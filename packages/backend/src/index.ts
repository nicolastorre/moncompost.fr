import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (_, res) => {
  res.send("Hello from Express with Node 23 & TypeScript!");
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
