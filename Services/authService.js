const User = require("../DataModels/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {generateToken} = require("./jwtService");

const registerUser = async (data) => {

    const hashedPassword = await bcrypt.hash(data.password,10);

    const user = await User.create({
        name : data.name,
        email : data.email,
        password : hashedPassword
    });

    return user;
};

const loginUser = async (email,password)=>{

    const user = await User.findOne({email});

    if(!user){
        throw new Error("User not found !!");
    }

    const isMatch = await bcrypt.compare(password,user.password);

    if(!isMatch){
        throw new Error("Password is incorrect");
    }

    const token = generateToken({email:email});

    return token;
};


module.exports = {
    registerUser,
    loginUser
};