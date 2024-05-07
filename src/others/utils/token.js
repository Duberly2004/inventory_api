"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertHasUser = exports.verifyJwtToken = exports.createJwtToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const globalConstants_1 = require("../../config/globalConstants");
const createJwtToken = (data, expiresIn) => {
    //Crear token
    const token = jsonwebtoken_1.default.sign(data, globalConstants_1.SECRET_KEY, {
        expiresIn, //Token expira en una semana
    });
    return token;
};
exports.createJwtToken = createJwtToken;
const verifyJwtToken = (token) => {
    try {
        return jsonwebtoken_1.default.verify(token, globalConstants_1.SECRET_KEY);
    }
    catch (error) {
        return false;
    }
};
exports.verifyJwtToken = verifyJwtToken;
function assertHasUser(req) {
    if (!("user" in req)) {
        throw new Error("Request object without user found unexpectedly");
    }
}
exports.assertHasUser = assertHasUser;
