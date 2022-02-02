const express = require('express');
const app = express();

const multer = require('multer');
const PORT = 3145;

app.use(express.json())

app.listen(
    PORT,
    () => console.log(`Math API Online @: http://localhost:${PORT}`)
)

//Get request to pull up a form that can send a problem type and two numbers as a post request
app.get('/', (req, res, next) => {
  res.send(` 
    <h1>Basic Math API Online</h1>
    <p>Written by Zach Franke</p>
    <h2>Enter two numbers and the type of basic math you want to do</h2>
    <form method="POST" action="/problemHandler" enctype="multipart/form-data">
    <input type="text" name="num1" id="num1" placeholder="Number 1">
    <input type="text" name="num2" id="num2" placeholder="Number 2">
    <select name="problem" id="problem">
                <option value="add">Addition</option>
                <option value="subtract">Subtraction</option>
                <option value="multiply">Multiplication</option>
                <option value="divide">Division</option>
    <input type="submit">
</form>`);
});

//Post request to handle the problem type and two numbers
app.post('/problemHandler', multer().none(), function (req, res, next) {
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    let problem = req.body.problem;
    let answer = 0;
    if (problem == "add") {
        answer = parseInt(num1) + parseInt(num2);
    }
    else if (problem == "subtract") {
        answer = parseInt(num1) - parseInt(num2);
    }
    else if (problem == "multiply") {
        answer = parseInt(num1) * parseInt(num2);
    }
    else if (problem == "divide") {
        answer = parseInt(num1) / parseInt(num2);
    }
    else {
        answer = "Invalid problem type";
    }
    res.send(`
        <h1>Basic Math API Online</h1>
        <h3>Result</h3>
        <p>${answer}</p>
        <input type="button" value="Back" onclick="history.back()">
        `);
    
});





