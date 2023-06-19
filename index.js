'use strict'
require('dotenv').config();
const server=require("./src/server")
const {db}=require("./src/auth/models/index")
const port=process.env.PORT || 4000;

db.sync().then(()=>{
   server.start(port);
})


