import { User } from '../models';
import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';

const usersController = {
  findAll: (req: Request, res: Response) => {
    User.find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: (req: Request, res: Response) => {
    User.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: (req: Request, res: Response) => {
    User.findById(req.params.id)
      .then((dbModel) => {
        if (dbModel) dbModel.remove();
      })
      .then((dbModel) => {
        res.json(dbModel);
      })
      .catch((err) => res.status(422).json(err));
  },
  create: (req: Request, res: Response) => {
    User.findOne({ email: req.body.email }, async (err: any, doc: any) => {
      if (err) throw err;
      if (doc) res.send('User Already Exists');
      if (!doc) {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new User({
          email: req.body.email,
          password: hashedPassword,
        });

        await newUser.save();
        res.json(newUser);
      }
    });
  },
  authenticate: (req: Request, res: Response) => {
    res.send('Hey');
  },
};

export default usersController;
