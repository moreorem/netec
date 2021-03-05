import dotenv from 'dotenv';
dotenv.config();

const DEFAULT_PORT = process.env.DEFAULT_PORT || 8080;
const HOST = process.env.HOST || '0.0.0.0';

import express from 'express';
import morgan from 'morgan';
// Import Routes
import { router as homeRoutes } from './routes/home.js';

const app = express();
// Initialize express settings
app.set('view engine', 'ejs');
app.set('views', './views');

// Express uses
app.use(morgan('dev'));
// Declare public folder to use css and js
app.use(express.static('./public'));
// Handle not found
// Load Routes
app.use('/', homeRoutes);


app.use("*", (req, res) => {
  res.status(404).send("404");
});

// Start Server
app.listen(DEFAULT_PORT, HOST, err => {
  if (err) {
    return console.log(err);
  }
  console.log('\n\tStarting server...');
  console.log(`Running locally at ${HOST}:${DEFAULT_PORT}`);
});


