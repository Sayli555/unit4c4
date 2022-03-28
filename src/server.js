const app=require("./index");

const connect=require("./configue/db");

app.listen(5555,async ()=>{
    try{
        await connect();
        console.log("run 5555")
    }
    catch(err){
        console.log(err.message)
    }
})