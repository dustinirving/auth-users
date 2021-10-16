import passport from 'passport';
import LocalStrategy from './LocalStrategy';
import GoogleStrategy from './GoogleStrategy';
import { User } from '../models';

passport.use(LocalStrategy);
passport.use(GoogleStrategy);

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser((userId: any, done: any) => {
  done(null, userId);
});

passport.deserializeUser((id, done) => {
  User.findOne({ _id: id }, (err: any, user: any) => {
    done(err, user);
  });
});

export default passport;
