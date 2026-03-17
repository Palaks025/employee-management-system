const authService = require("../Services/authService");

const register = async(req,res)=>{
    try{
        const user = await authService.registerUser(req.body);
        res.json(user);
    }catch(error){
        res.status(500).json({message:error.message});
    }
};

const login = async (req,res)=>{
    try{
        const token = await authService.loginUser(req.body.email,req.body.password);
        res.json({ token });
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

module.exports={
    register,
    login
};
