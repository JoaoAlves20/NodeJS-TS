import { Router } from "express";

import userRouter from "./user.route.ts";
import testsRouter from "./tests.route.ts";

import { authMiddleware } from "../middlewares/auth.middleware.ts";

export const router = Router();

router.use('/user', authMiddleware, userRouter);
router.use('/tests', testsRouter);
