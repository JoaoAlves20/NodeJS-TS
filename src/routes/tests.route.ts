// Rotas para testar conhecimentos de TypeScript e Express

import { Router } from "express";

import TestsController from "../controller/tests.controller.ts";

const router = Router();

// Rota para pegar o Params da URL
router.get('/:qualquer/:coisa', TestsController.getParams);

// Rota para pegar o Query da URL
router.get('/query', TestsController.getQuery);

// Rota para pegar o Body da requisição
router.post('/body', TestsController.getBody);

export default router;