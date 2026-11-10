// Question-05 — Sum of Natural Numbers

var userInput = Number(prompt("Enter Positive integer."))
var num = 0

if (isNaN(userInput) || userInput < 0 ) {
    console.log("Invalid Value");

} else {
    for (var i = 1; i <= userInput; i++) {
        num += i
    }
    console.log(`N = ${userInput}`);
    console.log(`Sum = ${num}`);

}
