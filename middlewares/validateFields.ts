import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

export const validateFields = (req:Request, res:Response, next:NextFunction) => {
    const mistake = validationResult(req);
  
    if (!
        mistake.isEmpty()) {
      return res.status(400).json(
        mistake);
    }
  
    next();
  };
  