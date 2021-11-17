// const express = require('express')
// const router = express.Router()
const {Router} = require("express")
const {userRouter = require("../modules/users/router");

Router.use("/use" , userRouter);

module.exports = Router

