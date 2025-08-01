import { Router } from 'express';
import ReservaController from '../../controllers/reservas/ReservaController';

//import loginRequired from '../../middlewares/loginRequired';

const router = new Router();

// Não deve existir
router.get('/', ReservaController.index);

//router.post('/', TbscontinenteController.store);
//router.put('/:id', loginRequired, TbscontinenteController.update);
//router.delete('/:id', loginRequired, TbscontinenteController.delete);

export default router;
