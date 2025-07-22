import { Router } from 'express';
import TblpessoaController from '../../controllers/pessoa/TblpessoaController';

//import loginRequired from '../../middlewares/loginRequired';

const router = new Router();

// Não deve existir
router.get('/', TblpessoaController.index);

//router.post('/', TbscontinenteController.store);
//router.put('/:id', loginRequired, TbscontinenteController.update);
//router.delete('/:id', loginRequired, TbscontinenteController.delete);

export default router;
