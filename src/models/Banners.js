const mongoose= require('mongoose');

const Banners = mongoose.Schema([
 {
    banner1:[{
        image:String,
        title: String,
        description:String,
        buttonText:String,
        buttonLink:String
    },
    ],
    banner2:[{
        image:String,
        title: String,
        description:String,
        buttonText:String,
        buttonLink:String
    },
    ],
    banner3:[{
        image:String,
        title: String,
        description:String,
        buttonText:String,
        buttonLink:String
    },
    ],
    
 }
])

module.exports = mongoose.model("banners",Banners)