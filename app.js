const express = require("express");

const app = express()

const correct = true;

app.get("/user", (req,res)=>{
    console.log("this is get data")
    res.send("this is normal data")
    res.status(200).send("this is a get data")
    
   
})

app.post("/user", (req,res)=>{
    console.log("this is post data")
    if(correct === true){
        res.status(200).send("this is a true condition")
    }
    else{
        res.status(404).send("this is a incorrect condition")
    }
    
})

app.use((req,res)=>{
    console.log("hi siva how are");
    res.status(200).json({
        name : "sivaprasad",
        age : 25,
        village : "Agraharam"
    })
})

app.listen(3000, ()=>{
    console.log("server is running at prot 3000")
})