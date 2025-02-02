const { messagemodel } = require("../../../db/models/messagemodel.js")


module.exports.sendmsg=async(req,res,next)=>{

    await messagemodel.create({userId:req.params.id,content:req.body.msg})
    
    res.redirect(`/user/${req.params.id}`)
}