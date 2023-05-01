import express from "express";
import curseMe from "./routes/curseMe.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/curseMe", curseMe);

app.get("/", (req, res) => {
  res.send("Hello Bitch!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
