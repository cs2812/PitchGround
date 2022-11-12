
import {Schema , model } from "mongoose"

export type todo={
    todo:string;
    status:boolean;
}

const TodoSchema= new Schema<todo>({
    todo:String,
    status:Boolean,
})

export const Todo = model("checkTodo",TodoSchema)