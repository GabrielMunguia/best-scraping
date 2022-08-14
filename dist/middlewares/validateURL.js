"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateURL = void 0;
const validateURL = (req, res, next) => {
    const { url } = req.body;
    const regex = /^(ftp|http|https):\/\/[^ "]+$/;
    if (!regex.test(url)) {
        return res.status(400).json({
            status: false,
            message: 'invalid url'
        });
    }
    next();
};
exports.validateURL = validateURL;
//# sourceMappingURL=validateURL.js.map