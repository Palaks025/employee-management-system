const mongoose = require("mongoose");

const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        
        console.log("Mongoose Connected");
    }catch(error){
        console.log("Could not connect DB",error);

        process.exit(1); // This will immediately stop the server kyuki if db not connected then what is the point no
    }
};

module.exports = connectDB;