

const express=require("express")
const fs=require("fs")
const app=express()

app.use(express.json())

app.get("/login",(req,res)=>{
    
    fs.writeFile("task1.json",JSON.stringify(req.body),(err)=>{
        console.log(err)
        res.send("it is successfully working")
    })

})

app.listen(3010,()=>console.log("port is listening"))
