import { Router } from 'express';
import UserfotoController from '../controllers/UserfotoController';

const router = new Router();

router.post('/', UserfotoController.store);


export default router;
