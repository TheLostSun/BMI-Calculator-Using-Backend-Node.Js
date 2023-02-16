const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res)
{
    var height=Number(req.body.height)/100;
    var weight=Number(req.body.weight);
    var bmi=weight/(height*height);
    res.send("Your BMI is "+bmi);
});


app.listen(4400,function(){console.log("Server is running on 4400");});
