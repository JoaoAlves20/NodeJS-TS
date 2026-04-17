import express from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';
dotenv.config();

import { router } from './routes/router.ts';

const server = express();

server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use('/user', router);

const port: string = process.env.PORT || '8080';
server.listen(port, () => console.log(`Server running on http://localhost:${port}`));