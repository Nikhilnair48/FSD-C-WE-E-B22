// index.js
const express = require('express');
const cors = require('cors');

const app = express();

// CORS: allow our Vite app on port 5173
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type'],
  credentials: true
}));

// parse JSON bodies
app.use(express.json());

let watchlist = [];

// GET all items
app.get('/watchlist', (req, res) => {
  res.json(watchlist);
});

// POST a new item
app.post('/watchlist', (req, res) => {
  // if client supplied an id (string), use it; otherwise generate one
  const incoming = req.body;
  const id = incoming.id ? incoming.id : String(Date.now());
  const item = { ...incoming, id };
  watchlist.push(item);
  res.status(201).json(item);
});

// PATCH an existing item
app.patch('/watchlist/:id', (req, res) => {
  const { id } = req.params;             // keep as string
  let updated;
  watchlist = watchlist.map(item => {
    if (item.id === id) {
      updated = { ...item, ...req.body };
      return updated;
    }
    return item;
  });

  if (updated) {
    return res.json(updated);
  } else {
    return res.status(404).json({ error: 'Item not found' });
  }
});

// DELETE an item
app.delete('/watchlist/:id', (req, res) => {
  const { id } = req.params;
  const initialLength = watchlist.length;
  watchlist = watchlist.filter(item => item.id !== id);

  if (watchlist.length < initialLength) {
    return res.sendStatus(204);
  } else {
    return res.status(404).json({ error: 'Item not found' });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Watchlist API server running on http://localhost:${PORT}`);
});