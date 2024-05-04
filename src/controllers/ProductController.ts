import { Request, Response } from "express";
import ProductDao from "../others/dao/ProductDao";
import { IProduct } from "../others/interfaces";
import { ProductStatus } from "../others/enums";
import { assertHasUser } from "../others/utils/token";
const productDao = new ProductDao()
class ProductController {
    create(req:Request,res:Response){
        const {name,description,price,category_id} = req.body
        const product:IProduct = {
            name,
            description,
            price,
            category_id,
            status:ProductStatus.Available
            
        }
        productDao.create(req,res,product)
    }
    list(req:Request,res:Response){
        assertHasUser(req)
        productDao.list(req,res,req.user._id)
    }
}



export default ProductController