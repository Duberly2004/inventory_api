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
const Category_1 = __importDefault(require("../../models/Category"));
const error_1 = __importDefault(require("../functions/error"));
const Exists_1 = __importDefault(require("../class/Exists"));
const mongoose_1 = require("mongoose");
const Unique_1 = __importDefault(require("../class/Unique"));
const uniqueCategory = new Unique_1.default(Category_1.default);
const existsCategory = new Exists_1.default(Category_1.default);
class CategoryDao {
    create(req, res, category) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield uniqueCategory.forNameInUser(category.name, category.user_id);
                const newCategory = new Category_1.default(category);
                yield newCategory.save();
                return res.sendStatus(201);
            }
            catch (error) {
                (0, error_1.default)(req, res, error);
            }
        });
    }
    list(req, res, user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categories = yield Category_1.default.find({ user_id });
                return res.json(categories);
            }
            catch (error) {
                (0, error_1.default)(req, res, error);
            }
        });
    }
    update(req, res, categoryId, newCategory, user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const _id = new mongoose_1.Types.ObjectId(categoryId);
                yield existsCategory.forId(_id);
                yield Category_1.default.updateOne({ _id: categoryId, user_id }, newCategory);
                return res.sendStatus(200);
            }
            catch (error) {
                (0, error_1.default)(req, res, error);
            }
        });
    }
    delete(req, res, categoryId, user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const _id = new mongoose_1.Types.ObjectId(categoryId);
                yield existsCategory.forId(_id);
                yield Category_1.default.deleteOne({ _id: categoryId, user_id });
                return res.sendStatus(200);
            }
            catch (error) {
                (0, error_1.default)(req, res, error);
            }
        });
    }
}
exports.default = CategoryDao;
