import type { RequestHandler, ErrorRequestHandler } from 'express';

export const notFoundRequest: RequestHandler = (_, response) => {
    response.status(404).json({ message: 'Not found' });
}

export const errorHandler: ErrorRequestHandler = (error, _, response) => {
    console.error(error);
    response.status(500).json({ message: 'Internal server error' });
}