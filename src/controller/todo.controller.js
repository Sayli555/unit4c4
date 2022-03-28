const express=require("express");

const router=express.Router();
const auntheticate=require("../middleweare/auntheticate");


const Todo=require("../models/todo.model");

router.post("",auntheticate,async(req,res)=>{
    req.body.userId=req.userId;

    try{
        const todo=await Todo.create(req.body);

        return res.status(200).send(todo)
    }
    catch(err){
        return res.status(400).send({message:err.message})
    }
});


router.patch("/:id",auntheticate,async(req,res)=>{
    req.body.userId=req.userId;

    try{
        const todo=await Todo.findOneAndUpdate(req.params.id,req.body,{new:true});


        return res.status(200).send(todo)
    }
    catch(err){
        return res.status(400).send({message:err.message})
    }
})


router.delete("/:id",auntheticate,async(req,res)=>{
    req.body.userId=req.userId;

    try{
        const todo=await Todo.findOneAndDelete(req.params.id)
        

        return res.status(200).send(todo)
    }
    catch(err){
        return res.status(400).send({message:err.message})
    }
})

router.get("/:id",auntheticate,async(req,res)=>{
    req.body.userId=req.userId;

    try{
        const todo=await Todo.findById(req.params.id)

        return res.status(200).send(todo)
    }
    catch(err){
        return res.status(400).send({message:err.message})
    }
})





router.get("",auntheticate,async(req,res)=>{
    req.body.userId=req.userId;

    try{
        const todo=await Todo.find()

        return res.status(200).send(todo)
    }
    catch(err){
        return res.status(400).send({message:err.message})
    }
})

module.exports=router;
