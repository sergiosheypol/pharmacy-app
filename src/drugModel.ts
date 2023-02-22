export class Drug {
  _id: string
  name: string
  price: number
  maxDosesPerDay: number
  isAvailable: boolean

  constructor(_id: string, name: string, price: number, maxDosesPerDay: number, isAvailable: boolean) {
    this._id = _id
    this.name = name
    this.price = price
    this.maxDosesPerDay = maxDosesPerDay
    this.isAvailable = isAvailable
  }

}