const { usermodel } = require("../../../db/models/usermodel.js")

module.exports.index = (req,res,next)=>{

    res.render("index.ejs")
};

module.exports.login = (req,res,next)=>{
    
    const{error} = req.query

    res.render("login.ejs",{error})

};

module.exports.message = async(req,res,next)=>{
    
    if(req.session.loggedIn){

     res.render("messages.ejs",{loggedIn: req.session.loggedIn, session: req.session })

    }else{
        res.redirect("/login")
    }
};

module.exports.register = (req,res,next)=>{

    res.render("register.ejs",{error: req.query.error})
};

module.exports.user = (req,res,next)=>{

    res.render("user.ejs",{loggedIn: req.session.loggedIn,session: req.session})
};

module.exports.handelregister = async(req,res,next)=>{

    const{name, email, password} = req.body

    const user = await usermodel.findOne({email})
    if(user){
       return res.redirect("/register?error=useraleadyexist")
    }
    await usermodel.create({name, email, password})
    
    res.redirect("/login")

};

module.exports.handleLogin = async(req,res,next)=>{

    const{ email,password} = req.body

    const user = await usermodel.findOne({email})

    if(!user || password != user.password){
       return res.redirect("/login?error=usernotexist")
    }

    req.session.userId = user._id
    req.session.name = user.name
    req.session.loggedIn = true
    res.redirect("/messages")

};

module.exports.Logout = async(req,res,next)=>{

    req.session.destroy(function(err) {

        res.redirect("/login")
      })
   
};