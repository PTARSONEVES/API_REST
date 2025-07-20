import { Router } from "express";

import TbsissdnacController from '../../controllers/issqn/TbsissdnacController';

const router = new Router();

router.get('/:itemid/:subitemid', TbsissdnacController.index);

export default router;
