import type { RequestHandler } from "express";

class TestsController {
    // Método para pegar o Params da URL
    getParams: RequestHandler = (request, response) => {
        const { qualquer, coisa } = request.params;

        if (!qualquer || !coisa) {
            return response.status(400).json({ message: 'Missing required URL parameters' });
        }
        
        response.status(200).json({ qualquer, coisa });
    }

    // Método para pegar o Query da URL
    getQuery: RequestHandler = (request, response) => {
        const { order, page } = request.query;

        if (!order || !page) {
            return response.status(400).json({ message: 'Missing required query parameters' });
        }
        
        response.status(200).json({ order, page });
    }

    // Método para pegar o Body da requisição
    getBody: RequestHandler = (request, response) => {
        const { animal, sound } = request.body;

        if (!animal || !sound) {
            return response.status(400).json({ message: 'Missing required body parameters' });
        }
        
        response.status(200).json({ animal, sound });
    }
}

export default new TestsController();