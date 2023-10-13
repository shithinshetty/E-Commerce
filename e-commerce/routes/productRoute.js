import express from "express";
import { isAdmin, requireSignIn } from "../middleware/authMiddle.js";
import {
  createProductController,
  deleteproductController,
  getSingleProductController,
  getproductController,
  productPhotoController,
  updateProductController,
} from "../controllers/productController.js";
import formidable from "express-formidable";
const router = express.Router();

router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

router.get("/get-product", getproductController);

router.get("/get-product/:slug", getSingleProductController);
router.get("/product-photo/:pid", productPhotoController);

router.get("/product/:pid", deleteproductController);
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);
export default router;
