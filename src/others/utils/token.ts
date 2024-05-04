import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../../config/globalConstants";
import { Request } from "express";

export const createJwtToken = (data:any,expiresIn:string) => {
  //Crear token
  const token = jwt.sign(data, SECRET_KEY, {
    expiresIn, //Token expira en una semana
  });
  return token
}

export const verifyJwtToken = (token:string) => {
  try {
    return jwt.verify(token,SECRET_KEY)
  } catch (error) {
    return false
  }
}

type RequestWithUser = Request & {user: any};
export function assertHasUser(req: Request): asserts req is RequestWithUser {
    if (!( "user" in req)) {
        throw new Error("Request object without user found unexpectedly");
    }
}