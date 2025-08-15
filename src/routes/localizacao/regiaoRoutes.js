import { Router } from 'express';
import RegiaoController from '../../controllers/localizacao/RegiaoController';

//import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deve existir
router.get('/', RegiaoController.index);

//router.post('/', TbscontinenteController.store);
//router.put('/:id', loginRequired, TbscontinenteController.update);
//router.delete('/:id', loginRequired, TbscontinenteController.delete);


export default router;
