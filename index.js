const express = require('express');
const app = express();

// Define routes
app.get('/', (req, res) => {
  res.send('Welcome to TimeTravel! Immerse yourself in history with our virtual tours and interactive exhibits.');
});

app.get('/tours', (req, res) => {
  res.send('Explore our collection of virtual tours, from ancient civilizations to modern times.');
});

app.get('/exhibits', (req, res) => {
  res.send('Experience history like never before with our interactive exhibits, designed to transport you to different eras and cultures.');
});

app.get('/register', (req, res) => {
  res.send('Ready to start your journey through time? Register for TimeTravel today!');
});

// Start the server
app.listen(3000, () => {
  console.log('TimeTravel server is running on port 3000.');
});