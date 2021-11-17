const { Router } = require('express')
const express = require('express')
const app = express.Router()

const {getUser} = require("./controller");
Router.get("/" , getUser);