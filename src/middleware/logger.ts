import { Request, Response, NextFunction } from "express";

const loggerMiddleWare = (req: Request, res: Response, next: NextFunction) => {
  console.log("Request logged", req.method, req.path);
  next();
};

export { loggerMiddleWare };
