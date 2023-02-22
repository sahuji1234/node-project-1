const mongoose= require('mongoose');

const Banners = mongoose.Schema([
 {
    String:{
        "image":String,
        "title":String,
        "description":String,
        "buttonText":String,
        "buttonLink":String
    },
 }
])

module.exports = mongoose.model("banners",Banners)