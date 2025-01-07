import { Router } from 'express';
import TbscontinenteController from '../controllers/TbscontinenteController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deve existir
router.get('/', TbscontinenteController.index);
router.get('/:id', TbscontinenteController.show);

router.post('/', TbscontinenteController.store);
router.put('/:id', loginRequired, TbscontinenteController.update);
router.delete('/:id', loginRequired, TbscontinenteController.delete);


export default router;
