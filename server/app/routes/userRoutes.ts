import { Router } from 'express';
import UserController from '../controllers/userController';

const router = Router();

router.post('/', UserController.createUser);

router.get('/', UserController.getUsers);

router.get('/:id', UserController.getOneUser);

router.delete('/:id', UserController.deleteUser);

export default router;
