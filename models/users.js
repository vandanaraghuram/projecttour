const mongoose=require("mongoose")


//user schema

const userSchema=new mongoose.Schema({
    uname:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        unique:true,
        trim:true,
        required:true

    },
    psw:{
        type:String,
        required:true,
        trim:true
    }
 
})

const users=new mongoose.model('users',userSchema)


module.exports=users
