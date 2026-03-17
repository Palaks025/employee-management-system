const mongoose = require ("mongoose");

const employeeSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true
    },
    email :{
        type:String,
        required : true
    },
    department :{
        type : String
    },
    salary :{
        type : Number,
        required :true
    }
});

module.exports = mongoose.model("Employee",employeeSchema);
//This line creates a model which will perform the database function and whereas schema is 
//for just defining the sturcture of our model

