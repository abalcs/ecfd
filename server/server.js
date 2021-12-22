const express = require('express');
const path = require('path');
// const routes = require('./routes/api_routes');
// const db = require('./config/connection');
// require('dotenv').config();

const PORT = process.env.PORT || 3007;

// express returns an Object
const app = express(); // instance = Object

// Setup our server

app.use(express.static(path.join(__dirname, 'client/build')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`Hit homepage!`);
})

app.get('/about', (req, res) => {
    res.send(`Hit about page!`)
})

app.get('/members', (req, res) => {
    res.send(`Hit assoc. members page!`)
})

// routes(app);

// Start the Server
app.listen(PORT, () => {console.log(`Server running on port ${PORT}!`);});
