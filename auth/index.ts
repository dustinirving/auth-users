import passport from 'passport';
import LocalStrategy from './LocalStrategy';
import { User } from '../models';

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(LocalStrategy);
// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser((user: any, done: any) => {
  console.log('SERIALIZE');
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  User.findOne({ _id: id }, (err: any, user: any) => {
    console.log('DEERIALIZE');
    done(err, user);
  });
});

export default passport;
