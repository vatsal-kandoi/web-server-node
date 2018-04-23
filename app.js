// for more info expressjs.com

const ejs=require('ejs');
const express=require('express');
var app=express();

//use express middleware by adding app.use(funtion(req,res,next))
//used liked building blocks

app.use(express.static('/public'));
app.set('view engine','ejs');

app.get('/',function(req,res){
  res.render('home.ejs');
});

app.listen(8080);
