import { Router } from 'express';
import TbscnaeController from '../../controllers/cnae/TbscnaeController';

//import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deve existir
router.get('/:secaoid/:divisaoid/:grupoid/:classeid/:subclasseid/', TbscnaeController.index);

//router.post('/', TbscontinenteController.store);
//router.put('/:id', loginRequired, TbscontinenteController.update);
//router.delete('/:id', loginRequired, TbscontinenteController.delete);


export default router;
