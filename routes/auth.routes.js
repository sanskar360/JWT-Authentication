import { Router } from "express";
import * as authController from "../controllers/auth.controller.js";


const authRouter = Router();

authRouter.post("/register", authController.register);  

// GET /api/auth/get-me
authRouter.get("/get-me", authController.getMe);

//POST/api/auth/login
authRouter.post("/login", authController.login)

// GET /api/auth/refresh-token
authRouter.get("/refresh-token", authController.refreshToken);

// GET/api/auth/logout
authRouter.get("/logout", authController.logout);

//GET/api/auth/logout-all
authRouter.get("/logoutall", authController.logoutall)

export default authRouter;