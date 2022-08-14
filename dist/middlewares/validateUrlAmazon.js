"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUrlAmazon = void 0;
const validateUrlAmazon = (req, res, next) => {
    const url = req.body;
    // Validar que el url sea de amazon
    if (url.url.indexOf('amazon') === -1) {
        return res.status(400).json({
            status: false,
            message: 'The url is not from amazon'
        });
    }
    next();
};
exports.validateUrlAmazon = validateUrlAmazon;
//# sourceMappingURL=validateUrlAmazon.js.map