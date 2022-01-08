const express = require('express');
const path = require('path');
const cors = require('cors')
const routes = require('./routes/api_routes');
// const db = require('./config/connection');
// require('dotenv').config();

const PORT = process.env.PORT || 3007;

// express returns an Object
const app = express(); // instance = Object
app.use(cors());
// Setup our server

app.use('/', express.static(path.join(__dirname, 'client/build')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    app.use(express.static('../client/build'));
  
    // Express serve up index.html file if it doesn't recognize route
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

routes(app);

// Start the Server
app.listen(PORT, () => {console.log(`Server running on port ${PORT}!`);});
