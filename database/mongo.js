const { MongoClient } = require('mongodb');

const url = process.env.MONGO_URI;
const client = new MongoClient(url);

const dbName = 'silverGlowDB';
let db;

async function connectDB() {
  if (db) return db;

  await client.connect();
  console.log('Connected to MongoDB Atlas');

  db = client.db(dbName);
  return db;
}

module.exports = connectDB;
