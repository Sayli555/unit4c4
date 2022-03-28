const mongoose=require("mongoose");
const todoSchema=new mongoose.Schema(
    {
        title:{type:String,require:true},
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
            required:true
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const Todo=mongoose.model("todo",todoSchema);

module.exports=Todo