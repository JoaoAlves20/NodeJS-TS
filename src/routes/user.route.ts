import { Router } from "express";

const router = Router();

router.get('/:name', (request, response) => {
    const { name } = request.params;

    response.json({ username: name });
})

export default router;