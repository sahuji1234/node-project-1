const mongoose = require("mongoose")

const About = mongoose.Schema({
     title:String,
     description:String,
     buttonText:String
})

module.exports = mongoose.model("about",About)