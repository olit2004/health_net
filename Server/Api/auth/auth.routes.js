
// # POST   /api/v1/auth/login
// # POST   /api/v1/auth/refresh
// # POST   /api/v1/auth/forgot-password


import express from "express";
import { requireAuth } from "../../middleware/requireAuth.js";
import { validateRegister } from "../../middleware/validateRegister.js";

import {
    loginController,
    registerController,
    logoutController,
    refreshTokenController,
    forgotPasswordController,
    resetPasswordController,
    getCurrentUserController
} from "../../controllers/authControllers.js";

const route = express.Router();



// Public routes
route.post("/login", loginController);
route.post("/forgot-password", forgotPasswordController);
route.post("/reset-password", resetPasswordController);

// Admin only route
route.post("/register", requireAuth, validateRegister, registerController);

// Protected routes (all authenticated users)
route.post("/logout", requireAuth, logoutController);
route.post("/refresh-token", requireAuth, refreshTokenController);
route.get("/me", requireAuth, getCurrentUserController);

export default route;



























