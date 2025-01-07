import { Router } from 'express';
import UserController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deve existir
router.get('/', UserController.index);
router.get('/:id', UserController.show);

router.post('/', UserController.store);
router.put('/:id', loginRequired, UserController.update);
router.delete('/:id', loginRequired, UserController.delete);


export default router;
