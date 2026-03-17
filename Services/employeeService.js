//This is for writing business logic 

const Employee = require("../DataModels/Employee") //double doubt is to get out of this folder

//This is a function to create new employee
const createEmployee = async (data)=>{
    return await Employee.create(data);
};

//This is a function to fetch employee data
const getEmployees = async()=>{
    return await Employee.find();
};

//This is a function to edit employee data
const updateEmployee = async(id,data)=>{
    return await Employee.findByIdAndUpdate(id,data,{new:true});
}

//This is a function to delete employee data
const deleteEmployee = async(id)=>{
    return await Employee.findByIdAndDelete(id);
};

module.exports = {
    createEmployee,
    updateEmployee,
    getEmployees,
    deleteEmployee
};


