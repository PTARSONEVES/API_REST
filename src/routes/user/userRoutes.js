import { Router } from 'express';
import UserController from '../../controllers/user/UserController';

import loginRequired from '../../middlewares/loginRequired';

const router = new Router();

// Não deve existir
router.get('/', UserController.index);
router.get('/', loginRequired, UserController.show);

router.post('/', UserController.store);
router.put('/', loginRequired, UserController.update);
router.delete('/', loginRequired, UserController.delete);


export default router;
