import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import passport from './auth';
import routes from './routes';
import path from 'path';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000',
  }),
);

app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie: {
      httpOnly: true,
      maxAge: 20 * 60 * 1000, // 20 minutes per active cookie (in milliseconds)
    },
  }),
);
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(express.static('public'));

// app.use((req, res) => res.sendFile(path.join(__dirname, '/clients/web/build/index.html')));

// Add routes
app.use(routes);

// MongoDB
const { MONGO_URI } = process.env;

const dbConnectionURL = { LOCALURL: MONGO_URI };

mongoose.connect(dbConnectionURL.LOCALURL || 'mongodb://localhost/users-auth');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Mongodb Connection Error:' + dbConnectionURL.LOCALURL));
db.once('open', () => console.log('Mongodb Connection Successful'));

// Start the API server
app.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}!`));
