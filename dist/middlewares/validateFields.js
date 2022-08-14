"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateFields = void 0;
const express_validator_1 = require("express-validator");
const validateFields = (req, res, next) => {
    const mistake = (0, express_validator_1.validationResult)(req);
    if (!mistake.isEmpty()) {
        return res.status(400).json(mistake);
    }
    next();
};
exports.validateFields = validateFields;
//# sourceMappingURL=validateFields.js.map