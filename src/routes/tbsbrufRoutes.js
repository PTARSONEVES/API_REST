import { Router } from 'express';
import TbsbrufController from '../controllers/TbsbrufController';

//import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deve existir
router.get('/', TbsbrufController.index);

//router.post('/', TbscontinenteController.store);
//router.put('/:id', loginRequired, TbscontinenteController.update);
//router.delete('/:id', loginRequired, TbscontinenteController.delete);


export default router;
