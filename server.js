const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(__dirname));

let tweets = [];

app.get('/api/tweets', (req, res) => {
  res.json(tweets);
});

app.post('/api/tweets', (req, res) => {
  const { user, content } = req.body;
  if (!user || !content) {
    return res.status(400).json({ error: 'user and content required' });
  }
  const tweet = { id: tweets.length + 1, user, content, created: new Date() };
  tweets.push(tweet);
  res.status(201).json(tweet);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
