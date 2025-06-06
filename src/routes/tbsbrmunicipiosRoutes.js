import { Router } from 'express';
import TbsbrmunicipioController from '../controllers/TbsbrmunicipioController';

//import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deve existir
router.get('/:id/:ufid', TbsbrmunicipioController.index);

//router.post('/', TbscontinenteController.store);
//router.put('/:id', loginRequired, TbscontinenteController.update);
//router.delete('/:id', loginRequired, TbscontinenteController.delete);


export default router;
