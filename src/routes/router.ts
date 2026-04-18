import { Router } from "express";

import { router as userRouter } from "./user.route.ts";
import { router as testsRouter } from "./tests.route.ts";

export const router = Router();

router.use('/user', userRouter);
router.use('/tests', testsRouter);