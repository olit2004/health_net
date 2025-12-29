
// # POST   /api/v1/auth/login
// # POST   /api/v1/auth/refresh
// # POST   /api/v1/auth/forgot-password


import express from "express";
import { requireAuth } from "../../middleware/requireAuth.js";
import { validateRequest } from "../../middleware/validateRequest.js";
import {registerValidator,loginValidator,} from "../../lib/validator.js"
import {onlyAdmin} from "../../middleware/onlyAdmin.js"

import {registerController,loginController,refreshController,logoutController} from "./auth.controller.js";

const route = express.Router();


route.post("/register", onlyAdmin, validateRequest(registerValidator),registerController)
route.post("/login", loginController);
route.post("/reffresh",refreshController);
route.post ("/logout",logoutController)











export default route ;






























