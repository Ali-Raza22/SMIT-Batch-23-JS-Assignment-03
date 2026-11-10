// Question 12 — Find a Number
var numbers = [10, 25, 40, 55, 70, 85, 100];
var userNumber = +prompt("Enter Your Name:")
var isMatch = false

for (var i = 0; i < numbers.length; i++) {
    if (userNumber == numbers[i]) {
        console.log(`Number Found at index: ${i}.`);
        isMatch = true
        break
    }
}

if (isMatch === false) {
    alert("Number Not Found!")
}