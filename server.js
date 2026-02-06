require('dotenv').config();

const express = require('express');
const path = require('path');
const fs = require('fs');

const connectDB = require('./database/mongo');
const { ObjectId } = require('mongodb');

const app = express();

/* ---------- MIDDLEWARE ---------- */
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

/* ---------- HTML ROUTES ---------- */
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

app.get('/products', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'products.html'));
});

app.get('/search', (req, res) => {
  const query = req.query.q;

  if (!query) {
    return res.status(400).send('<h2>400 Bad Request: Missing search query</h2>');
  }

  res.send(`
    <h1>Search Results</h1>
    <p>You searched for: <strong>${query}</strong></p>
    <a href="/">Back to Home</a>
  `);
});

app.get('/item/:id', (req, res) => {
  const itemId = req.params.id;

  res.send(`
    <h1>Item Page</h1>
    <p>Item ID: <strong>${itemId}</strong></p>
    <a href="/">Back to Home</a>
  `);
});

app.get('/api/info', (req, res) => {
  res.status(200).json({
    project: 'Silver Glow',
    type: 'Individual project',
    description: 'Luxury silver jewelry web application',
    technologies: ['Node.js', 'Express.js', 'MongoDB'],
    version: '1.0'
  });
});

/* ---------- API ROUTES (CRUD / MongoDB) ---------- */

// READ ALL (filter + sort + projection)
app.get('/api/products', async (req, res) => {
  try {
    const db = await connectDB();

    const filter = {};
    const sort = {};
    const projection = {};

    if (req.query.name) {
      filter.name = req.query.name;
    }

    if (req.query.sortBy) {
      sort[req.query.sortBy] =
        req.query.order === 'desc' ? -1 : 1;
    }

    if (req.query.fields) {
      req.query.fields.split(',').forEach(field => {
        projection[field] = 1;
      });
    }

    const products = await db
      .collection('products')
      .find(filter)
      .project(projection)
      .sort(sort)
      .toArray();

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// READ BY ID
app.get('/api/products/:id', async (req, res) => {
  try {
    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid ID' });
    }

    const db = await connectDB();
    const product = await db.collection('products').findOne({
      _id: new ObjectId(id)
    });

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.status(200).json(product);
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
});

// CREATE
app.post('/api/products', async (req, res) => {
  try {
    const { name, price, description } = req.body;

    if (!name || !price || !description) {
      return res.status(400).json({ error: 'Missing fields' });
    }

    const db = await connectDB();
    const result = await db.collection('products').insertOne({
      name,
      price,
      description,
      createdAt: new Date()
    });

    res.status(201).json({
      message: 'Product created',
      id: result.insertedId
    });
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
});

// UPDATE
app.put('/api/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, description } = req.body;

    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid ID' });
    }

    if (!name || !price || !description) {
      return res.status(400).json({ error: 'Missing fields' });
    }

    const db = await connectDB();
    const result = await db.collection('products').updateOne(
      { _id: new ObjectId(id) },
      { $set: { name, price, description } }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.status(200).json({ message: 'Product updated' });
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
});

// DELETE
app.delete('/api/products/:id', async (req, res) => {
  try {
    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid ID' });
    }

    const db = await connectDB();
    const result = await db.collection('products').deleteOne({
      _id: new ObjectId(id)
    });

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.status(200).json({ message: 'Product deleted' });
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
});

/* ---------- CONTACT FORM ---------- */
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).send('<h2>400 Bad Request: Missing form data</h2>');
  }

  const newMessage = {
    name,
    email,
    message,
    date: new Date().toISOString()
  };

  fs.readFile('messages.json', 'utf8', (err, data) => {
    let messages = [];

    if (!err && data) {
      messages = JSON.parse(data);
    }

    messages.push(newMessage);

    fs.writeFile(
      'messages.json',
      JSON.stringify(messages, null, 2),
      () => {
        res.send(`
          <h1>Thank you, ${name}!</h1>
          <p>Your message has been saved successfully.</p>
          <a href="/">Back to Home</a>
        `);
      }
    );
  });
});

/* ---------- API 404 ---------- */
app.use('/api', (req, res) => {
  res.status(404).json({ error: 'API route not found' });
});

/* ---------- HTML 404 ---------- */
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

/* ---------- SERVER ---------- */
const PORT = process.env.PORT || 3000;

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT || 3000}`);
});


