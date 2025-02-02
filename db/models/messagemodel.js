const { default: mongoose, Types } = require("mongoose");
 

const messageschema=new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    userId:{
        type:Types.ObjectId,
        ref:"user",
    },
     
},{
    timestamps: true,
    versionKey: false
})
const messagemodel = mongoose.model("message", messageschema)
module.exports = messagemodel
 