import { Router } from 'express';
import TbsgrupocnaeController from '../../controllers/cnae/TbsgrupocnaeController';

//import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deve existir
router.get('/:id', TbsgrupocnaeController.index);

//router.post('/', TbscontinenteController.store);
//router.put('/:id', loginRequired, TbscontinenteController.update);
//router.delete('/:id', loginRequired, TbscontinenteController.delete);


export default router;
