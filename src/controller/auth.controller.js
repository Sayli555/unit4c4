const User=require("../models/user.model");

const jwt = require('jsonwebtoken');

const newToken=(user)=>{
  return jwt.sign({ user }, process.env.SECRET_KEY);
}

const register=async(req,res)=>{
    try{
        let user=await User.findOne({email:req.body.email});
        if(user){
            return res.status(400).send({message:"Email already exist"})
        }

        user=await User.create(req.body);
        const token=newToken(user)

        return res.status(200).send({user,token})
    }
    catch(err){
        res.status(400).send({message:err.message})
    }
}


const login=async(req,res)=>{
    try{
        const user=await User.findOne({email:req.body.email});
        console.log("user", user)

        if(!user){
            return res.status(400).send("Wrong email or password1")
        }

        const match=user.checkPassword(req.body.password);
        console.log(match)

        if(!match){
            return res.status(400).send("Wrong email or password2")
        }

        const token =newToken(user);

        return res.status(200).send({user,token})
    }
    catch(err){
        res.status(400).send({message:err.message})
    }
}

module.exports={register,login}