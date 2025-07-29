import { Router } from 'express';
import PessoaController from '../../controllers/pessoa/PessoaController';

//import loginRequired from '../../middlewares/loginRequired';

const router = new Router();

// Não deve existir
router.get('/', PessoaController.index);

//router.post('/', TbscontinenteController.store);
//router.put('/:id', loginRequired, TbscontinenteController.update);
//router.delete('/:id', loginRequired, TbscontinenteController.delete);

export default router;
