require("dotenv").config();
const connectDB = require ("./Db/db");
const express = require("express");
const app = express();
const employeeRoutes = require("./Routes/employeeRoutes");
const authRoutes = require("./Routes/authRoutes");

app.use(express.json());

app.use("/api/employees",employeeRoutes);

app.use("/api/user",authRoutes);

connectDB();

app.listen(process.env.PORT,()=>{
    console.log(`Server running on port ${process.env.PORT}`);
});