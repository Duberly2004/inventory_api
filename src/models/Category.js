"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const categorySchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    user_id: {
        type: mongoose_1.Types.ObjectId,
        required: true
    },
    color: {
        type: String,
        default: "#61fa29"
    }
});
exports.default = (0, mongoose_1.model)("Category", categorySchema);
