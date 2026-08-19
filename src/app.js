const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Route imports
// const userRoutes = require('routes/user');

const app = express();


// ---- Middleware ----
app.use(cors());                          // enable CORS
app.use(morgan('dev'));                   // request logging
app.use(express.json());                  // parse JSON bodies
app.use(express.urlencoded({ extended: true })); // parse form bodies


app.get('/', (req, res) => {
    res.send('<h1>Hello from Express!</h1>');
});

// ---- Routes ----
app.get('/json/status', (req, res) => {
    res.json({ message: 'API is running' });
});

// app.use('/api/users', userRoutes);
  

// ---- 404 handler ----
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// ---- Error handler (must have 4 args) ----
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({ error: err.message || 'Server error' });
});

module.exports = app;