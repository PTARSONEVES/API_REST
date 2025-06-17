import { Router } from "express";
import TbsissitemController from '../controllers/TbsissitemController';

const router = new Router();

router.get('/', TbsissitemController.index);

export default router;
