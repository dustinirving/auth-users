import express from 'express';
import passport from 'passport';
import usersController from '../../controllers/usersController';

const router = express.Router();

router.get('/user', (req, res) => {
  res.json(req.user);
});

// Auth
router.route('/signup').post(usersController.create);

router.post('/login', (req, res) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) throw err;
    if (!user) res.json(null);
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.json(user);
      });
    }
  })(req, res);
});

router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: 'http://localhost:3000/login' }),
  (req, res) => {
    res.redirect('http://localhost:3000');
  },
);

router.post('/logout', (req, res) => {
  req.logout();
  res.send('Logged out user');
});

export default router;
