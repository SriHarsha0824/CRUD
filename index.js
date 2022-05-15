const express= require("express")
const app=express();
const cors=require("cors")
const mysql=require("mysql")
const bodyParser= require("body-parser")
const port=process.env.PORT||2005

const connection=mysql.createConnection({
   host :"localhost",
   user:"root",
   password:"root",
   database:"student_schema"
})

connection.connect(err=>{
    if(err)
        console.log(err)
    else
        console.log("Connection established with database")
})

app.use(bodyParser.urlencoded({
    extended:true
}))

app.use(bodyParser.json())

app.use(cors())

//routes
app.get("/",(req,res)=>{
    res.send("Working")
})

app.get("/retrieve",(req,res)=>{
    connection.query("select * from student",(err,result)=>{
        if(err)
            console.log(err)
        else{
            return res.json(result)
        }
    })
})

app.post("/add",(req,res)=>{
    const {name,age,address,gender,mobile_number}=req.body
    console.log(req.body);
    connection.query(`insert into student(name,age,address,gender,mobile_number) values("${name}",${age},"${address}","${gender}","${mobile_number}")`
    ,(err,result)=>{
        if(err)
            console.log("Error")
        else
            res.send("Data inserted successfully")
    })
})

app.delete("/delete/:id",(req,res)=>{
    const id=req.params.id;
    console.log("delete operations id",id);
    connection.query(`delete from student where id=${id}`,(err,result)=>{
        if(err)
            console.log(err)
        else{
           return res.send("deleted successfully")
        }
    })
})


app.listen(port,()=>console.log(`Server is running on port ${port}`))