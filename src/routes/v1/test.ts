import { Router } from "express";
import { testRouter } from "../../controllers/test";

const router: Router = Router();

// @route  get api/v1/test
router.route("/").get(testRouter.getAllTest).post(testRouter.createTest);

export default router;
