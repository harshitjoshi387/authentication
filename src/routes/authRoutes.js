 const express = require('express')

 const userModel = require('../model/user.model')
 const jwt= require('jsonwebtoken')
 const authRouter= express.Router()

 /**
  * API CREATE KARO 

 */


 authRouter.post("/register",(req,res)=>{
    const {email,name, password}= req.body

    const isUserAlreadyExists= userModel.findOne({email})

    if (isUserAlreadyExists){
        return res.status(409).json({
            message:"user already exists with this email address"
        })
    }

    

    const user = userModel.create({
        email,password, name
    })
    const token = jwt.sign(
       {
        id:user._id,
        email:user.email
       }, 
       process.env.JWT_SECRET
    )
    res.status(201).json({
        message:"user registered successful",
        user,
        token
    })
 })

 module.exports=authRouter