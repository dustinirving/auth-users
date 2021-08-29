import db from '../models';
import { Request, Response } from 'express';

const usersController = {
  findAll: (req: Request, res: Response) => {
    db.User.find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: (req: Request, res: Response) => {
    db.User.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: (req: Request, res: Response) => {
    db.User.findById(req.params.id)
      .then((dbModel) => {
        if (dbModel) dbModel.remove();
      })
      .then((dbModel) => {
        res.json(dbModel);
      })
      .catch((err) => res.status(422).json(err));
  },
  create: (req: Request, res: Response) => {
    db.User.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};

export default usersController;
