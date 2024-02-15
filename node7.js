
let express=require("express")

let app=express()

let conn=require("./db.js")

app.use(express.json());


app.get("/register",(req,res)=>{

    console.log(req.body)
    
    conn.query("insert into emp set ?",req.body,(err,data)=>{
        console.log(data)
        console.log(err)
        res.status(200).json({
            "status":200
        })
        res.send("database has been created")
    })
    
})

app.get("/login", (req, res) => {
    conn.query("SELECT * FROM emp", (err, data) => {
        if (err) {
            res.status(400).json("Error occurred");
        } else {
            res.json(data)
        }
    });
});


app.listen(3020,()=>console.log("the port is running"))