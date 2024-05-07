"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const error_1 = __importDefault(require("../functions/error"));
const Product_1 = __importDefault(require("../../models/Product"));
const Category_1 = __importDefault(require("../../models/Category"));
class ProductDao {
    create(req, res, product) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newProduct = new Product_1.default(product);
                yield newProduct.save();
                res.sendStatus(201);
            }
            catch (error) {
                (0, error_1.default)(req, res, error);
            }
        });
    }
    list(req, res, user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const category = yield Category_1.default.findOne({ user_id });
                const products = yield Product_1.default.find({ category_id: category === null || category === void 0 ? void 0 : category._id });
                res.json(products);
            }
            catch (error) {
                (0, error_1.default)(req, res, error);
            }
        });
    }
}
exports.default = ProductDao;
