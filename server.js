const express = require("express")
const app = express();
require("./db/config")
const Movies = require("./db/movies")
const cors = require("cors")

app.use(express.json())
app.use(cors())


app.post("/movies",async(req,res)=>{
    let result = await Movies(req.body)
    result = await result.save();
    res.send(result)
})

app.get("/movies",async(req,res)=>{
    let result = await Movies.find({})
      res.send(result)
})


app.listen(5000,()=>{
    console.log("listning on port 5000")
})