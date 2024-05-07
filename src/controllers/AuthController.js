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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserDao_1 = __importDefault(require("../others/dao/UserDao"));
const User_1 = __importDefault(require("../models/User"));
const enums_1 = require("../others/enums");
const Exists_1 = __importDefault(require("../others/class/Exists"));
const Verify_1 = __importDefault(require("../others/class/Verify"));
const hashPassword_1 = require("../others/utils/hashPassword");
const token_1 = require("../others/utils/token");
const error_1 = __importDefault(require("../others/functions/error"));
const userExists = new Exists_1.default(User_1.default);
const userDao = new UserDao_1.default();
const userVerify = new Verify_1.default();
class AuthController {
    register(req, res) {
        const { name, email, password, url_avatar } = req.body;
        const user = {
            name,
            email,
            password,
            url_avatar,
            is_active: true,
            role: enums_1.Role.CLIENT,
        };
        userDao.create(req, res, user);
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield User_1.default.findOne({ email: req.body.email });
                if (!user)
                    return res.sendStatus(404);
                yield userVerify.isTrue(user.is_active, "Su correo aún no ha sido verificado");
                const isMatch = yield (0, hashPassword_1.comparePassword)(req.body.password, user.password);
                if (!isMatch) {
                    return res.status(404).json({ error: "Contraseña incorrecta" });
                }
                // Create Token
                const access_token = (0, token_1.createJwtToken)(user.toObject(), "7d");
                // Extract user_data without password
                const _a = user.toObject(), { password } = _a, user_data = __rest(_a, ["password"]);
                // Log user_data (actual data without Mongoose metadata)
                res.json({ user_data, access_token });
            }
            catch (error) {
                console.log(error);
                (0, error_1.default)(req, res, error);
            }
        });
    }
}
exports.default = AuthController;
