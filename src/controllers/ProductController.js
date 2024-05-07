"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductDao_1 = __importDefault(require("../others/dao/ProductDao"));
const enums_1 = require("../others/enums");
const token_1 = require("../others/utils/token");
const productDao = new ProductDao_1.default();
class ProductController {
    create(req, res) {
        const { name, description, price, category_id } = req.body;
        const product = {
            name,
            description,
            price,
            category_id,
            status: enums_1.ProductStatus.Available
        };
        productDao.create(req, res, product);
    }
    list(req, res) {
        (0, token_1.assertHasUser)(req);
        productDao.list(req, res, req.user._id);
    }
}
exports.default = ProductController;
