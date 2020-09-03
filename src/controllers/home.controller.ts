import express, { Request, Response } from "express";
import { IControllerBase } from "../interfaces/IControllerBase.interface";
import { users } from "../mocks/home";

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
    res.json(users);
  };
}

export { HomeController };
