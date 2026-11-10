// Question 11 — Student Name Search

var students = ["Ali", "Ahmed", "Sara", "Hamza", "Ayesha"];
var userName = prompt("Enter Your Name:")
var isMatch = false

for (var i = 0; i < students.length; i++) {
    if (userName == students[i]) {
        alert(`${students[i]} Found!`)
        console.log(i);
        isMatch = true
        break
    }
}

if (isMatch === false) {
    alert("Not Found!")
}