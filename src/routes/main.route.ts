import { Router } from "express";

import userRouter from "./user.route.ts";
import testsRouter from "./tests.route.ts";

import { interferir } from "../middlewares/interferir.ts";

export const router = Router();

router.use('/user', interferir, userRouter);
router.use('/tests', testsRouter);
