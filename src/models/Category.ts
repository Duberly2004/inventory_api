import { Schema, model,Document ,Types} from "mongoose";
import { ICategory } from "../others/interfaces";
export interface Category extends ICategory,Document {}
const categorySchema = new Schema({
    name:{
        type:String,
        required:true
    },
    user_id:{
        type:Types.ObjectId,
        required:true
    },
    color:{
        type:String,
        default:"#61fa29"
    }
})
export default model<Category>("Category",categorySchema)