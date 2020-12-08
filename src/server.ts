import express, { Application, Request, Response, NextFunction } from "express";
import routes from 'routes'

export default function createServer() {
  const app: Application = express();
  app.get('/', (_: Request, res: Response, __: NextFunction) => {
    res.send('hi')
  })
  app.use(routes)
  return app
}
