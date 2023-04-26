const FULL_KEY = require("dotenv").config();
const MY_KEY = FULL_KEY.parsed.MY_KEY;
const express = require("express");
const path = require("path");
const app = express();
const port = 4000;
const axios = require("axios");

app.get("/track", async (req, res, next) => {
  let randomPage = Math.ceil(Math.random() * 10);
  const userInput = req.query.userInput;

  const response = await axios.get(
    `http://api.musixmatch.com/ws/1.1/track.search?q_lyrics=${userInput}&page=${randomPage}&apikey=${MY_KEY}`
  );

  res.send(response.data);
});

app.get("/lyrics", async (req, res, next) => {
  const trackId = req.query.trackId;
  const response = await axios.get(
    `http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${trackId}&apikey=${MY_KEY}`
  );
  res.send(response.data);
});

app.use(express.static(path.join(__dirname, "./build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./build", "index.html"));
});

app.listen(port, () => {
  console.log(`Lazy Lyrics app listening on port ${port}`);
});
