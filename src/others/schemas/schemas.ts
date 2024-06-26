import { number, z } from "zod";
import { categoryIdSchema, descriptionShema, emailSchema, isActiveSchema, nameShema, passwordShema, roleSchema, statusSchema, urlAvatarShema } from "./others";
import { getMsgZodError } from "../functions/error";
import { PaymentMethod } from "../enums";
export const userSchema = nameShema.merge(emailSchema).merge(passwordShema).merge(isActiveSchema).merge(roleSchema).merge(urlAvatarShema)
export const loginShema = emailSchema.merge(passwordShema)
export const productSchema = nameShema.merge(descriptionShema).merge(categoryIdSchema).merge(statusSchema).extend({
    price:z.number({required_error:getMsgZodError("price")}),
    url_image:z.string({required_error:getMsgZodError("url_image")}),
    stock:z.number({required_error:getMsgZodError("stock")}),
})
export const productDetailSchema = nameShema.extend({
    price:z.number({required_error:getMsgZodError("price")}),
    category:z.string({required_error:getMsgZodError("category")})
})
export const orderSchema = nameShema.extend({
    payment_method:z.enum([
        PaymentMethod.CreditCard,
        PaymentMethod.DebitCard,
        PaymentMethod.PayPal,
        PaymentMethod.BankTransfer,
        PaymentMethod.CashOnDelivery,
        PaymentMethod.MobilePayment,
        PaymentMethod.Cryptocurrency
    ],{required_error:getMsgZodError("payment_method")}),
    total:z.number({required_error:getMsgZodError("total")}),
    product_detail: productDetailSchema.optional().refine((value) => {
        // Validar que product_detail no sea undefined o null
        return value !== undefined && value !== null;
      }, { message: getMsgZodError("product_detail") })
    });