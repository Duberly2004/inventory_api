"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../others/enums");
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        default: enums_1.ProductStatus.Available
    },
    category_id: {
        type: mongoose_1.Types.ObjectId,
        required: true
    }
});
exports.default = (0, mongoose_1.model)("Product", productSchema);
