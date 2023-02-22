import {Db} from "mongodb";
import {Drug} from "./drugModel";

export class MongoDb {
  private static readonly COLLECTION_NAME = "demo-collection"

  private db: Db;

  constructor(db: Db) {
    this.db = db
  }

  async create(obj: any): Promise<boolean> {
    const res = await this.db.collection(MongoDb.COLLECTION_NAME).insertOne(obj)
    return res.acknowledged
  }

  async getAll(): Promise<Drug[]> {
    const drugs: Drug[] = []

    await this.db.collection(MongoDb.COLLECTION_NAME).find().forEach(drug => {
      drugs.push(new Drug(drug._id.toHexString(), drug.name, drug.price, drug.maxDosesPerDay, drug.isAvailable))
    })

    return drugs
  }
}