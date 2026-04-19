import { Router } from "express";

import userRouter from "./user.route.ts";
import testsRouter from "./tests.route.ts";

export const router = Router();

router.use('/user', userRouter);
router.use('/tests', testsRouter);