 const express = require('express')

 const userModel = require('../model/user.model')
 const authRouter= express.Router()

 /**
  * API CREATE KARO 

 */

 authRouter.post("/register",(req,res)=>{
    const {email,name, password}= req.body

    const user = userModel.create({
        email,password, name
    })
    res.status(201).json({
        message:"user registered successful",
        user
    })
 })

 module.exports=authRouter