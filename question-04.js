// Question-04 — Multiplication Table

var userInput = +prompt("Enter a number")
var tableLength = +prompt("Enter table length.")


for (var i = 1; i <= tableLength; i++) {
    
    console.log(`${userInput} x ${i} = ${userInput * i}`);
    
}