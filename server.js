const express = require('express');
const app = express();
const port = 4000;
const axios = require('axios');

const randomPage = Math.ceil(Math.random() * 10);

app.get('/api', async (req, res, next) => {
  const userInput = req.params.userInput;
  const response = await axios.get(
    `http://api.musixmatch.com/ws/1.1/track.search?q_lyrics=${userInput}&page=${randomPage}&apikey=ef27af1947002457bfe9d02f36c223ac`
  );
  console.log('response 🔯', response.data);
  res.send(response.data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
