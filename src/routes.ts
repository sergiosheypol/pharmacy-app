import {Express} from "express";
import {Controllers} from "./controllers";

export const setupRoutes = (app: Express, controllers: Controllers) => {
  app.post('/catalog', controllers.createDrug)
  app.get('/health', controllers.health)
  app.get('/catalog', controllers.getAll)
}