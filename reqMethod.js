

let http=require("http")
const { parse } = require("path")
let url=require("url")

http.createServer((req,res)=>{
    let parsed=url.parse(req.url,true)
          console.log(req.method)
    if(parsed.pathname ==="/login" && req.method =="GET"){
        
        console.log(parsed)
        res.write("this is the login page")
        res.end()
    }
    else if(parsed.pathname ==="/register" && req.method =="POST"){
        console.log(req.url)
        res.write(JSON.stringify([{"name":"saiganesh","place":"hyderabad"}]))
        res.end()
    }
    else{
        res.write(" no pathname is mentioned")
        res.end() 
    }
}).listen(3005,()=>{
  console.log("server is running in port")
})