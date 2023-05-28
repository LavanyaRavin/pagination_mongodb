const express = require("express");
require("dotenv").config();
const app=express();
const mongoose=require("mongoose");
app.use(express.json());

const studentRoute = require("./routes/studentRoute")
app.use("/student", studentRoute);

mongoose.connect(process.env.DATABASE_URL)
const database=mongoose.connection;
database.on('error',(error)=>console.error(error));
database.once('open',()=>console.log("connected to database"));


const port=process.env.PORT;

app.listen(port,(req,res)=>{
    console.log(`server is running on port ${port}`);
})