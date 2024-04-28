const users= require ("../models/users")





//logicc for signup
const userSignup=async(req,res)=>{
    const{uname,email,password,conpassword}=req.body
    if(!uname || !email || !password || !conpassword){
        res.status(400).json("all data are required")
    }
    else{
        try{
           //if already exist
        let preUser=await users.findOne({email})
        if(preUser){
             res.status(400).send('User already exists')
        }
        else{
            let newUser=new users({
                uname:uname,
                email:email,
                password:password,
                conpassword:conpassword

            })
            if(password==conpassword){
                await newUser.save()
                res.status(200).json(newUser)
            }
            else{
                res.status(400).json("passwords do not match")
            }
        }
        }
        catch{
            res.status(400).json("connection error")
        }
    }
}


//logic for login
const userLogin=async (req,res)=>{
    const{email,password}=req.body
    if(!email || !password){
        res.status(400).json("All data are required")}
        else{
           const login=await users.findOne({email,password})
            if(login){
             
                res.status(200).json({
                email:login.email,
                password:login.password,
                
               })
            
            }
            else{
                res.status(400).json("Invalid email or password")
            }
        }
}

module.exports={userSignup,userLogin}