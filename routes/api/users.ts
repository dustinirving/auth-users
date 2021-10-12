import express from 'express';
import usersController from '../../controllers/usersController';

const router = express.Router();

router.route('/').get(usersController.findAll);
router.route('/:id').delete(usersController.remove);

export default router;
