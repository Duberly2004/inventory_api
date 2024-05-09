import { ProductStatus, Role } from "./enums";
import { Types } from "mongoose";
export interface IUser {
    name: string;
    email: string;
    password: string;
    url_avatar:string;
    is_active: boolean;
    role: Role
}

export interface ICategory {
    name:string;
    color:string;
    user_id:Types.ObjectId;

}

export interface IProduct {
    name:string;
    description:string;
    price:number;
    status:ProductStatus;
    category_id:Types.ObjectId;
    url_image:string
    stock:number
}

export interface IProductDetail {
    name:string;
    price:string;
    category:string;
}
export interface IOrder {
    name:string;
    user_id:Types.ObjectId;
    uuid:string;
    payment_method:string;
    total:number;
    product_detail: IProductDetail;
}