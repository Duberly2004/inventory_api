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
const User_1 = __importDefault(require("../../models/User"));
const Unique_1 = __importDefault(require("../class/Unique"));
const error_1 = __importDefault(require("../functions/error"));
const hashPassword_1 = require("../utils/hashPassword");
const userUnique = new Unique_1.default(User_1.default);
class UserDao {
    create(req, res, user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield userUnique.forEmail(user.email);
                yield userUnique.forName(user.name);
                const newUser = new User_1.default(Object.assign(Object.assign({}, user), { password: yield (0, hashPassword_1.encriptPassword)(user.password) }));
                yield newUser.save();
                res.sendStatus(201);
            }
            catch (error) {
                (0, error_1.default)(req, res, error);
            }
        });
    }
}
exports.default = UserDao;
