import { detailProduct, productAmazon } from "../interfaces/amazon";

const pupperter = require("puppeteer");

export const getDataProductAmazon = async (url: string) => {
  try {

    //!generando una instacia de puppeteer
    const browser = await pupperter.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
      
      defaultViewport: {
        width: 1920,
        height: 1080,
        isMobile: false,
        hasTouch: false,
        isLandscape: false,
      },
 
        
    });
    //!generando una nueva pagina
    const page = await browser.newPage();
    await page.goto(url, {
      waitUntil: "load",

      timeout: 0,
    });

    //!pagina del producto
    const data = await page.evaluate(() => {
      const h1 = document.querySelector("#productTitle") as HTMLElement;
      const productDescription = document.querySelector("#productDescription") as HTMLElement;
      const detailProduct: detailProduct[] = [];
      const about: string[] = [];
       
     
     /*
        !--------------  Obtener informacion del producto----------------
    */
     //?valido primero si se trata de un articulo de tecnologia
     const isTechnology = document.querySelector("#productDetails_techSpec_section_1") as HTMLElement;
     const isClothing= document.querySelector("#detailBullets_feature_div") as HTMLElement;
     if(isTechnology){
      let listdetailProduct = document.querySelectorAll("#productDetails_techSpec_section_1 tbody tr" ) as NodeListOf<HTMLElement>;


      listdetailProduct.forEach((tr) => {
        const th = tr.querySelector("th") as HTMLElement;
        const td = tr.querySelector("td") as HTMLElement;
        detailProduct.push({
          name: th.innerText,
          value: td.innerText,
        });
      });

     }else if(isClothing){
       //?valido si es un articulo de ropa
       const detailList = document.querySelectorAll("#detailBullets_feature_div ul li span") as NodeListOf<HTMLElement>;
        detailList.forEach((span) => {
           const lstSubSpan = span.querySelectorAll("span") as NodeListOf<HTMLElement>;
           const name = lstSubSpan[0];
           const value = lstSubSpan[1];
           if(name&& value){
            detailProduct.push({
              name : name.innerText,
              value: value.innerText,
            });
           }
        });

       
     }else{
       //?si no es un articulo de tecnologia obtengo la informacion del producto
       let listdetailProduct = document.querySelectorAll("#productDetails_detailBullets_sections1 tbody tr" ) as NodeListOf<HTMLElement>;


       listdetailProduct.forEach((tr) => {
         const th = tr.querySelector("th") as HTMLElement;
         const td = tr.querySelector("td") as HTMLElement;
         detailProduct.push({
           name: th.innerText,
           value: td.innerText,
         });
       });
     }
     

  

    /*
        !-------------- Obtener la imagen  del producto----------------
    */
      let img = document.querySelector("#main-image-container img") as HTMLImageElement;

      if (!img) {
        img = document.querySelector("#minimalImageBlock img") as HTMLImageElement;
      }

      //obtener acerca del producto
      const liAbout = document.querySelectorAll("#feature-bullets li") as NodeListOf<HTMLElement>;


      liAbout.forEach((li) => {about.push(li.innerText);});


      /*
        !-------------- Seteando los datos----------------
    */

      const data: productAmazon = {
        title: h1?.innerText ?? "",
        description: productDescription?.innerText ?? "",
        price: "",
        image: img?.src || "",
        url: "",
        about: about ?? [],
        category: "",
        detail: detailProduct ?? [],
        
      };

      return data;

    });
    await browser.close();

    return data;
  } catch (error: any) {
    console.log(error.message);
    return {};
  }
};
