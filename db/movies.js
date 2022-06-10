
const mongoose = require("mongoose")

const moviesSchema = new mongoose.Schema({
    image:{
       type:String,
    unique:true},
    title:{
        type:String,
     unique:true},
    year:String,
    ratings:String
})

module.exports = mongoose.model("movies",moviesSchema);