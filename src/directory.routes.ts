import {Router} from "express"
import { Directory } from "./directory.schema"


const DiretoryRoutes = Router()


DiretoryRoutes.post("/list",async(req,res)=>{
    const data=await Directory.find()
    res.status(200).send(data)
})

DiretoryRoutes.post("/create",async (req,res)=>{
   try{
    const newDirectory = new Directory(req.body)
    await newDirectory.save()
    res.status(201).send(newDirectory)
   }
   catch{
    res.status(500).send({message:"Somthing went Wrong"})
   }
    
})

DiretoryRoutes.post("/remove", async (req,res)=>{
    const data = await Directory.findByIdAndDelete(req.body._id)
    res.send(data)
})


export default DiretoryRoutes;