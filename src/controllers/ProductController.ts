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
    async all(req: Request, res: Response) {
        try {
            const productsWithCategoryAndUser = await Product.aggregate([
                // Paso 1: Obtener la información de la categoría de cada producto
                {
                    $lookup: {
                        from: 'categories', // Nombre de la colección de categorías en la base de datos
                        localField: 'category_id', // Campo local en Product para comparar
                        foreignField: '_id', // Campo en Category para comparar
                        as: 'category' // Almacenar resultado en el campo 'category'
                    }
                },
                // Paso 2: Desenrollar el array de categorías (asumimos que cada producto tiene una sola categoría)
                { $unwind: '$category' },
                // Paso 3: Obtener la información del usuario asociado a cada categoría
                {
                    $lookup: {
                        from: 'users', // Colección de usuarios
                        localField: 'category.user_id', // Referencia desde el documento de categoría
                        foreignField: '_id', // Campo en User para comparar
                        as: 'category.user' // Almacenar el resultado en 'user' dentro de 'category'
                    }
                },
                // Paso 4: Desenrollar el array de usuarios (asumimos que cada categoría tiene un solo usuario)
                { $unwind: '$category.user' },
                // Paso 5: Proyectar solo los campos necesarios
                {
                    $project: {
                        _id: 1,
                        name: 1,
                        price: 1,
                        url_image: 1,
                        stock: 1,
                        status: 1,
                        description: 1,
                        category: {
                            name: '$category.name',
                            color: '$category.color',
                            user: {
                                _id: '$category.user._id',
                                url_avatar:'$category.user.url_avatar',
                                name: '$category.user.name'
                            }
                        }
                    }
                }
            ]);
            res.json(productsWithCategoryAndUser);
        } catch (error) {
            console.error('Error retrieving products with category and user', error);
            res.sendStatus(500); // Envía un estado HTTP 500 en caso de error
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