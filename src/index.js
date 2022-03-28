const express=require("express");
const userController=require("./controller/user.controller");

const {register,login}=require("./controller/auth.controller");
const todoController=require("./controller/todo.controller");

const app=express();
app.use(express.json());
app.use("/user",userController)
app.use("/todo",todoController)

app.post("/register",register);
app.post("/login",login)

module.exports=app