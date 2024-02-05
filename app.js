const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Database connection
const connectDB = require('./config/dbConn');
connectDB();
const db = mongoose.connection;

app.use(express.json());

// Routes
app.use('/tasks', require('./routes/taskRoutes'));

db.once('open', () => {
    console.log('Connected to DB!');
    app.listen(3500, () => console.log(`Server running on http://localhost:3500`));
});