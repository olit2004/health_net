// # getMyProfile(), 
// updateMyProfile(), 
// changePassword(), 
// uploadAvatar()



import * as userService from "../../Services/user.js";


export async function getMeController(req, res) {
  try {
    
    const { id } = req.user;

    const profile = await userService.getMyProfile(id);

    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "Profile not found",
      });
    }

    return res.json({
      success: true,
      profile,
    });
  } catch (err) {
    console.error("Error fetching profile:", err);
    return res.status(500).json({
      success: false,
      message: "Internal server error while fetching profile",
    });
  }
}




export async function getUsersController(req, res) {
  try {
    const { page = 1, role, email, firstName, lastName } = req.query;

    const filters = { role, email, firstName, lastName };

    const result = await userService.listUsers({
      page: parseInt(page, 10),
      filters,
    });

    return res.json({
      success: true,
      ...result,
    });
  } catch (err) {
    console.error("Error fetching users:", err);
    return res.status(500).json({
      success: false,
      message: "Internal server error while fetching users",
    });
  }
}


// controllers/userController.js


export async function getUserController(req, res) {
  try {
    const { id } = req.params;

    if (!id || isNaN(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid user ID",
      });
    }

    const user = await userService.getUserById(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.json({
      success: true,
      user,
    });
  } catch (err) {
    console.error("Error fetching user:", err);
    return res.status(500).json({
      success: false,
      message: "Internal server error while fetching user",
    });
  }
}








export async function inactivateUserController(req, res) {
  try {
    const { id } = req.params;


    if (req.user.role !== "ADMIN" ) {
      return res.status(403).json({ success: false, message: "Forbidden: only SUPER_ADMIN can delete users" });
    }
    const admin = await userService.getAdmin(req.user.id);
    console.log(admin)
     if (!admin || admin.adminLevel!="SUPER_ADMIN"){
         return res.status(403).json({ success: false, message: "Forbidden: only SUPER_ADMIN can delete users" });
     }

    const updatedUser = await userService.inactivateUserById(id);

    return res.json({
      success: true,
      message: "User inactivated successfully",
      user: updatedUser,
    });
  } catch (err) {
    console.error("Error inactivating user:", err);
    return res.status(500).json({
      success: false,
      message: "Internal server error while inactivating user",
    });
  }
}


export async function updateUserProfileController(req, res) {
  try {
    const { id } = req.params;
    const profileData = req.body;

   
    if (req.user.role !== "ADMIN" && req.user.id !== Number(id)) {
      return res.status(403).json({ success: false, message: "Forbidden: only owner or admin can update profile" });
    }

    const updated = await userService.updateUserProfile(id, profileData);

    return res.json({ success: true, profile: updated });
  } catch (err) {
    console.error("Error updating profile:", err);
    return res.status(500).json({ success: false, message: "Internal server error while updating profile" });
  }
}