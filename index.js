const express=require('express')
const path=require('path');
const { nextTick } = require('process');
const app=express();
const members=require('./Members')
const moment=require('moment')
const logger=require('./middleware/logger')

//set static folder
app.use(express.static(path.join(__dirname,'public')));
const PORT=process.env.PORT || 5000;
app.listen(PORT,(req,res)=>console.log(`Server Started on ${PORT}`));

//Init middleware
app.use(logger);

//Gets all Members
app.get('/api/members',(req,res)=>{
res.json(members)
})
//get Single member
app.get('/api/members/:id', (req,res)=> {
    //res.send(req.params.id)
    const found=members.some(member=>member.id === parseInt(req.params.id));
    if(found){
    res.json(members.filter(member=>member.id=== parseInt(req.params.id)))}
    else {
        res.status(400).json({ msg: 'Member not found'});
    }
})
