const express = require('express')
const router = express.Router()
const userController = require("../controllers/User.controller")
const otpController = require("../controllers/Otp.controller")
const {authUserMiddleWare} = require('../middleware/AuthMiddleWare')

router.post('/send-otp' ,  otpController.sendOtp)   
router.post('/verify-otp' ,  otpController.verifyOtp) 
router.post('/signUpPhone', userController.signUpPhone)
router.post('/signUpEmail', userController.signUpEmail)
router.post('/signIn', userController.signIn)
router.get('/getUser/:id', authUserMiddleWare, userController.getDetailUser)
router.put('/edit-user/:id', authUserMiddleWare, userController.editUser)
router.put('/change-password/:id', authUserMiddleWare, userController.changePassword)
router.post('/forget-password', userController.forgetPassword)
router.post('/delete-user/:id', authUserMiddleWare, userController.deleteUser)
router.post('/add-address/:id', authUserMiddleWare, userController.addAddress)
router.post('/:id/set-address-default/:address_id', authUserMiddleWare, userController.setAddressDefault)
router.post('/sign-out' ,  userController.signOut)  
router.post('/refresh-token' ,  userController.refreshToken) 
module.exports = router