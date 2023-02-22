const mongoose= require('mongoose')

const Footer = mongoose.Schema({
    footer:String
})

module.exports = mongoose.model("footer",Footer)