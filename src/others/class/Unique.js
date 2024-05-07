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
const Error_1 = __importDefault(require("./Error"));
class Unique {
    constructor(model) {
        this.model = model;
    }
    forEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const obj = yield this.model.findOne({ email }).exec();
            if (obj) {
                const error = new Error_1.default("The email already in use", 400);
                throw new Error(error.string());
            }
        });
    }
    forName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const obj = yield this.model.findOne({ name }).exec();
            if (obj) {
                const error = new Error_1.default("The name already in use", 400);
                throw new Error(error.string());
            }
        });
    }
    forNameInUser(name, user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const obj = yield this.model.findOne({ name, user_id }).exec();
            if (obj) {
                const error = new Error_1.default("The name already in use", 400);
                throw new Error(error.string());
            }
        });
    }
}
exports.default = Unique;
