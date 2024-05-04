import { Request, Response } from "express";
import CategoryDao from "../others/dao/CategoryDao";
import { ICategory } from "../others/interfaces";
import { assertHasUser } from "../others/utils/token";
const categoryDao = new CategoryDao()
class CategoryController {
    create(req:Request,res:Response){
        const {name} = req.body
        assertHasUser(req)
        const category:ICategory = {
            name,
            user_id: req.user._id 
        }
        categoryDao.create(req,res,category)
    }
    list(req:Request,res:Response){
        assertHasUser(req)
        categoryDao.list(req,res,req.user._id)
    }
}
export default CategoryController