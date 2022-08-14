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
const pupperter = require('puppeteer');
const getProductAmazon = (url) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const browser = yield pupperter.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        const page = yield browser.newPage();
        yield page.goto(url, {
            waitUntil: 'load',
            // Remove the timeout
            timeout: 0
        });
        const data = yield page.evaluate(() => {
            const h1 = document.querySelector('h1');
            const data = {
                title: h1.innerText,
            };
            return data;
        });
        yield browser.close();
        return data;
    }
    catch (error) {
        console.log(error.message);
        return {};
    }
});
exports.getProductAmazon = getProductAmazon;
//# sourceMappingURL=getProductAmazon.js.map