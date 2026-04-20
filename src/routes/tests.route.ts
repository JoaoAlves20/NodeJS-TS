// Rotas para testar conhecimentos de TypeScript e Express

import { Router } from "express";

import TestsController from "../controller/tests.controller.ts";

const router = Router();

router.get('/:qualquer/:coisa', TestsController.getParams);
router.get('/query', TestsController.getQuery);
router.post('/body', TestsController.getBody);

export default router;