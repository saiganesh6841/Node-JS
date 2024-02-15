
let http=require("http")
let fs=require("fs")

http.createServer((req,res)=>{
    var body=""

    req.on("data",(chunk)=>{
        body+=chunk.toString()
    })
    req.on("end",()=>{
        console.log("hello")
        // console.log(body)
        req.body=body
        const a=JSON.parse(req.body)
        var sum=0
        // console.log(req.body)
for(i=0;i<a.length;i++){
    // console.log(a.age[i])
  sum=sum+a[i].age
}
console.log(sum)
// res.write(`the sum of ages is: ${sum}`)
// res.end()
fs.writeFile("textclear.txt",String(sum),(err)=>{
    res.write(`the sum of ages is: ${sum}`)
    res.end()
})

    })
    // console.log(req.body)
    

}).listen(3008,()=>console.log("the port is successfully ruing"))