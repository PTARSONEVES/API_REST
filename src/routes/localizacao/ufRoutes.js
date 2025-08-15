import { Router } from 'express';
import UfController from '../../controllers/localizacao/UfController';

//import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deve existir
router.get('/:id/:paisid', UfController.index);

//router.post('/', TbscontinenteController.store);
//router.put('/:id', loginRequired, TbscontinenteController.update);
//router.delete('/:id', loginRequired, TbscontinenteController.delete);


export default router;
