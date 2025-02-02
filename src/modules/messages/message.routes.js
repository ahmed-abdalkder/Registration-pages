const { Router } = require("express");
const { sendmsg } = require("./message.controler.js");

const messagerouter = Router()


messagerouter.post("/sendmsg/:id", sendmsg)


module.exports = messagerouter