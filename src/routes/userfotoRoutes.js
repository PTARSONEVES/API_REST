import { Router } from 'express';
import loginRequired from '../middlewares/loginRequired';
import UserfotoController from '../controllers/UserfotoController';

const router = new Router();

router.post('/', loginRequired, UserfotoController.store);


export default router;
