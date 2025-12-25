// login(req,res), 
// registerByAdmin(req,res),
// forgotPassword(),
// refreshToken()
// authControllers.js


import jwt from "jsonwebtoken"
import bcrypt from "bcrypt";
import dotenv from"dotenv";
dotenv.config()
const saltRound = parseInt(process.env.saltRound);
const refresh_secret = process.env.refresh_secret

import { registerUser,loginUser } from "./authService.js";
import { setToken,removeToken } from "../../lib/jwt.js";
import { checkUser } from "../User/userService.js";



// Handle user login

export const loginController = async (req, res,next) => {
    const {email, password}= req.body;
    try {

    if (!email ||!password){
      new Error ("Both email and password is required");
    }
    const user = await loginUser({email,password});
    const payload={ id:user.id,role:user.role};
    setToken(res,payload)
    
    res.status(200).json(user)
      
    }catch(err){
      
        next (err) 
    }
}



// Handle new user registration (admin only)

export const registerController = async (req, res) => {
    const {email, password , firstName,lastName,address, avatarUrl, phone} =req.body;
    try{
      // check if the neccassyary dat ais provided

          if (!email||!password||!firstName){
            return res.status(400).json({mssg:"email, password and first name is required"})

    }
      // check bcrypt hashing 
    const salt = await bcrypt.genSalt(saltRound);
    const hashed_password = await  bcrypt.hash(password,salt);



    const user= await registerUser({
          email, 
          password:hashed_password, 
          first_name:firstName,
          role:"MEMBER",
          last_name:lastName,
          address,
          avatar_url:avatarUrl, 
          phone
      })
    res.status(201).json(user)
      
  }catch(err){
    console.log("ERROR: couldn't reagister the user",err.message)
    res.status(500).json({mssg:err.message});
}
}




    // Handle user logout


export const logoutController = async (req, res) => {
  try{
    removeToken(res)
    res.status(200).json({mssg:"loged out successfully"})

  }catch(err){
    console.log("ERROR: couldn't logout ",err)
    res.status(400).json({err})
  }

}


export const refreshTokenController = async (req, res) => {
     const refresh_token = req.cookies.rft 
  try{
    if (!refresh_token){
      res.status(400).json({mssg:" no refersh token provideds"})
    }
    const decoded = jwt.verify(refresh_token,refresh_secret);
    const  payload ={
      id :decoded.id,
      role:decoded.role
    }
    setToken(res,payload);
    res.status(200).json({mssg:"token refereshed"});
}catch(err){

  console.log(" ERROR: couldn't refersh token ",err);
  res.status(400).jon({mssg:"server error  couldn't reffresh token"})
}
}






