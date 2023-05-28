const studentModel=require("../models/studentModel");

/////////////////////////////////////////////////////
const getAllStudents= async(req,res)=>{
    try{
const students = await Student.find();
res.status(200).json(students);
    }
    catch(error){
res.status(404).json({message:error.message});
    }
}
////////////////////////////////////////////////////
const createStudents= async(req,res)=>{
    console.log(req.body);
    const student=req.body;
    const newStudent=newStudent(student);
    try{
        await newStudent.save();
        res.status(201).json(newStudent);
    }
    catch(error){
    res.status(409).json({message:error.message});
    }
}
//////////////////////////////////////////////
const getAllStudentbyId= async(req,res)=>{
    const enrollmentNo=req.parems.enrollmentNo;
    try{
const student = await Student.findOne({enrollmentNo:enrollmentNo});
res.status(200).json(student);
    }
    catch(error){
res.status(404).json({message:error.message});
    }
}
///////////////////////////////////////////

const getAllStudentbyPage= async(req,res)=>{
    const page =req.parems.page;
    const limit=3;
    const skip=(page-1)*limit;
    try{
        const students=await Student.find().skip(skip).limit(limit);
        res.status(200).json(students);
    }
catch(error){
    res.status(404).json({message:error.message});
}
    
}
//////////////////////////////////////////////////////



module.exports={
    createStudents,
    getAllStudents,
    getAllStudentbyId,
    getAllStudentbyPage
}