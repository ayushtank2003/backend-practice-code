const express =require('express');
const app=express();

const port=8080;
const path=require('path');

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname +'/view/index.html'));
});

app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname +'/view/about.html'));
});

app.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname +'/view/contact.html'));
});

app.listen(port,()=>{
    console.log("server started");
})