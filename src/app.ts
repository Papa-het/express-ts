import express, { Application } from "express";

interface Iterate {
  forEach: (arg0: (iterable: any) => void) => void;
}

class App {
  public port: number;
  public app: Application;

  constructor(init: { port: number; middleWares: any; controllers: any }) {
    this.port = init.port;
    this.app = express();

    this.middlewares(init.middleWares);
    this.routes(init.controllers);
  }

  private middlewares(middleWares: Iterate) {
    middleWares.forEach((middleWare) => {
      this.app.use(middleWare);
    });
  }

  private routes(controllers: Iterate) {
    controllers.forEach((controller) => {
      this.app.use("/", controller.router);
    });
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`app started on the https://localhost:${this.port}`);
    });
  }
}

export { App };
