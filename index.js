const express = require('express');
const app=express();
const morgan=require('morgan');
const parser=require('body-parser');
const mongoose=require('mongoose');//import the installed package
//const ejs=require('ejs');
const port=3000;


mongoose.connect("mongodb+srv://deeps:Neesa25@cluster0-fun1j.mongodb.net/try?retryWrites=true&w=majority",function(err){
  if(err){
  	console.log(err);
  }
  else
  {
  	console.log("Atlas connected");
  }
});

const user=require('./routes/user');//import user

app.use('*',function(req,res,next){//middleware
     res.set('Access-Control-Allow-Origin','*');//header for CORS error handling when we use XHR request
     res.set('Access-Control-Allow-Headers','content-type');
     res.set('Access-Control-Allow-Methods','POST,PUT,GET,OPTIONS');
	 next();
});

app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({extended:true}));
app.use('/user',user);

app.listen(port,function(){
	console.log(`server listening on ${port}`);
}); 

