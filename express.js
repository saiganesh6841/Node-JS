
let express=require("express")
let fs=require("fs")

let api=express()
//midilleware-->three parameters-->request object,response object,next function
api.use(express.json())
// api.use((req,res,next)=>{
//     // res.send("middileware practise")
//     // console.log("hello world")
//     // next()
//     var body=""
//     req.on("data",(chunk)=>{
//         body+=chunk.toString()
//     })

//     req.on("end",()=>{
//         console.log(body)
//         req.body=body
//         next()
//     })
// })

var register=[]
api.get("/users",(req,res)=>{
    
    fs.readFile("index.json",(err,data)=>{
        // console.log(data)
        console.log(req.query)
        res.json(JSON.parse(data))
    })
    // console.log(req.body)
    // res.send("hello express")
})
api.post("/register",(req,res)=>{
    register.push(req.body)
    // res.json(register)
    fs.writeFile("index.json",JSON.stringify(register),(err)=>{
        res.json("success")
    })
})
api.listen(3006,()=>console.log("the port is successfully ruing"))