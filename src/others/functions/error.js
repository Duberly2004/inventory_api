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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMsgZodError = void 0;
function returnError(req, res, error) {
    return __awaiter(this, void 0, void 0, function* () {
        if (error) {
            if (error && error.message) {
                try {
                    const errorJson = JSON.parse(error.message);
                    if (errorJson.statusCode) {
                        return res.status(errorJson.statusCode).json({ error: errorJson.message });
                    }
                }
                catch (e) {
                    return res.sendStatus(500);
                }
            }
            return res.sendStatus(500);
        }
    });
}
exports.default = returnError;
const getMsgZodError = (field) => `El campo [ ${field} ] es requerido`;
exports.getMsgZodError = getMsgZodError;
