import type { RequestHandler } from "express";

class UserController {
    getUser: RequestHandler = (request, response) => {
        const { name } = request.params;

        response.json({ username: name });
    }
}

export default new UserController();