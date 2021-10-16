import { Strategy } from 'passport-google-oauth20';
import { User } from '../models';
import dotenv from 'dotenv';
import { UserType } from '../types/user';
dotenv.config();

const GoogleStrategy = new Strategy(
  {
    clientID: `${process.env.GOOGLE_CLIENT_ID}`,
    clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
    callbackURL: '/auth/google/callback',
  },
  (accessToken, refreshToken, profile, cb: any) => {
    User.findOne({ googleId: profile.id }, async (err: Error, user: UserType) => {
      if (err) {
        return cb(err, null);
      }
      if (!user) {
        const newUser = new User({
          googleId: profile.id,
        });
        await newUser.save();
        return cb(null, newUser._id);
      }
      return cb(null, user._id);
    });
  },
);

export default GoogleStrategy;
