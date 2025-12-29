// this function does the following

// # Extracts Bearer token → verifies → attaches req.user (id, role, email)

import jwt from "jsonwebtoken";

import dotenv from "dotenv";
import {getAdmin} from  "../Services/user.js"

dotenv.config();

const secret = process.env.access_secret

export async function onlyAdmin (req, res, next) {
  const access_token = req.cookies.token;

  if (!access_token) {
    return res.status(401).json({ message: "not authorized" });
  }

  try {
    const decoded = jwt.verify(access_token, secret);

    if (decoded.role === "ADMIN" || decoded.role === "MASTER_ADMIN") {
      const admin = await getAdmin(decoded.id);

      if (!admin) {
        return res.status(401).json({ message: "not authorized" });
      }

      req.facilityId = admin.facilityId;
      return next();
    }

    return res.status(401).json({ message: "not authorized" });
  } catch (err) {
    return res.status(401).json({ message: "not authorized" });
  }
}
