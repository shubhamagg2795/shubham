// index.js
const express = require('express');
const dotenv = require('dotenv');
const courseRoutes = require('./routes/courseRoutes');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/courses', courseRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
