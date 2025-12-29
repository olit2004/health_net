// login(req,res), 
// registerByAdmin(req,res),
// forgotPassword(),
// refreshToken()
// authControllers.js

import * as userService from '../../Services/user.js';
import {setToken,removeToken}  from "../../lib/jwt.js"
import dotenv from"dotenv";


dotenv.config()
const saltRound = parseInt(process.env.saltRound);
const refresh_secret = process.env.refresh_secret



//controller to handle  user registration

export async function registerController(req, res) {
  try {
    console.log("this started running");
    const userData = req.validatedData;
    const facilityId = req.facilityId;

    const newUser = await userService.createUserWithProfile({ userData, facilityId });

    return res.status(201).json({
      success: true,
      message: `${userData.role} registered successfully`,
      user: newUser
    });
  } catch (error) {
    console.error("Registration error:", error);

    if (error.code === 'P2002') {
      return res.status(409).json({ success: false, message: "Email already exists" });
    }

    return res.status(500).json({ 
      success: false,
      message: "Internal server error during registration" 
    });
  }
}

 
//controller to handle  user login
export async function loginController(req, res) {
  try {
    console.log("this is running fine ")
    console.log(req.body)
    const { email, password } = req.body;
    console.log("hello",email,password)

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password required" });
    }

    const  user= await userService.loginService({email, password});
    const payload={id:user.id,firstName:user.firstName,role:user.role}
    setToken(res,payload)
    res.json({
           user});
  } catch (err) {
    console.error("Login error:", err);
    res.status(401).json({ error: err.message });
  }
}

//controller to handle  user logout 
export async function logoutController(req,res){
  try{
    removeToken(res)
    res.status(200).json({message:"loged out successfully"})

  }catch(err){
    console.log("ERROR: couldn't logout ",err)
    res.status(400).json({message:err})
  }



}

//controller to handle  user refresh token

export async function  refreshController(req,res){
  const refresh_token = req.cookies.rft 
  try{
    if (!refresh_token){
      res.status(400).json({message:" no refersh token provideds"})
    }
    const decoded = jwt.verify(refresh_token,refresh_secret);
    const  payload ={
      id :decoded.id,
      role:decoded.role
    }
    setToken(res,payload);
    res.status(200).json({message:"token refereshed"});
}catch(err){

  console.log(" ERROR: couldn't refersh token ",err);
  res.status(400).jon({message:"server error  couldn't reffresh token"})
}

}




