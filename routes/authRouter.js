import { Router } from "express";
const router = Router();
import { login, logout, register } from "../controllers/authControllers.js";
import {
  validateLoginInput,
  validateRegisterInput,
} from "../middleware/validationMiddleware.js";

router.post("/register", validateRegisterInput, register);
router.post("/login", validateLoginInput, login);
router.post("/logout", logout);

export default router;
