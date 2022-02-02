const express = require('express');
const app = express();
const PORT = 3142;

app.use(express.json())

app.listen(
    PORT,
    () => console.log(`Math API Online @: http://localhost:${PORT}`)
)

//get request to display a message asking the user to submit a problem via h1
app.get('/', (req, res) => {
    res.send('<h1>Submit a problem</h1> <p>Options:</p> <ui><li>Addition</li><li>Subtraction</li><li>Multiplication</li><li>Division</li></ui>')
});

//post request for addition of two numbers
app.post('/add', (req, res) => {
    const {num1, num2} = req.body;
    const result = num1 + num2;
    res.send(`<h1>${result}</h1>`)
});
