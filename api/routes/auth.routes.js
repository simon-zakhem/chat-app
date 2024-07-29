import express from "express"
import { LogoutUser, SignupUser, loginUser } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", SignupUser);

router.post("/login", loginUser);

router.post("/logout", LogoutUser);

export default router;