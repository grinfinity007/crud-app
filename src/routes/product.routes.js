import { Router } from "express";
import { 
  addProduct, 
  deleteProduct, 
  getAllProducts, 
  getProductById, 
  updateProduct 
} from "../controllers/product.controller.js";

const router = Router();

router
  .route("/")
  .get(getAllProducts)
  .post(addProduct);

router
  .route("/:id")
  .get(getProductById)
  .delete(deleteProduct)
  .patch(updateProduct);

export default router;