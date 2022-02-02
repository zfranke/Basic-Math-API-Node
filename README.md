# Basic Math API Node

To run this api, use the following command:

node .

From there, you can send a get request to get instructions for the api and the following options:

Problem Structure: num1 operator num2

/add : Put two numbers (num1, num2) into the req body and get a response with the added result
/subtract: Put two numbers (num1, num2) into the req body and get a response with the subtracted result
/multiply: Put two numbers (num1, num2) into the req body and get a response with the multiplied result
/divide: Put two numbers (num1, num2) into the req body and get a response with the divided result

Example of a req body can be: 

{
    "num1": 3,
    "num2": 6
}
