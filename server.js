const FULL_KEY = require('dotenv').config();
const MY_KEY = FULL_KEY.parsed.MY_KEY;
const express = require('express');
const app = express();
const port = 4000;
const axios = require('axios');

let randomPage = Math.ceil(Math.random() * 10);

app.get('/track', async (req, res, next) => {
  const userInput = req.query.userInput;

  const response = await axios.get(
    `http://api.musixmatch.com/ws/1.1/track.search?q_lyrics=${userInput}&page=${randomPage}&apikey=${MY_KEY}`
  );

  res.send(response.data);
});

app.get('/lyrics', async (req, res, next) => {
  const trackId = req.query.trackId;
  const response = await axios.get(
    `http://api.musixmatch.com/ws/1.1/track.snippet.get?track_id=${trackId}&apikey=${MY_KEY}`
  );
  res.send(response.data);
});

app.listen(port, () => {
  console.log(`Lazy Lyrics app listening on port ${port}`);
});
