const path = require ('path')
const dotenv = require('dotenv')
dotenv.config({path:path.resolve('config/.env')})
const express = require('express');
const { connectiondb } = require('./db/connectiondb.js');
const userrouter = require('./src/modules/users/user.routes.js');
var session = require('express-session');
const messagerouter = require('./src/modules/messages/message.routes.js');
var MongoDBStore = require('connect-mongodb-session')(session);

 const app = express()
const port = process.env.PORT
 
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"));

connectiondb()

var store = new MongoDBStore({
    uri: process.env.database_key,
    collection: 'mySessions'
  });
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store
  }))

app.use(userrouter)
app.use(messagerouter)


 app.use("*",(req,res)=>{ res.json("hello world !")})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))