import express from "express";
import {
  loginController,
  registerController,
  testController,
  forgotController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middleware/authMiddle.js";

const router = express.Router();
router.post("/register", registerController);

router.post("/login", loginController);

router.post("/forgotpassword", forgotController);
router.get("/test", requireSignIn, isAdmin, testController);

router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
export default router;
