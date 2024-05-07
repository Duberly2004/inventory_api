"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorType {
    constructor(message, statusCode) {
        this.message = message;
        this.statusCode = statusCode;
    }
    string() {
        return JSON.stringify({ message: this.message, statusCode: this.statusCode });
    }
    json() {
        return JSON.parse(this.string());
    }
}
exports.default = ErrorType;
