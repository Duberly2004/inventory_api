import { Request, Response } from "express";
import OrderDao from "../others/dao/OrderDao";
import { IOrder } from "../others/interfaces";
import { v4 } from 'uuid';
import { assertHasUser } from "../others/utils/token";

const orderDao = new OrderDao()
class OrderControlller {
    create(req:Request,res:Response) {
        assertHasUser(req)
        const {name,total,product_detail,payment_method} = req.body
        const order:IOrder = {
            name,
            payment_method,
            product_detail:product_detail,
            total,
            user_id:req.user._id,
            uuid:v4(),
        }
        orderDao.create(req,res,order)
    }
    list(req:Request,res:Response) {
        assertHasUser(req)
        orderDao.list(req,res,req.user._id)
    }
}

export default OrderControlller