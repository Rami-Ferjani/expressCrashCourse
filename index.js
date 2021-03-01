const express=require('express')
const path=require('path');
const { nextTick } = require('process');
const app=express();
const members=require('./Members')
const moment=require('./Members')
const logger=(req,res,next)=> {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}

//Init middleware
app.use(logger);
app.get('/api/members',(req,res)=>{
res.json(members)
})
//set static folder
app.use(express.static(path.join(__dirname,'public')));
const PORT=process.env.PORT || 5000;
app.listen(PORT,(req,res)=>console.log(`Server Started on ${PORT}`));