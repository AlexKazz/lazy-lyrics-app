const express = require('express');
const app = express();
const port = 4000;
const axios = require('axios');

function fixer(str) {
  const punctuation = ['.', ',', '!', '?', ':', ';', '('];
  for (const el of punctuation)
    if (str.includes(el)) {
      return str.substring(0, str.indexOf(el));
    }
  return str;
}

const randomPage = Math.ceil(Math.random() * 10);

app.get('/track', async (req, res, next) => {
  const userInput = req.params.userInput;
  const response = await axios.get(
    `http://api.musixmatch.com/ws/1.1/track.search?q_lyrics=${userInput}&page=${randomPage}&apikey=ef27af1947002457bfe9d02f36c223ac`
  );
  // console.log('response 🔯', response.data);

  res.send(response.data);
});

app.get('/lyrics', async (req, res, next) => {
  const trackId = req.params.trackId;
  const response = await axios.get(
    `http://api.musixmatch.com/ws/1.1/track.snippet.get?track_id=${trackId}&apikey=ef27af1947002457bfe9d02f36c223ac`
  );
  // res.send(response.data);
  console.log('server trackId 👉', trackId);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
