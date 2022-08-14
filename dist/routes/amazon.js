"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const amazon_1 = require("../controller/amazon");
const validateFields_1 = require("../middlewares/validateFields");
const validateURL_1 = require("../middlewares/validateURL");
const validateUrlAmazon_1 = require("../middlewares/validateUrlAmazon");
const router = (0, express_1.Router)();
router.post('/', [
    (0, express_validator_1.check)('url').not().isEmpty().withMessage('The url field is required'),
    validateFields_1.validateFields,
    validateURL_1.validateURL,
    validateUrlAmazon_1.validateUrlAmazon
], amazon_1.getProductAmazon);
exports.default = router;
//# sourceMappingURL=amazon.js.map