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
const CategoryDao_1 = __importDefault(require("../others/dao/CategoryDao"));
const token_1 = require("../others/utils/token");
const error_1 = __importDefault(require("../others/functions/error"));
const categoryDao = new CategoryDao_1.default();
class CategoryController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, color } = req.body;
            (0, token_1.assertHasUser)(req);
            try {
                const category = {
                    name,
                    user_id: req.user._id,
                    color
                };
                categoryDao.create(req, res, category);
            }
            catch (error) {
                (0, error_1.default)(req, res, error);
            }
        });
    }
    list(req, res) {
        (0, token_1.assertHasUser)(req);
        categoryDao.list(req, res, req.user._id);
    }
    update(req, res) {
        (0, token_1.assertHasUser)(req);
        categoryDao.update(req, res, req.params.id, req.body, req.user._id);
    }
    delete(req, res) {
        (0, token_1.assertHasUser)(req);
        categoryDao.delete(req, res, req.params.id, req.user._id);
    }
}
exports.default = CategoryController;
