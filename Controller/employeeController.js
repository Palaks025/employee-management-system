//Controller is to connect http request to service layer

const employeeService = require("../Services/employeeService");

const createEmployee = async (req,res)=>{
    try{
        const employee = await employeeService.createEmployee(req.body);
        res.status(201).json(employee);
    }catch(error){
        res.status(500).json({message : error.message});
    }
};

const getEmployees = async(req,res)=>{
    try{
        const employee = await employeeService.getEmployees();
        res.json(employee);
    }catch(error){
        res.status(500).json({message : error.message});
    }
};

const updateEmployee = async (req,res)=>{
    try{
        const employee = await employeeService.updateEmployee(req.params.id,req.body);

        res.json(employee);
    }catch(error){
        res.status(500).json({message : error.message});
    }
};

const deleteEmployee = async (req,res)=>{
    try{
        const employee = await employeeService.deleteEmployee(req.params.id);
        res.json({message : "Employee Deleted !!"});
    }catch(error){
        res.status(500).json({message : error.message});
    }
};

module.exports={
    getEmployees,
    createEmployee,
    updateEmployee,
    deleteEmployee
};