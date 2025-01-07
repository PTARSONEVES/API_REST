import { Router } from 'express';
import TbspaisController from '../controllers/TbspaisController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deve existir
router.get('/', TbspaisController.index);
router.get('/:id', TbspaisController.show);

router.post('/', TbspaisController.store);
router.put('/:id', loginRequired, TbspaisController.update);
router.delete('/:id', loginRequired, TbspaisController.delete);


export default router;
