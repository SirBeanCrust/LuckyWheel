import express from 'express';
import sqlite3 from 'sqlite3';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 5000;
const dbPath = path.resolve(__dirname, '..', 'firstdatabase.sqlite');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to the database.');
  }
});

app.get('/', (req, res) => {
    res.send('Server is running.');
  });
  
app.get('/api/data', (req, res) => {
  db.all('SELECT DISTINCT name FROM participants', (err, rows) => {
    if (err) {
      console.error('Error querying the database:', err.message);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(rows);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});