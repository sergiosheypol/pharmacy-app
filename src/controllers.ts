import {Request, Response} from "express";
import {MongoDb} from "./mongoDb";

export class Controllers {

  private readonly _mongoDb: MongoDb

  constructor(create: MongoDb) {
    this._mongoDb = create
  }

  health = (req: Request, res: Response) => {
    res.status(200)
    res.json({status: "healthy"})
    return
  }

  createDrug = async (req: Request, res: Response) => {
    console.debug(req.body)
    const ok = await this._mongoDb.create(req.body)

    if (ok) {
      res.status(204)
      res.send()
      return
    }

    res.status(500)
    res.json({error: "error inserting"})
    return
  }

  getAll = async (req: Request, res: Response) => {
    const drugs = await this._mongoDb.getAll()
    res.status(200)
    res.json(drugs)
    return
  }
}