import { Request, Response } from "express";
import { ICategory } from "../interfaces";
import Category from "../../models/Category";
import returnError from "../functions/error";
import Exists from "../class/Exists";
import { Types } from "mongoose";
import Unique from "../class/Unique";
const uniqueCategory = new Unique(Category)
const existsCategory = new Exists(Category)
class CategoryDao {
  async create(req: Request, res: Response, category: ICategory) {
    try {
      await uniqueCategory.forNameInUser(category.name,category.user_id)
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
  async update(req: Request, res: Response,categoryId:string,newCategory:{name?:string,color?:string},user_id:number) {
    try {
      const _id = new Types.ObjectId(categoryId)
      await existsCategory.forId(_id)
      await Category.updateOne({_id:categoryId,user_id},newCategory)
      return res.sendStatus(200)
    } catch (error) {
      returnError(req,res,error)
    }
  }
  async delete(req: Request, res: Response,categoryId:string,user_id:number) {
    try {
      const _id = new Types.ObjectId(categoryId)
      await existsCategory.forId(_id)
      await Category.deleteOne({_id:categoryId,user_id})
      return res.sendStatus(200)
    } catch (error) {
      returnError(req,res,error)
    }
  }
}
export default CategoryDao