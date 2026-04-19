import express from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';

import { router } from './routes/main.route.ts';
import { notFoundRequest, errorHandler } from './routes/errorhandler.ts';

dotenv.config();
const server = express();

server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(router);
server.use(notFoundRequest);
server.use(errorHandler);

const port: string = process.env.PORT || '8080';
server.listen(port, () => console.log(`Server running on http://localhost:${port}`));