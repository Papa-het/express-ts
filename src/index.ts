import { App } from "./app";
import { loggerMiddleWare } from "./middleware/logger";
import { HomeController } from "./controllers/home.controller";

const app = new App({
  port: 3000,
  controllers: [new HomeController()],
  middleWares: [loggerMiddleWare],
});

app.listen();
