var express = require('express');
var app = express();

const port = process.env.PORT || 3000;
app.get('/about',function(req,res)
{
    res.send('This is calculator');
});

app.get('/sum',function(req,res)
{
    var valueA = req.query.value1;
    var valueB = req.query.value2;
    //console.log(res.statusCode);
    var sum1 = parseInt(valueA)+parseInt(valueB);
    res.send('Sum of two numbers '+ sum1);
});

app.get('/difference',function(req,res)
{
    var valueA = req.query.value1;
    var valueB = req.query.value2;
    //console.log(res.statusCode);
    var diff = parseInt(valueA)-parseInt(valueB);
    res.send('Difference of two numbers '+ diff);
});

app.get('/multiply',function(req,res)
{
    var valueA = req.query.value1;
    var valueB = req.query.value2;
    //console.log(res.statusCode);
    var multiply = parseInt(valueA)*parseInt(valueB);
    res.send('Multiplication of two numbers '+ multiply);
});

app.get('/divide',function(req,res)
{
    var valueA = req.query.value1;
    var valueB = req.query.value2;
    //console.log(res.statusCode);
    var divide = parseInt(valueA)/parseInt(valueB);
    res.send('Division of two numbers '+ divide);
});


app.listen(port,function()
{
    console.log(`Port number ${port}`);
    var ss = JSON.stringify('name:Prateek,age:30');
    console.log(ss);
});