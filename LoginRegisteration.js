
// const { error } = require("console")
const express=require("express")
const fs=require("fs")
const api=express()
const cors = require('cors');
api.use(cors());

// const [username,password,email]=
api.use(express.json())
let connection=require("./db.js")

api.post("/register",(req,res)=>{
    // console.log(req.body)

    const {username,password,email,confirmPassword}=req.body
    

    fs.readFile("index.json",(err,data)=>{
        // res.send(data)
        const users=JSON.parse(data)
        console.log(users)
        const foundUser = users.find(user => user.username === username || user.email === email)

        if(foundUser){
            res.send("the user is already exist")
        }
        // else if(password === confirmPassword){
        //     debugger
        //     register.push(req.body)

        //     fs.writeFile("index.json",(JSON.stringify(register,null,2)),(err)=>{
        //         res.json("success register")
        //     })
        // }
        else{
            // debugger
            // res.send("password doesn't match")
            users.push(req.body)

            fs.writeFile("index.json",(JSON.stringify(users,null,2)),(err)=>{
                res.json("success register")
            })
        }

    })

    
        // register=req.body

})



//Login
api.post("/login", (req, res) => {
    const { username, password } = req.body;
    fs.readFile("./index.json", (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
        return;
      }
      const users = JSON.parse(data);
      const foundUser = users.find(user => user.username === username && user.password === password);
  
      if (foundUser) {
        res.send("The user is successfully logged in");
      } else {
        res.send("Invalid login credentials");
      }
    });
  });
  

api.listen(3040,()=>console.log("the port is running succesful"))
























// api.get("/login",(req,res)=>{

//     const {username,password}=req.body
//     fs.readFile("./index.json",(err,data)=>{
//         // console.log(JSON.parse(data));
//         const users=JSON.parse(data)
//         // console.log(users)
//         const foundUser = users.find(user => user.username === username && user.password === password)

// console.log(foundUser);
//     if(foundUser){
//         res.send("the user is successful login")
//     }
//     else{
//         res.send("the user is invalid login")
//     }
//     })

//     // const users=JSON.parse(req.body)
//     // console.log(req.body)
//     // console.log(username)
//     // console.log(password)
// })