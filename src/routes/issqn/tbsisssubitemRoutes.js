import { Router } from "express";

import TbsisssubitemController from '../../controllers/issqn/TbsisssubitemController';

const router = new Router();

router.get('/:itemid', TbsisssubitemController.index);

export default router;
