var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 8000;
app.use(bodyParser.json({extended: true}));

// Challenge 1 starts here
app.post('/verify', function(req, res){
  let userState = req.body.state;
  if(userState !== "AZ"){
    res.sendStatus(400);
  } else{
    res.json(req.body);
  }
}); // Challenge 1 ends here

// Challenge 2 starts here
app.post('/calculate', function(req, res){
  var operation = req.body.operation;
  var valueOne = req.body.numOne;
  var valueTwo = req.body.numTwo;
  var result = 0;
    if(operation === "add"){
      result = valueOne + valueTwo;
      res.json("Result: " + result);
    } else if(operation === "multiply"){
      result = valueOne * valueTwo;
      res.json("Result: " + result);
    } else if(operation === "substract"){
      result = valueOne - valueTwo;
      res.json("Result: " + result);
    } else if(operation === "divide"){
      result = valueOne / valueTwo;
      res.json("Result: " + result);
    } else{
      res.json("Error! Try again...")
    }

}); // Challenge 2 ends here

// Challenge 3 starts here
app.post('/students', function(req, res){
  var tClass = req.body.class;
  var objLength = req.body.students.length;
  var sObject = [];

  for(let i = 0; i < objLength; i++){
    if(req.body.students[i].class === tClass){
      sObject.push(req.body.students[i]);
    }
  } // for loop ends here

  var newObject = {
    "teacher": req.body.teacher,
    "class": req.body.class,
    "students": sObject
  }
  res.json(newObject);

}); // Challenge 3 ends here

app.use(function(req, res){
  res.sendStatus(404);
});

app.listen(port, function(){
  console.log("^!^ I am good!");
});
