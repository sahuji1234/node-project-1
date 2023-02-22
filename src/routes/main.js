const express= require('express');
const {route} = require('express/lib/application')

const Details= require("../models/Detail")
const Sildes= require("../models/slider")
const Service = require("../models/Service")
const Contact = require("../models/Contact");
const About = require("../models/About");
const Footer = require('../models/Footer');
const { response } = require('express');

const routes = express.Router()
routes.get("/",async (req,res)=>{
    const details = await Details.findOne({"_id":"63f37c3e48373d2b3ce6e428"})
    const slides= await Sildes.find()
    const services = await Service.find()
    const about = await About.find()
    const footer= await Footer.find()
    //console.log(details)
    // res.send("this is message from routes")
    res.render("index",{
        details:details,
        slides:slides,
        services:services,
        about:about,
        footer:footer
    })
})

routes.get("/gallery", async (req,res)=>{
    const details = await Details.findOne({"_id":"63f37c3e48373d2b3ce6e428"})
    // res.send("this is from gallery")
    res.render("gallery",{
        details:details
    })

// process contact form

routes.post("/process-contact-form", async(req,resp)=>{
  //save the data to db
  try{

  const data=  await Contact.create(req.body)
  console.log(data)
  resp.redirect("/")
  }catch(e){
   console.log(e)
   resp.redirect("/")
  }
})
})

module.exports=routes