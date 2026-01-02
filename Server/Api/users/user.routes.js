
import express from "express";
import { requireAuth } from "../../middleware/requireAuth.js";
import { validateRequest } from "../../middleware/validateRequest.js";
import {registerValidator,loginValidator,} from "../../lib/validator.js"
import {onlyAdmin} from "../../middleware/onlyAdmin.js"
import {getUsersController,getUserController, getMeController,inactivateUserController, updateUserProfileController,updatePassword} from "./user.controller.js"
const route = express.Router()

route.get("/me",          requireAuth,getMeController)
route.get("/users",       onlyAdmin,getUsersController)
route.get("/user/:id",    onlyAdmin,getUserController)
route.patch("/inActivate/:id",  onlyAdmin,inactivateUserController);

route.patch("/users/:id/profile", requireAuth, updateUserProfileController);
route.patch('/changePassword', requireAuth, updatePassword);


export default route 


