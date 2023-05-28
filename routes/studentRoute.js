const express = require("express");
const studentController = require("../controllers/studentController");
const router = express.Router();

router.post("/",studentController.createStudents);
router.get("/",studentController.getAllStudents);
router.get("/:enrollmentNo",studentController.getAllStudentbyId);
router.get("/pages/:page",studentController.getAllStudentbyPage);

module.exports=router;