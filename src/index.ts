// console.log("Hello World")
import express, { json } from "express";
import TodoRoutes from "./todo.routes";
import mongooes from "mongoose"
import DiretoryRoutes from "./directory.routes";
const port=8000;

export const app = express()

app.use(express.json())

app.use(express.urlencoded({extended:true}))
app.use("/todo-item",TodoRoutes)
app.use("/directory",DiretoryRoutes)


app.get("/",(req,res)=>{
    res.send("Hello world")
})

app.listen(process.env.PORT || port,async()=>{
    await mongooes.connect(`mongodb+srv://chetan:12345@cluster0.4jf6kcr.mongodb.net/?retryWrites=true&w=majority`)
    console.log(`App start on ${port}`)
})


