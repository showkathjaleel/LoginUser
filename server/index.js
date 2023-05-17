const express= require("express");
const bodyParser = require ("body-parser")
const cors=require('cors')
const mongoose= require('mongoose')
const User=require('./models/User')
const jwt=require("jsonwebtoken")

 mongoose.connect("mongodb://localhost:27017/loginApp", { useNewUrlParser: true }).then(()=>{
        console.log('MongoDB connected');
     })
     

const app=express()
app.use(bodyParser.json())
app.use(cors())
const maxAge = 3 * 224 * 60 * 60
function generateAccessToken (userId) {
    return jwt.sign({ id: userId }, "hi", {
      expiresIn: maxAge
    })
  }

app.post('/login',async (req,res)=>{
    console.log(req.body,'bodyyyy')
    const {
        email,
        password
      } = req.body

      const newUser = new User({     
        email,
        password
      })
      // save user and respond
    //   console.log(newUser)
      const accessToken = generateAccessToken(newUser._id)
      const user = newUser.save()
      res.status(200).json(accessToken)
})





app.listen(4000, ()=>{
    console.log("server is listening at 4000")
})