const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// PostgreSQL connection placeholder
const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'coursesdb',
  password: process.env.DB_PASS || 'password',
  port: process.env.DB_PORT || 5432,
});

// GET /courses – fetch all courses (fake DB for now)
app.get('/courses', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM courses');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching courses:', err.message);
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
});

app.listen(port, () => {
  console.log(`✅ Course API running at http://localhost:${port}`);
});
