import express from "express";
import curseWords from "../data.json" assert { type: "json" };

const router = express.Router();

router.get("/", (req, res) => {
  const { english } = curseWords;
  const rand = Math.floor(Math.random() * (english.length - 0 + 1) + 0);

  res.send(english[rand]);
});

export default router;
