const express = require("express");
const auth = require("../Middleware/auth");

const router = express.Router();

const employeeController = require("../Controller/employeeController");

router.post("/add",auth,employeeController.createEmployee);
router.get("/",auth,employeeController.getEmployees);
router.put("/:id",auth,employeeController.updateEmployee);
router.delete("/:id",auth,employeeController.deleteEmployee);

module.exports=router;