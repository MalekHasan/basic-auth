'use strict'
const express=require("express")
const bcrypt=require("bcrypt")
const basic=require("../middleware/basic")
const userRouter=express.Router()
const {User}=require("../models/index")
userRouter.post("/signup",signup)
userRouter.post("/signin",basic,signin)
async function signup(req,res,next){
try{
    const username=req.body.username;
    const hasedPassword=await bcrypt.hash(req.body.password,10)
    const record=await User.create({
        username:username,
        password:hasedPassword
    })
    res.status(201).json(record);
}catch(e){
console.log(e);
}

}
async function signin(req,res){
try{
    let record =await User.findOne({where:{
        username:req.body.username
    }})
    let isValid=await bcrypt.compare(req.body.password,record.password)
    console.log(record.password);
    if(isValid){
        res.status(200).json(record)
    }
    else{
        res.status(200).send("User is not exist")
    }
}catch(e){console.log(e);}
}
module.exports=userRouter