import { Request, Response } from "express"
import User from "../../models/User"
import { IUser } from "../interfaces"
import Unique from "../class/Unique"
import returnError from "../functions/error"
import { encriptPassword } from "../utils/hashPassword"
const userUnique = new Unique(User)
class UserDao {
    async create(req:Request,res:Response,user:IUser){
        try {
            await userUnique.forEmail(user.email)
            await userUnique.forName(user.name)
            const newUser =  new User({...user,password:await encriptPassword(user.password)})
            await newUser.save()
            res.sendStatus(201)
        } catch (error) {
            returnError(req,res,error)
        }
    }
}

export default UserDao