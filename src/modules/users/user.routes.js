const { Router } = require("express");
const { index, login, message, register, user, handelregister, handleLogin,  Logout } = require("./user.controler.js");

const userrouter=Router()

userrouter.get("/index",index)

userrouter.get("/login",login)

userrouter.get("/messages",message)

userrouter.get("/register",register)

userrouter.post("/handleregister",handelregister)

userrouter.post("/handleLogin",handleLogin)

userrouter.get("/user/:id",user)

userrouter.get("/Logout",Logout)

module.exports = userrouter