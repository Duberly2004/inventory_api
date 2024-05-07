"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const OrderDao_1 = __importDefault(require("../others/dao/OrderDao"));
const uuid_1 = require("uuid");
const token_1 = require("../others/utils/token");
const orderDao = new OrderDao_1.default();
class OrderControlller {
    create(req, res) {
        (0, token_1.assertHasUser)(req);
        const { name, total, product_detail, payment_method } = req.body;
        const order = {
            name,
            payment_method,
            product_detail: product_detail,
            total,
            user_id: req.user._id,
            uuid: (0, uuid_1.v4)(),
        };
        orderDao.create(req, res, order);
    }
    list(req, res) {
        (0, token_1.assertHasUser)(req);
        orderDao.list(req, res, req.user._id);
    }
}
exports.default = OrderControlller;
