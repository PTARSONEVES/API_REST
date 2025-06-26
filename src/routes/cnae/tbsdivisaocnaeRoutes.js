import { Router } from 'express';
import TbsdivisaocnaeController from '../../controllers/cnae/TbsdivisaocnaeController';

//import loginRequired from '../middlewares/loginRequired';

const router = new Router();


// Não deve existir
router.get('/:id/:secaoid', TbsdivisaocnaeController.index);

//router.post('/', TbscontinenteController.store);
//router.put('/:id', loginRequired, TbscontinenteController.update);
//router.delete('/:id', loginRequired, TbscontinenteController.delete);


export default router;
