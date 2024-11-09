import express, { Router } from "express";
import auth from "../middleware/auth";
import { authUser, loginGoogleUser, logoutUser } from "../Api/user";

const router: Router = express.Router();

router.post("/login/google", loginGoogleUser);
router.post("/logout", auth, logoutUser);
router.get("/auth", auth, authUser);

export default router;
