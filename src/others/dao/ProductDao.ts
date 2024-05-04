import { Request,Response } from "express";
import { IProduct } from "../interfaces";
import returnError from "../functions/error";
import Product from "../../models/Product";
import Category from "../../models/Category";
class ProductDao {
    async create(req:Request,res:Response,product:IProduct) {
        try {
            const newProduct = new Product(product)
            await newProduct.save()
            res.sendStatus(201)
        } catch (error) {
            returnError(req,res,error)
        }
    }
    async list(req:Request,res:Response,user_id:number) {
        try {
            const category = await Category.findOne({user_id})
            const products = await Product.find({category_id:category?._id})
            res.json(products)
        } catch (error) {
            returnError(req,res,error)
        }
    }
}
export default ProductDao