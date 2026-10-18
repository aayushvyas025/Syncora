import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

export async function hashingPassword(password) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

export function generateToken(response) {
   const token = jwt.sign('JWT_TOKEN', process.env.JWT_SECRET, {
    expiresAt:'2d'
   })

//    response.cookie(token)
}