import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function hashingPassword(password) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

export function generateToken(userId, response) {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "2d",
  });

  response.cookie("JWT_TOKEN", token, {
    maxAge: 2 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "development",
  });

  return token; 
} 


