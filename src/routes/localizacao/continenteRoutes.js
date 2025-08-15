import { Router } from 'express';
import ContinenteController from '../../controllers/localizacao/ContinenteController';

import loginRequired from '../../middlewares/loginRequired';

const router = new Router();

// Não deve existir
router.get('/', ContinenteController.index);
router.get('/:id', ContinenteController.show);

router.post('/', ContinenteController.store);
router.put('/:id', loginRequired, ContinenteController.update);
router.delete('/:id', loginRequired, ContinenteController.delete);


export default router;
