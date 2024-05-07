"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const enums_1 = require("../others/enums");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true
    },
    url_avatar: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    is_active: {
        type: Boolean,
        default: true
    },
    Role: {
        type: String,
        default: enums_1.Role.CLIENT
    }
});
exports.default = (0, mongoose_1.model)("User", userSchema);
