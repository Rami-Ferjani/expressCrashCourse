const express=require('express')
const path=require('path');
const { nextTick } = require('process');
const app=express();
var bodyparser=require('body-parser');
const moment=require('moment')
const logger=require('./middleware/logger')

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Body Parser Middleware

app.use(express.json());
app.use(express.urlencoded({ extended : false }));

//members API Routes
app.use('/api/members', require('./routes/api/members'));

const PORT=process.env.PORT || 5000;
app.listen(PORT,(req,res)=>console.log(`Server Started on ${PORT}`));

//Init middleware
//app.use(logger);




