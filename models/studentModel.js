const mongoose = require("mongoose");
const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    enrollmentNo:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    createdAt:{
        type:String,
        required:true
    },
    updatedAt:Date
});

module.exports=mongoose.model('students',studentSchema);