import { Router } from "express";
import { getAllUsers } from "../controllers/controller";

const router: Router = Router();

router.get("/", getAllUsers);

export default router;
