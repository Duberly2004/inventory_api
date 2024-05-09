import { Request,Response } from "express";
import { IProduct } from "../interfaces";
import returnError from "../functions/error";
import Product from "../../models/Product";
import { Types } from "mongoose";
import Exists from "../class/Exists";
const productExist = new Exists(Product)
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
    async list(req: Request, res: Response, user_id: Types.ObjectId) {
        try {
            const productsWithCategory = await Product.aggregate([
                // Paso 1: Realizar un lookup para obtener la información de categoría de cada producto
                {
                    $lookup: {
                        from: 'categories', // Nombre de la colección de categorías en la base de datos
                        localField: 'category_id', // Campo local en Product para comparar con foreignField en Category
                        foreignField: '_id', // Campo en Category para comparar con localField en Product
                        as: 'category' // Nombre del campo donde se almacenará la información de categoría
                    }
                },
                // Paso 2: Desenrollar (unwind) el array de categorías (cada producto está asociado a una sola categoría)
                { $unwind: '$category' },
                // Paso 3: Filtrar los productos por el ID de usuario en la categoría
                { $match: { 'category.user_id': user_id } },
                // Paso 4: Proyectar solo los campos necesarios de los productos y la categoría asociada
                {
                    $project: {
                        _id: 1, // Mantener el ID del producto
                        name: 1, // Mantener el nombre del producto
                        price: 1, // Mantener el precio del producto
                        url_image:1,
                        stock:1,
                        status:1,
                        description:1,
                        category: '$category' // Mantener la información completa de la categoría asociada
                    }
                }
            ]);
            res.json(productsWithCategory);
        } catch (error) {
            // En caso de un error durante la ejecución, manejamos el error
            returnError(req, res, error);
        }
    }
    async update(req:Request,res:Response,user_id: Types.ObjectId,_id:Types.ObjectId,newProduct:IProduct) {
        try {
            await productExist.forId(_id)
            await Product.updateOne({_id},newProduct)
            res.sendStatus(201)
        } catch (error) {
            returnError(req,res,error)
        }
    }
    async delete(req:Request,res:Response,user_id: Types.ObjectId,_id:Types.ObjectId) {
        try {
            await productExist.forId(_id)
            await Product.deleteOne({_id})
            res.sendStatus(201)
        } catch (error) {
            returnError(req,res,error)
        }
    }
    
}
export default ProductDao