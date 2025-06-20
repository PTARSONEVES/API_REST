import { Router } from 'express';
import TbssubclassecnaeController from '../../controllers/cnae/TbssubclassecnaeController';

//import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deve existir
router.get('/:id', TbssubclassecnaeController.index);

//router.post('/', TbscontinenteController.store);
//router.put('/:id', loginRequired, TbscontinenteController.update);
//router.delete('/:id', loginRequired, TbscontinenteController.delete);


export default router;
