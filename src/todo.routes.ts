import {Router} from "express"
import { Directory } from "./directory.schema"
import {Todo} from "./todo.schema"

const TodoRoutes = Router()

TodoRoutes.post("/list",async(req,res)=>{
    const data=await Todo.find()
    res.status(200).send(data)
})


TodoRoutes.post("/create",async (req,res)=>{
   try{
    const newTodo = new Todo(req.body)
    await newTodo.save()
    res.status(201).send(newTodo)
   }
   catch{
    res.status(500).send({message:"Somthing went Wrong"})
   }  
})


TodoRoutes.post("/move-to-directory",async (req,res)=>{
    try{
     const newTodo = new Directory(req.body)
     await newTodo.save()
     res.status(201).send(newTodo)
    }
    catch{
     res.status(500).send({message:"Somthing went Wrong"})
    }
 })


TodoRoutes.post("/mark-as-done", async (req, res) => {
    
    try{
        const updatedInfo = await Todo.findByIdAndUpdate(
            {_id:req.body._id},
            {...req.body,status:true},
            { new: true }
          );
          res.status(200).send({message:"Todo Updated"});
    }
    catch{
        res.status(500).send({message:"Not Updated"})
    }
  });


  TodoRoutes.post("/mark-as-not-done", async (req, res) => {
    try{
        const updatedInfo = await Todo.findByIdAndUpdate(
            {_id:req.body._id},
            {...req.body,status:false},
            { new: true }
          );
          res.status(200).send({message:"Todo Updated"});
    }
    catch{
        res.status(500).send({message:"Not Updated"})
    }
  });


TodoRoutes.post("/remove", async (req,res)=>{
    const data = await Todo.findByIdAndDelete(req.body._id)
    res.send(data)
})


export default TodoRoutes;