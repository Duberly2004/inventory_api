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
const Order_1 = __importDefault(require("../../models/Order"));
class OrderDao {
    create(req, res, order) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newOder = new Order_1.default(order);
                yield newOder.save();
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
                const orders = yield Order_1.default.find({ user_id });
                res.json(orders);
            }
            catch (error) {
                (0, error_1.default)(req, res, error);
            }
        });
    }
}
exports.default = OrderDao;
