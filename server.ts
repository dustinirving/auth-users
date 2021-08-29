import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';
import dotenv from 'dotenv';

const app = express();
const PORT = process.env.PORT || 8080;
dotenv.config();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
// Add routes, both API and view
app.use(routes);

// mongodb environment variables
const { MONGO_URI } = process.env;

const dbConnectionURL = { LOCALURL: MONGO_URI };

mongoose.connect(dbConnectionURL.LOCALURL || 'mongodb://localhost/users-auth');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Mongodb Connection Error:' + dbConnectionURL.LOCALURL));
db.once('open', () => console.log('Mongodb Connection Successful'));

// Start the API server
app.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}!`));
