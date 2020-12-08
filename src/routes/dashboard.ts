import { Router, Request, Response } from "express";

const router = Router();

/**
 * @route GET /dashboard
 * @desc authenticate user
 * @access PRIVATE
 */

router.get("/", (_: Request, res: Response) => {
    res.send("hi");
});

export default router;
