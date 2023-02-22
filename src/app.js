const express = require('express');
const bodyParser= require('body-parser');
const hbs = require('hbs');

const routes = require('./routes/main');
const mongoose=require('mongoose');
const Detail = require('./models/Detail');
const Slider= require("./models/slider")
const Service = require('./models/Service');
const Banners= require('./models/Banners');
const About = require('./models/About');
const Footer= require('./models/Footer');
const { urlencoded } = require('express');

const app= express();

app.use(bodyParser.urlencoded({extended:true}))
app.use('/',routes)

//db connection
mongoose.connect("mongodb://localhost/website_node",()=>{
    console.log("db connected")

    // Footer.create([
    //      { "footer":"  @2023 Copyright: SahuDigitalSolutions"}
    // ])

    //    About.create([
    //     {
    //         "title":"About us",
    //         "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, dolores recusandae accusantium voluptatem, dolore pariatur eos nesciunt excepturi perspiciatis dignissimos architecto. Consequuntur dolorem voluptate perspiciatis excepturi veniam obcaecati, minima non vero quaerat nihil aspernatur dicta sunt vitae error tempora architecto delectus? Repellendus sunt optio enim dolor, cumque labore error perspiciatis iste tempore sed recusandae harum nam rem quos alias. Nostrum neque consequatur perspiciatis dolore praesentium. Iure voluptates, nobis qui asperiores quam blanditiis sint! Perspiciatis accusantium obcaecati mollitia temporibus at eum nihil. Quae dolorum autem voluptatum. Recusandae aperiam officiis totam perferendis voluptate accusamus, mollitia placeat culpa amet quas unde vero fuga vitae fugit repudiandae provident. Laboriosam nobis, inventore sequi quis molestias aliquam, iure animi labore quaerat, corrupti dignissimos sed voluptatum aut culpa ab tempore! Magnam aspernatur similique omnis natus sed modi distinctio. Deleniti enim totam aliquam maiores, incidunt inventore, necessitatibus repudiandae dicta accusamus dolores sapiente et odit molestiae nemo perspiciatis neque?",
    //         "buttonText":"start"
    //     }
    //    ])

    // Banners.create([
    //     {
    //         "banner1":{
    //             "image":"",
    //             "title":"Start learning new technologies",
    //             "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores blanditiis maxime debitis earum illum temporibus aliquam, similique sit totam ipsum hic eligendi officia eveniet aliquid autem voluptatum eaque est ab.",
    //             "buttonText":"start learning",
    //             "buttonLink":""
    //         },
    //         "banner2":{
    //             "image":"/static/images/bg1.jpg",
    //             "title":"we work for people, not for money",
    //             "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, culpa debitis corrupti maxime repellendus officia ipsam est magni, tempore iure laborum vero perferendis? Officia dicta quas corrupti inventore rem, doloribus repellat quisquam, earum veniam distinctio doloremque modi omnis nihil sed assumenda, ea optio recusandae consequatur maiores maxime repellendus dolore nesciunt voluptatem voluptatibus! Quibusdam, tenetur. Nemo placeat architecto, enim molestias quibusdam unde, laboriosam commodi numquam totam exercitationem officiis, esse saepe quae voluptas quos! Libero, distinctio dolores rem neque ea eveniet unde vero! Ducimus vel, a deleniti ipsa excepturi placeat. Deserunt, ipsum! Est ex amet excepturi esse porro repellat placeat reprehenderit corporis.",
    //             "buttonText":"start learning",
    //             "buttonLink":""
    //         },
    //         "banner3":{
    //             "image":"/static/images/bg1.jpg",
    //             "title":"we work for people, not for money",
    //             "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, culpa debitis corrupti maxime repellendus officia ipsam est magni, tempore iure laborum vero perferendis? Officia dicta quas corrupti inventore rem, doloribus repellat quisquam, earum veniam distinctio doloremque modi omnis nihil sed assumenda, ea optio recusandae consequatur maiores maxime repellendus dolore nesciunt voluptatem voluptatibus! Quibusdam, tenetur. Nemo placeat architecto, enim molestias quibusdam unde, laboriosam commodi numquam totam exercitationem officiis, esse saepe quae voluptas quos! Libero, distinctio dolores rem neque ea eveniet unde vero! Ducimus vel, a deleniti ipsa excepturi placeat. Deserunt, ipsum! Est ex amet excepturi esse porro repellat placeat reprehenderit corporis.",
    //             "buttonText":"start learning",
    //             "buttonLink":""
    //         },
    //     }
    // ])

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