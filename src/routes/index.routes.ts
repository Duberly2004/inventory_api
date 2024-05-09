import { Router } from "express";
import AuthController from "../controllers/AuthController";
import validateSchema from "../middlewares/validateSchema";
import { loginShema, orderSchema, productSchema, userSchema } from "../others/schemas/schemas";
import CategoryController from "../controllers/CategoryController";
import { nameShema } from "../others/schemas/others";
import passport from "passport";
import ProductController from "../controllers/ProductController";
import OrderControlller from "../controllers/OrderController";

const router = Router()
const auth = new AuthController()
router.post('/auth/login',validateSchema(loginShema),auth.login)
router.post('/auth/register',validateSchema(userSchema),auth.register)

const category = new CategoryController()
router.post('/category',passport.authenticate('jwt',{session:false}),validateSchema(nameShema),category.create)
router.get('/categories',passport.authenticate('jwt',{session:false}),category.list)
router.delete('/category/:id',passport.authenticate('jwt',{session:false}),category.delete)
router.patch('/category/:id',passport.authenticate('jwt',{session:false}),category.update)

const product = new ProductController()
router.post('/product',passport.authenticate('jwt',{session:false}),validateSchema(productSchema),product.create)
router.get('/products',passport.authenticate('jwt',{session:false}),product.list)
router.get('/products/all',product.all)
router.delete('/product/:id',passport.authenticate('jwt',{session:false}),product.delete)
router.post('/product/:id',passport.authenticate('jwt',{session:false}),validateSchema(productSchema),product.update)

const order = new OrderControlller()
router.post('/order',passport.authenticate('jwt',{session:false}),validateSchema(orderSchema),order.create)
router.get('/orders',passport.authenticate('jwt',{session:false}),order.list)

export default router