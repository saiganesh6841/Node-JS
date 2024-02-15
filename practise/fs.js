

let http = require("http");
let url = require("url");
let fs = require("fs");

http.createServer((req, res) => {
    let parsed = url.parse(req.url, true);

    if (parsed.pathname === "/login" && req.method === "POST") {
        
        res.write("The query parameters");
        res.end();

        // fs.readFile("./text.txt", (error, data) => {
        //     if (error) {
        //         res.write(error);
        //         res.end();
        //     } else {
        //         console.log(parsed);
        //         res.write(data);
        //         res.end();
        //     }
        // });
    } else if (parsed.pathname === "/login" && req.method === "GET") {
        
        // console.log(req.url);
        // res.write("File is ");
        // res.end();
        
        let q = parsed.search;
        let b = q.split("&");
        let obj = {};

        b.forEach((val) => {
            let v = val.split("=");
            let [key, value] = v;
            obj[key] = value;
        });

        console.log(obj);
        let jsonString = JSON.stringify(obj);
        fs.writeFile("./textclear.txt", jsonString, (error, data) => {
            if (error) {
                res.write(error);
                res.end();
            } else {
                console.log(data);
                res.write("File is updated");
                res.end();
            }
        });
    } else {
        res.write("No pathname is mentioned");
        res.end();
    }
}).listen(3005, () => {
    console.log("Server is running on port 3005");
});



// let http=require("http")
// const { parse } = require("path")
// let url=require("url")
// let fs=require("fs")

// http.createServer((req,res)=>{
//     let parsed=url.parse(req.url,true)
//           console.log(req.url)
//           console.log(parsed)
//     if(parsed.pathname ==="/login" && req.method =="POST"){
//         res.write("error")
//              res.end()
//         // fs.readFile("./text.txt",(error,data)=>{
//         //     if(error){
//         //         res.write(error)
//         //         res.end()
//         //     }
//         //     else{
//         //         console.log(parsed)
//         //         res.write(data)
//         //         res.end()
//         //     }
//         // })
        
//     }
//     else if(parsed.pathname ==="/login" && req.method =="GET"){
//         console.log(req.url)
//         fs.rename("./text1.txt","textclear.txt",(error,data)=>{
//             if(error){
//                 res.write(error)
//                 res.end()
//             }
//             else{
//                 console.log(parsed)
//                 res.write("file is updated")
//                 res.end()
//             }
//         })
//     }
//     else{
//         res.write(" no pathname is mentioned")
//         res.end() 
//     }
// }).listen(3005,()=>{
//   console.log("server is running in port")
// })