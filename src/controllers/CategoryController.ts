import { Request, Response } from "express";
import CategoryDao from "../others/dao/CategoryDao";
import { ICategory } from "../others/interfaces";
import { assertHasUser } from "../others/utils/token";
import returnError from "../others/functions/error";
const categoryDao = new CategoryDao()
class CategoryController {
    async create(req:Request,res:Response){
        const {name,color} = req.body
        assertHasUser(req)
        try {
            const category:ICategory = {
                name,
                user_id: req.user._id,
                color
            }
            categoryDao.create(req,res,category)
        } catch (error) {
            returnError(req,res,error)            
        }
    }
    list(req:Request,res:Response){
        assertHasUser(req)
        categoryDao.list(req,res,req.user._id)
    }
    update(req:Request,res:Response){
        assertHasUser(req)
        categoryDao.update(req,res,req.params.id,req.body,req.user._id)
    }
    delete(req:Request,res:Response){
        assertHasUser(req)
        categoryDao.delete(req,res,req.params.id,req.user._id)
    }
}
export default CategoryController