import { NextFunction, Request, Response } from "express";

export const validateURL=(req:Request,res:Response,next:NextFunction)=>{
 
    const {url} = req.body;
    const regex= /^(ftp|http|https):\/\/[^ "]+$/;
    if(!regex.test(url)){
        return res.status(400).json({
            status:false,
            message:'invalid url'
        })
    }
    next();




}