const mongoose=require("mongoose");
const userSchema= new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {type:String,unique:true,required:true},
    phone: String
})

module.exports=mongoose.model("users",userSchema);