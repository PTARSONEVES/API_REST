import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.get('/', homeController.index);


export default router;
