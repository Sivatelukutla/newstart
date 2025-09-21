const express = require("express")
const fileData = require("fs")
const app = express()

app.use(express.json())

app.use((req,res,next)=>{
    console.log(
        "this is the use console"
    )
    next()
})

app.get("/api/user",(req,res,next)=>{
    const data = fileData.readFileSync("./dev-data.json", "utf8")
    console.log("get data is applicable")
    const finalData = JSON.parse(data)
    res.status(200).json(finalData)
    next()
})

app.get("/api/user/:userID", (req,res)=>{
    const userID = req.params.userID;
    const data = fileData.readFileSync("./dev-data.json", "utf8")
    const finalData = JSON.parse(data)
    const finalData1 = finalData.find(raw => String(raw.userId) === String(userID));
    if (finalData1) {
        res.status(200).json(finalData1);
    } else {
        res.status(404).json({ message: "User not found" });
    }
})


app.listen(3000, ()=>{
    console.log("this is server is running")
})