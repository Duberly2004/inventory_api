"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const uuid_1 = require("uuid");
const orderSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    uuid: {
        type: String,
        default: (0, uuid_1.v4)()
    },
    payment_method: {
        type: String
    },
    total: {
        type: String
    },
    product_detail: {
        type: Object,
        required: true
    },
    user_id: {
        type: mongoose_1.Types.ObjectId,
        required: true
    }
});
exports.default = (0, mongoose_1.model)("Order", orderSchema);
