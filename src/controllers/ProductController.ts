import { Request, Response } from "express";
import ProductDao from "../others/dao/ProductDao";
import { IProduct } from "../others/interfaces";
import { ProductStatus } from "../others/enums";
import { assertHasUser } from "../others/utils/token";
import { Types } from "mongoose";
import Product from "../models/Product";
const productDao = new ProductDao()
class ProductController {
    create(req:Request,res:Response){
        const {name,description,price,category_id,stock,url_image} = req.body
        const product:IProduct = {
            name,
            description,
            price,
            category_id,
            url_image,
            stock,
            status:ProductStatus.Available
            
        }
        productDao.create(req,res,product)
    }
    list(req:Request,res:Response){
        assertHasUser(req)
        productDao.list(req,res,req.user._id)
    }
    async all(req:Request,res:Response){
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
            res.sendStatus(500);
        }
    }
    update(req:Request,res:Response){
        assertHasUser(req)
        const _id = new Types.ObjectId(req.params.id)
        productDao.update(req,res,req.user._id,_id,req.body)
    }
    delete(req:Request,res:Response){
        assertHasUser(req)
        const _id = new Types.ObjectId(req.params.id)
        productDao.delete(req,res,req.user._id,_id)
    }
}



export default ProductController