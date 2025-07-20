import { Router } from 'express';
import UsertypeController from '../../controllers/user/UsertypeController';

import loginRequired from '../../middlewares/loginRequired';

const router = new Router();

// Não deve existir
router.get('/', UsertypeController.index);
router.get('/:id', UsertypeController.show);

router.post('/', UsertypeController.store);
router.put('/:id', loginRequired, UsertypeController.update);
router.delete('/:id', loginRequired, UsertypeController.delete);


export default router;
