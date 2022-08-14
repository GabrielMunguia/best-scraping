"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductAmazon = void 0;
const getDataProductAmazon_1 = require("../utils/getDataProductAmazon");
const getProductAmazon = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { url } = req.body;
        const product = yield (0, getDataProductAmazon_1.getDataProductAmazon)(url);
        res.json(product);
    }
    catch (error) {
        return res.status(500).json({
            status: false,
            message: 'UPS'
        });
    }
});
exports.getProductAmazon = getProductAmazon;
//# sourceMappingURL=amazon.js.map