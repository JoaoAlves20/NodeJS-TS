import { Router } from "express";

import UserController from "../controller/user.controller.ts";

const router = Router();

router.get('/:name', UserController.getUser);

export default router;