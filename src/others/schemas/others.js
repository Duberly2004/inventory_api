"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryIdSchema = exports.statusSchema = exports.urlAvatarShema = exports.roleSchema = exports.isActiveSchema = exports.passwordShema = exports.emailSchema = exports.descriptionShema = exports.nameShema = void 0;
const zod_1 = require("zod");
const error_1 = require("../functions/error");
const enums_1 = require("../enums");
exports.nameShema = zod_1.z.object({
    name: zod_1.z.string({ required_error: (0, error_1.getMsgZodError)("name") })
});
exports.descriptionShema = zod_1.z.object({
    description: zod_1.z.string({ required_error: (0, error_1.getMsgZodError)("description") })
});
exports.emailSchema = zod_1.z.object({
    email: zod_1.z.string({ required_error: (0, error_1.getMsgZodError)("email") }).email({ message: "Invalid email" }),
});
exports.passwordShema = zod_1.z.object({
    password: zod_1.z.string({ required_error: (0, error_1.getMsgZodError)("password") }),
});
exports.isActiveSchema = zod_1.z.object({
    is_active: zod_1.z.boolean().optional()
});
exports.roleSchema = zod_1.z.object({
    role: zod_1.z.enum([enums_1.Role.ADMIN, enums_1.Role.CLIENT]).optional()
});
exports.urlAvatarShema = zod_1.z.object({
    url_avatar: zod_1.z.string({ required_error: (0, error_1.getMsgZodError)("url_avatar") })
});
exports.statusSchema = zod_1.z.object({
    status: zod_1.z.enum([
        enums_1.ProductStatus.Available,
        enums_1.ProductStatus.Defective,
        enums_1.ProductStatus.OutOfStock,
        enums_1.ProductStatus.Reserved,
        enums_1.ProductStatus.Restocking,
        enums_1.ProductStatus.Discontinued,
        enums_1.ProductStatus.InTransit,
        enums_1.ProductStatus.OnSale,
        enums_1.ProductStatus.UnderReview,
        enums_1.ProductStatus.Withdrawn,
    ]).optional()
});
exports.categoryIdSchema = zod_1.z.object({
    category_id: zod_1.z.string({ required_error: (0, error_1.getMsgZodError)("category_id") })
});
