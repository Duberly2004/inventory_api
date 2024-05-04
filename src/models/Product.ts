import { ProductStatus } from "../others/enums";
import { IProduct } from "../others/interfaces";
import { Document,Schema,Types, model } from "mongoose";
export interface Product extends IProduct,Document {}
const productSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        default:ProductStatus.Available
    },
    category_id:{
        type:Types.ObjectId,
        required:true
    }
})

export default model<Product>("Product",productSchema)