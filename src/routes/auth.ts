import { Router, Request, Response } from "express";

const router = Router();

/**
 * @route GET /auth
 * @desc authenticate user
 * @access PUBLIC
 */

router.get("/", (_: Request, res: Response) => {
  res.send("hi");
});

export default router;
