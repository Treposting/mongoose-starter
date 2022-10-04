import { Router } from "express";
import { productsRouter } from "../../controllers/products.controller";
const router: Router = Router();

router.post("/", productsRouter.createProduct);

export default router;
