const express = require('express');
const http = require('http');
const Trending = require('./src/trending');
const Pc = require('./src/pcgames');
const Mobile = require('./src/mobilegames');
const Apps = require('./src/apps');
const cors = require('cors')

const app = express();
const server = http.createServer(app);

app.use(cors())
app.use(express.static('public'));

app.get('/api/trending', (req, res) => {
  res.json(Trending);
});

app.get('/api/trending/:slug', (req, res) => {
  const slug = req.params.slug;
  const game = Trending.find((item) => item.slug === slug);
  if (game) {
    res.json(game);
  } else {
    res.status(404).json({ error: 'Data tidak ditemukan' });
  }
});

app.get('/api/pcgames', (req, res) => {
  res.json(Pc);
});

app.get('/api/pcgames/:slug', (req, res) => {
  const slug = req.params.slug;
  const item = Pc.find((item) => item.slug === slug);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ error: 'Data tidak ditemukan' });
  }
});

app.get('/api/mobilegames', (req, res) => {
  res.json(Mobile);
});

app.get('/api/mobilegames/:slug', (req, res) => {
  const slug = req.params.slug;
  const game = Mobile.find((item) => item.slug === slug);
  if (game) {
    res.json(game);
  } else {
    res.status(404).json({ error: 'Data tidak ditemukan' });
  }
});

app.get('/api/apps', (req, res) => {
  res.json(Apps);
});

app.get('/api/apps/:slug', (req, res) => {
  const slug = req.params.slug;
  const item = Apps.find((item) => item.slug === slug);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ error: 'Data tidak ditemukan' });
  }
});


server.listen(5000, () => {
  console.log('Server berjalan pada port 5000');
});
