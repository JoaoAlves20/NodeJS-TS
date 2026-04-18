import { Router } from "express";

export const router = Router();

router.get('/:qualquer/:coisa', (request, response) => {
    const { qualquer, coisa } = request.params;

    response.json({ qualquer, coisa });
})