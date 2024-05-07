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
class Exists {
    constructor(model) {
        this.model = model;
    }
    forId(_id, field) {
        return __awaiter(this, void 0, void 0, function* () {
            const obj = yield this.model.findById(_id);
            if (!obj) {
                const error = new Error_1.default(`${field ? field : "Dato"} no encontrado`, 404);
                throw new Error(error.string());
            }
            return obj;
        });
    }
    forEmail(email, field) {
        return __awaiter(this, void 0, void 0, function* () {
            const obj = yield this.model.findOne({ email });
            if (!obj) {
                const error = new Error_1.default(`${field ? field : "Dato"} no encontrado`, 404);
                throw new Error(error.string());
            }
            return obj;
        });
    }
    forName(name, field) {
        return __awaiter(this, void 0, void 0, function* () {
            const obj = yield this.model.findOne({ name });
            if (!obj) {
                const error = new Error_1.default(`${field ? field : "Dato"} no encontrado`, 404);
                throw new Error(error.string());
            }
            return obj;
        });
    }
}
exports.default = Exists;
