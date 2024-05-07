"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const validateShema = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        next();
    }
    catch (error) {
        if (error instanceof zod_1.ZodError) {
            return res
                .status(400)
                .json({ errors: error.errors.map((error) => error.message) });
        }
        else {
            return res.sendStatus(500);
        }
    }
};
exports.default = validateShema;
