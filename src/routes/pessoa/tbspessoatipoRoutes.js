import { Router } from 'express';
import TbspessoatipoController from '../../controllers/pessoa/TbspessoatipoContoller';

//import loginRequired from '../../middlewares/loginRequired';

const router = new Router();

// Não deve existir
router.get('/', TbspessoatipoController.index);

//router.post('/', TbscontinenteController.store);
//router.put('/:id', loginRequired, TbscontinenteController.update);
//router.delete('/:id', loginRequired, TbscontinenteController.delete);

export default router;
