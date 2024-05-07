"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const globalConstants_1 = require("./config/globalConstants");
mongoose_1.default.connect(globalConstants_1.DB_URI);
const conection = mongoose_1.default.connection;
conection.once('open', () => {
    console.log('Database connected');
});
conection.on('error', () => {
    console.log("Error database connect");
    process.exit();
});
