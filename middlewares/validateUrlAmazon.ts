import { NextFunction, Request, Response } from "express"

export const validateUrlAmazon=(req:Request,res:Response,next:NextFunction)=>{
    const url = req.body;

    // Validar que el url sea de amazon
    if(url.url.indexOf('amazon') === -1){
        return res.status(400).json({
            status:false,
            message:'The url is not from amazon'
        })
    }
    

    next();
}