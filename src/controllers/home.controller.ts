import express, { Request, Response } from "express";
import { IControllerBase } from "../interfaces/IControllerBase.interface";

class HomeController implements IControllerBase {
  public path = "/";
  public router = express.Router();

  constructor() {
    this.initRoutes();
  }

  public initRoutes() {
    this.router.get("/", this.index);
  }

  index = (req: Request, res: Response) => {
    console.log(req.query);
    res.json("Home page");
  };
}

export { HomeController };
