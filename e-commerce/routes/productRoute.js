import express from "express";
import { isAdmin, requireSignIn } from "../middleware/authMiddle.js";
import {
  createProductController,
  deleteproductController,
  getSingleProductController,
  getproductController,
  productCountController,
  productFilterController,
  productListController,
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

router.delete("/delete-product/:pid", deleteproductController);
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

router.post("/product-filters", productFilterController);

router.get("/product-count", productCountController);

router.get("/product-list/:page", productListController);

export default router;
