// app.js
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const pitchRoutes = require('./routes/pitchRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use("/api/auth", authRoutes);
app.use('/api/pitches', pitchRoutes);

module.exports = app;
