const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
mongoose.set('strictQuery', true);
const dotenv=require("dotenv");
const userRoutes = require("./routes/userRoutes");
dotenv.config();
mongoose.connect(process.env.URL,()=>console.log("Database Connected"))

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use("/v1/contacts",userRoutes)
app.get("/",(req,res)=>{
    res.send("Working")
})
app.listen(5000,()=>console.log("Server Connected"));
