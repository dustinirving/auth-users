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
    if (!user) res.send('No User Exists');
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.json(user);
      });
    }
  })(req, res);
});

router.post('/logout', (req, res) => {
  req.logout();
});

export default router;
