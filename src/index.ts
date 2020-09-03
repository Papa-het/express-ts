import { App } from "./app";
import { loggerMiddleWare } from "./middleware/logger";
import { HomeController } from "./controllers/home.controller";
import { UsersController } from "./controllers/users.controller";

const app = new App({
  port: 3000,
  controllers: [new HomeController(), new UsersController()],
  middleWares: [loggerMiddleWare],
});

app.listen();
