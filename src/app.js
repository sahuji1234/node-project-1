const express = require('express');
const bodyParser= require('body-parser');
const hbs = require('hbs');

const routes = require('./routes/main');
const mongoose=require('mongoose');
const Detail = require('./models/Detail');
const Slider= require("./models/slider")
const Service = require('./models/Service');
const { urlencoded } = require('express');

const app= express();

app.use(bodyParser.urlencoded({extended:true}))
app.use('/',routes)

//db connection
mongoose.connect("mongodb://localhost/website_node",()=>{
    console.log("db connected")

// Service.create([
//     {
//         icon:"fa-solid fa-face-smile",
//         title:"Provide best courses",
//         description:"We provide best courses that help students training and placements",
//         linkText:"check",
//         link:"support"
//     },
//     {
//         icon:"fa-solid fa-cloud",
//         title:"Provide best courses",
//         description:"We provide best courses that help students training and placements",
//         linkText:"check",
//         link:"support"
//     },
//     {
//         icon:"fa-solid fa-cloud",
//         title:"Provide best courses",
//         description:"We provide best courses that help students training and placements",
//         linkText:"check",
//         link:"support"
//     },
//     {
//         icon:"fa-solid fa-face-smile",
//         title:"Provide best courses",
//         description:"We provide best courses that help students training and placements",
//         linkText:"check",
//         link:"support"
//     },
//     {
//         icon:"fa-solid fa-cloud",
//         title:"Provide best courses",
//         description:"We provide best courses that help students training and placements",
//         linkText:"check",
//         link:"support"
//     },
//     {
//         icon:"fa-solid fa-face-smile",
//         title:"Provide best courses",
//         description:"We provide best courses that help students training and placements",
//         linkText:"check",
//         link:"support"
//     },
// ])

// Slider.create([
//     {
//         title:'Learn java in very easy manner',
//         subTitle:'java is one of the most popular programming language',
//         imageUrl:"/static/images/s1.jpg"
//     },
//     {
//         title:'Learn java in very easy manner',
//         subTitle:'java is one of the most popular programming language',
//         imageUrl:"/static/images/s2.jpg"
//     },
//     {
//         title:'Learn java in very easy manner',
//         subTitle:'java is one of the most popular programming language',
//         imageUrl:"/static/images/s3.jpg"
//     }
// ])

    // Detail.create({
    //     brandName:"Sahu digital solutions",
    //     brandIconUrl:"https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/face-icon.svg",
    //     links:[
    //         {   label:"Home",
    //         url:"/"
    //         },
    //         {   label:"Services",
    //         url:"/services"
    //         },
    //         {   label:"Gallery",
    //         url:"/gallery"
    //         },
    //         {   label:"About",
    //         url:"/about"
    //         },
    //         {   label:"ContactUs",
    //         url:"/contact-us"
    //         },
        
    // ]
    // })

})
// statis/css/style.css
app.use('/static',express.static("public"))

//(template engine)

app.set('view engine','hbs')
app.set('views','views')

hbs.registerPartials("views/partials")

app.listen(process.env.PORT|5556,()=>{
    console.log("server-started")
})