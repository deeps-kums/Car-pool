const express = require('express');//importing express
const router=express.Router();
const mongoose =require('mongoose');
const axios=require('axios');

const usermodel=require('../models/usermodel');

router.get('/',function(req,res){
	res.send("User Home").status(200);
});

router.post('/',function(req,res){
	const newuser=new usermodel({
  	_id:new mongoose.Types.ObjectId(),//generating new object id
  	name:req.body.name,
  	email:req.body.email,
    password:req.body.password,
    phoneno:req.body.phoneno
  });
	newuser.save(function(err,newEntry){
        if(err){
            console.log(err);
            res.json(err).status(400);
        }
        else{
            res.json(newEntry).status(201);
        }
    });

});

	module.exports = router;