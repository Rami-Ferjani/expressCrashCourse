const express=require('express')
const path=require('path');
const app=express();
app.get('/',(req,res)=>{
    /* res.send('<h1>Hello World</h1>'); */
    res.sendFile(path.join(__dirname,'public','index.html'))
})
const PORT=process.env.PORT || 5000;
app.listen(PORT,(req,res)=>console.log(`Server Started on ${PORT}`));