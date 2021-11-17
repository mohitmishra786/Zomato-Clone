// const { Router } = require('express')
const express = require('express')
const router = express.Router()

const {getUser} = require("./controller");
Router.get("/" , getUser);