import { Request, Response } from "express";
import { ICategory } from "../interfaces";
import Category from "../../models/Category";
import returnError from "../functions/error";

class CategoryDao {
  async create(req: Request, res: Response, category: ICategory) {
    try {
      const newCategory =  new Category(category)
      await newCategory.save()
      return res.sendStatus(201)
    } catch (error) {
      returnError(req,res,error)
    }
  }
  async list(req: Request, res: Response,user_id:number) {
    try {
      const categories = await Category.find({user_id})
      return res.json(categories)
    } catch (error) {
      returnError(req,res,error)
    }
  }
}
export default CategoryDao