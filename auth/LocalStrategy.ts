import { Strategy } from 'passport-local';
import { User } from '../models';
import bcrypt from 'bcryptjs';

const LocalStrategy = new Strategy(
  { usernameField: 'email' },
  (email: string, password: string, done: any) => {
    // When a user tries to sign in this code runs
    User.findOne({ email }, (err: any, user: any) => {
      if (err) throw err;
      if (!user) return done(null, false);
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) throw err;
        if (result === true) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      });
    });
  },
);

export default LocalStrategy;
