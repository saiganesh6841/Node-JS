
// // var a=10
// // console.log(a)

// // var {hell}=require("./export.js");
// // var mat=hell
// // console.log(mat)

// var http=require("http")
// // var data=require("./text.txt")

// http.createServer((req,res)=>{
//     res.write(JSON.stringify({"name":"sai"}))
//     res.end()
// }).listen(3005,()=>console.log("server is working"))

let express=require("express")

let app=express()
app.use(express.json())

app.post("/total",(req,res)=>{
    const {a,b}=req.body

    const sum=a+b

    res.json({"total":sum})
})

app.listen(3009,()=>console.log("the port is running"))