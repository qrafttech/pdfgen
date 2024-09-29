import express from "express";
import generate from "./generate";
const app = express();
app.use(express.json());
const port = 3000;

app.post("/generate", async (req, res) => {
  const pdf = await generate(req.body.html);

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "attachment; filename=example.pdf");
  res.send(pdf);
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
