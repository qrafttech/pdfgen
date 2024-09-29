import express from "express";
import generate from "./generate";
const app = express();
app.use(express.json());
const port = 3000;

app.post("/generate", async (req, res) => {
  await generate(req.body.html);
  res.sendFile(`${__dirname}/example.pdf`);
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
