import express from 'express';

const router = express.Router();
import usersController from '../../controllers/usersController';

router.route('/').get(usersController.findAll).post(usersController.create);

router.route('/:id').delete(usersController.remove);
export default router;
