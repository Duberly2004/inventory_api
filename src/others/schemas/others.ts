import {z} from 'zod'
import { getMsgZodError } from '../functions/error'
import { ProductStatus, Role } from '../enums'

export const nameShema = z.object({
    name:z.string({required_error:getMsgZodError("name")})
})

export const descriptionShema = z.object({
    description:z.string({required_error:getMsgZodError("description")})
})

export const emailSchema = z.object({
    email:z.string({required_error:getMsgZodError("email")}).email({message:"Invalid email"}),
})

export const passwordShema = z.object({
    password:z.string({required_error:getMsgZodError("password")}),
})

export const isActiveSchema = z.object({
    is_active:z.boolean().optional()
})

export const roleSchema = z.object({
    role:z.enum([Role.ADMIN,Role.CLIENT]).optional()
}) 
export const urlAvatarShema = z.object({
    url_avatar:z.string({required_error:getMsgZodError("url_avatar")})
})
export const statusSchema = z.object({
    status:z.enum([
        ProductStatus.Available,
        ProductStatus.Defective,
        ProductStatus.OutOfStock, 
        ProductStatus.Reserved,
        ProductStatus.Restocking,
        ProductStatus.Discontinued,
        ProductStatus.InTransit,
        ProductStatus.OnSale,
        ProductStatus.UnderReview,
        ProductStatus.Withdrawn,
    ]).optional()
})


export const categoryIdSchema = z.object({
    category_id:z.string({required_error:getMsgZodError("category_id")})
})