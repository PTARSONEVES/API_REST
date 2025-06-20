import { Router } from 'express';
import TbsclassecnaeController from '../../controllers/cnae/TbsclassecnaeController';

//import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deve existir
router.get('/:id', TbsclassecnaeController.index);

//router.post('/', TbscontinenteController.store);
//router.put('/:id', loginRequired, TbscontinenteController.update);
//router.delete('/:id', loginRequired, TbscontinenteController.delete);


export default router;
