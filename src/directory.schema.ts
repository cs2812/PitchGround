import {Schema , model } from "mongoose"

export type directory={
    todo:string;
    status:boolean;
}

const DirectorySchema= new Schema<directory>({
    todo:String,
    status:Boolean,
})

export const Directory = model("checkDirectory",DirectorySchema)