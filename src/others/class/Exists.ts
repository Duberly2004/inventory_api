import { Document, Model, ObjectId, Types } from "mongoose";
import ErrorType from "./Error";
class Exists<T extends Document> {
    model: Model<T>;

    constructor(model:Model<T>){
        this.model = model
    }
    async forId(_id:Types.ObjectId,field?:String){
        const obj = await this.model.findById(_id)
        if(!obj){
            const error = new ErrorType(`${field?field:"Dato"} no encontrado`,404) 
            throw new Error(error.string())
        }
        return obj
    }
    async forEmail(email:string,field?:String){
        const obj = await this.model.findOne({email})
        if(!obj){
            const error = new ErrorType(`${field?field:"Dato"} no encontrado`,404) 
            throw new Error(error.string())
        }
        return obj
    }
    async forName(name:string,field?:String){
        const obj = await this.model.findOne({name})
        if(!obj){
            const error = new ErrorType(`${field?field:"Dato"} no encontrado`,404) 
            throw new Error(error.string())
        }
        return obj
    }
}

export default Exists