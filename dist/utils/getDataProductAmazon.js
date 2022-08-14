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
exports.getDataProductAmazon = void 0;
const pupperter = require("puppeteer");
const getDataProductAmazon = (url) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const browser = yield pupperter.launch({
            headless: true,
            args: ["--no-sandbox", "--disable-setuid-sandbox", "--lang=en-US,en"],
            defaultViewport: {
                width: 1920,
                height: 1080,
                isMobile: false,
                hasTouch: false,
                isLandscape: false,
            },
        });
        const page = yield browser.newPage();
        yield page.goto(url, {
            waitUntil: "load",
            timeout: 0,
        });
        //pagina del producto
        const data = yield page.evaluate(() => {
            var _a, _b;
            const h1 = document.querySelector("#productTitle");
            const productDescription = document.querySelector("#productDescription");
            const detailProduct = [];
            const about = [];
            // Obtener informacion del producto
            //valido primero si se trata de un articulo de tecnologia
            const isTechnology = document.querySelector("#productDetails_techSpec_section_1");
            const isClothing = document.querySelector("#detailBullets_feature_div");
            if (isTechnology) {
                let listdetailProduct = document.querySelectorAll("#productDetails_techSpec_section_1 tbody tr");
                listdetailProduct.forEach((tr) => {
                    const th = tr.querySelector("th");
                    const td = tr.querySelector("td");
                    detailProduct.push({
                        name: th.innerText,
                        value: td.innerText,
                    });
                });
            }
            else if (isClothing) {
                //valido si es un articulo de ropa
                const detailList = document.querySelectorAll("#detailBullets_feature_div ul li span");
                detailList.forEach((span) => {
                    const lstSubSpan = span.querySelectorAll("span");
                    const name = lstSubSpan[0];
                    const value = lstSubSpan[1];
                    if (name && value) {
                        detailProduct.push({
                            name: name.innerText,
                            value: value.innerText,
                        });
                    }
                });
            }
            else {
                //si no es un articulo de tecnologia obtengo la informacion del producto
                let listdetailProduct = document.querySelectorAll("#productDetails_detailBullets_sections1 tbody tr");
                listdetailProduct.forEach((tr) => {
                    const th = tr.querySelector("th");
                    const td = tr.querySelector("td");
                    detailProduct.push({
                        name: th.innerText,
                        value: td.innerText,
                    });
                });
            }
            //Obtener la imagen  del producto
            let img = document.querySelector("#main-image-container img");
            if (!img) {
                img = document.querySelector("#minimalImageBlock img");
            }
            //obtener acerca del producto
            const liAbout = document.querySelectorAll("#feature-bullets li");
            liAbout.forEach((li) => { about.push(li.innerText); });
            //seteando los datos del producto
            const data = {
                title: (_a = h1 === null || h1 === void 0 ? void 0 : h1.innerText) !== null && _a !== void 0 ? _a : "",
                description: (_b = productDescription === null || productDescription === void 0 ? void 0 : productDescription.innerText) !== null && _b !== void 0 ? _b : "",
                price: "",
                image: (img === null || img === void 0 ? void 0 : img.src) || "",
                url: "",
                about: about !== null && about !== void 0 ? about : [],
                category: "",
                detail: detailProduct !== null && detailProduct !== void 0 ? detailProduct : [],
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
exports.getDataProductAmazon = getDataProductAmazon;
//# sourceMappingURL=getDataProductAmazon.js.map