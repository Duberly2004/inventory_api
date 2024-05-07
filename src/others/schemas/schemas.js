"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderSchema = exports.productDetailSchema = exports.productSchema = exports.loginShema = exports.userSchema = void 0;
const zod_1 = require("zod");
const others_1 = require("./others");
const error_1 = require("../functions/error");
const enums_1 = require("../enums");
exports.userSchema = others_1.nameShema.merge(others_1.emailSchema).merge(others_1.passwordShema).merge(others_1.isActiveSchema).merge(others_1.roleSchema).merge(others_1.urlAvatarShema);
exports.loginShema = others_1.emailSchema.merge(others_1.passwordShema);
exports.productSchema = others_1.nameShema.merge(others_1.descriptionShema).merge(others_1.categoryIdSchema).merge(others_1.statusSchema).extend({
    price: zod_1.z.number({ required_error: (0, error_1.getMsgZodError)("price") })
});
exports.productDetailSchema = others_1.nameShema.extend({
    price: zod_1.z.number({ required_error: (0, error_1.getMsgZodError)("price") }),
    category: zod_1.z.string({ required_error: (0, error_1.getMsgZodError)("category") })
});
exports.orderSchema = others_1.nameShema.extend({
    payment_method: zod_1.z.enum([
        enums_1.PaymentMethod.CreditCard,
        enums_1.PaymentMethod.DebitCard,
        enums_1.PaymentMethod.PayPal,
        enums_1.PaymentMethod.BankTransfer,
        enums_1.PaymentMethod.CashOnDelivery,
        enums_1.PaymentMethod.MobilePayment,
        enums_1.PaymentMethod.Cryptocurrency
    ], { required_error: (0, error_1.getMsgZodError)("payment_method") }),
    total: zod_1.z.number({ required_error: (0, error_1.getMsgZodError)("total") }),
    product_detail: exports.productDetailSchema.optional().refine((value) => {
        // Validar que product_detail no sea undefined o null
        return value !== undefined && value !== null;
    }, { message: (0, error_1.getMsgZodError)("product_detail") })
});
