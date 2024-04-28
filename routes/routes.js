const express=require('express')
const {userSignup, userLogin}=require ('../controllers/logic')

const router = new express.Router()

//path for user signup
router.post("/tour/userSignup",userSignup)

//path for user login
router.post("/tour/userLogin",userLogin)


module.exports=router