import { Router } from 'express';
import PaisController from '../../controllers/localizacao/PaisController';

import loginRequired from '../../middlewares/loginRequired';

const router = new Router();

// Não deve existir
router.get('/', PaisController.index);
router.get('/:id', PaisController.show);

//router.post('/', PaisController.store);
//router.put('/:id', loginRequired, PaisController.update);
//router.delete('/:id', loginRequired, PaisController.delete);


export default router;
