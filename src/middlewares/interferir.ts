import type { RequestHandler } from "express";

export const interferir: RequestHandler = (request, response, next) => {
    let logged = true;

    if (!logged) {
        return response.status(403).json({ message: 'Forbidden' });
    }

    next();
}