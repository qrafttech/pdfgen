import express from "express";
import generate from "./generate";
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

const router = express.Router();
app.use("/api/v1", router);

router.post("/generate", async (req, res) => {
  const pdf = await generate(req.body.html);

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "attachment; filename=example.pdf");
  res.send(pdf);
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
