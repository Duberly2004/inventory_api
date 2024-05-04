import { Request, Response } from "express";
import returnError from "../functions/error";
import Order from "../../models/Order";
import { IOrder } from "../interfaces";

class OrderDao {
  async create(req: Request, res: Response, order: IOrder) {
    try {
      const newOder = new Order(order)
      await newOder.save()
      res.sendStatus(201)
    } catch (error) {
      returnError(req, res, error)
    }
  }
  async list(req: Request, res: Response, user_id:number) {
    try {
      const orders = await Order.find({user_id})
      res.json(orders)
    } catch (error) {
      returnError(req, res, error)
    }
  }
  

}

export default OrderDao