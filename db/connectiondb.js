
const { default: mongoose } = require("mongoose");

 

module.exports.connectiondb=()=>{

     mongoose.connect(process.env.database_key)
    .then(()=>{
        console.log("connection database");
        
    }).catch((err)=>{

        console.log({msg:"error",err});
        
    })
}
 