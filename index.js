import dotenv from 'dotenv';
dotenv.config();

const DEFAULT_PORT = process.env.DEFAULT_PORT || 8080;
const HOST = process.env.HOST || '0.0.0.0';
const _dirname = '.';

import express from 'express';
// import bodyParser from 'body-parser';
import morgan from 'morgan';

import connect from './models/index.js';
import { router as authRoutes, setUserModel } from './routes/auth.js';
import { router as courseRoutes } from './routes/course.js';
import { router as profileRoutes } from './routes/profile.js';
import { router as loginRoutes } from './routes/login.js';
import { router as storyRoutes } from './routes/story.js';
import authenticate from './middleware/authenticate.js';
import getLocalSignupStrategy from './passport/local-signup.js';
import getLocalLoginStrategy from './passport/local-login.js';
import MainController from './controllers/main.js';
// import submissionSchema from './models/schemas/submissions.js';

const app = express();
// Initialize express settings
app.set('view engine', 'ejs');
app.set('views', path.join(_dirname + '/views'));

// Express uses
app.use(morgan('dev'));
// Declare public folder to use css and js
app.use(express.static('./public'));
// Handle not found
app.use("*", (req, res) => {
  res.status(404).send("404");
});
app.use("index.ejs", (req, res) => {
	res.render('views/index', {wName: 'template', pName: 'Index'});
});

app.listen(DEFAULT_PORT, HOST, err => {
  if (err) {
    return console.log(err);
  }
  console.log('\n\tStarting server...');
  console.log(`Running locally at ${HOST}:${DEFAULT_PORT}`);
});


