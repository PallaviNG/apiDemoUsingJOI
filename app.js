const express = require("express");
var app = express();

const httpError = require("http-error");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const apiRoutes = require('./app/router/apiRouter');
app.use("/",apiRoutes);

app.use(function(req,res,next){
    next(httpError(404));
});
app.use(function(error,req,res,next){
    res.status(error.status || 500);
    res.send(error);
});

app.listen(3000,function(){
    console.log("Server is running on port 3000");
});