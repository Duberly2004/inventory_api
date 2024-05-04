import { Model, Document } from "mongoose";
import ErrorType from "./Error";

class Unique<T extends Document> {
  model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  async forEmail(email: string) {
      const obj = await this.model.findOne({ email }).exec();
      if (obj) {
        const error = new ErrorType("The email already in use", 400);
        throw new Error(error.string());
      }
  }
  async forName(name: string) {
    const obj = await this.model.findOne({ name }).exec();
    if (obj) {
      const error = new ErrorType("The name already in use", 400);
      throw new Error(error.string());
    }
}
}

export default Unique;
