import { Schema,Document, model, Types } from "mongoose";
import { IOrder } from "../others/interfaces";
import { v4 } from 'uuid';
export interface Order extends IOrder,Document {}
const orderSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    uuid:{
        type:String,
        default: v4()
    },
    payment_method:{
        type:String
    },
    total:{
        type:String
    },
    product_detail:{
        type:Object,
        required:true
    },
    user_id:{
        type:Types.ObjectId,
        required:true
    }
})
export default model<Order>("Order",orderSchema)