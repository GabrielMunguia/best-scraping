import { Request, Response } from "express"
import { productAmazon } from "../interfaces/amazon";

import { getDataProductAmazon } from "../utils/getDataProductAmazon";
export const getProductAmazon=async (req:Request,res:Response)=>{
    try {
        const {url} = req.body;
        const product= await getDataProductAmazon(url);
        res.json(product);
        
    } catch (error) {
        return res.status(500).json({
            status:false,
            message:'UPS'
        })
    }
}
