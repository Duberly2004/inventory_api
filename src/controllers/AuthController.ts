import { Request, Response } from "express";
import UserDao from "../others/dao/UserDao";
import User from "../models/User";
import { Role } from "../others/enums";
import { IUser } from "../others/interfaces";
import Exists from "../others/class/Exists";
import Verify from "../others/class/Verify";
import { comparePassword } from "../others/utils/hashPassword";
import { createJwtToken } from "../others/utils/token";
import returnError from "../others/functions/error";
const userExists = new Exists(User)
const userDao = new UserDao()
const userVerify = new Verify()
class AuthController {
    register(req: Request, res: Response) {
        const { name, email, password } = req.body
        const user: IUser = {
            name,
            email,
            password,
            is_active: true,
            role: Role.CLIENT,
        }
        userDao.create(req, res, user)
    }
    async login(req: Request, res: Response) {
        try {
            const user = await User.findOne({ email: req.body.email })
            if (!user) return res.sendStatus(404)
            await userVerify.isTrue(user.is_active, "Su correo aún no ha sido verificado");
            const isMatch = await comparePassword(req.body.password, user.password);
            if (!isMatch) {
                return res.status(404).json({ error: "Contraseña incorrecta" });
            }
            // Create Token
            const access_token = createJwtToken(user.toObject(), "7d");

            // Extract user_data without password
            const { password, ...user_data } = user.toObject();

            // Log user_data (actual data without Mongoose metadata)
            res.json({ user_data, access_token });

        } catch (error) {
            console.log(error);
            returnError(req, res, error);
        }
    }
}

export default AuthController