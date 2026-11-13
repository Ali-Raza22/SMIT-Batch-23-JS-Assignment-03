// // Section E — Real-World Logic Challenges
// Question 19 — Student Result Analyzer

var students = ["Ali", "Sara", "Ahmed", "Ayesha", "Hamza"];
var marks = [78, 92, 45, 88, 33];

var numPass = 0
var largest = marks[0]
var indxnum = 0
var average = 0

for (var i = 0; i < students.length; i++) {
    var isPass = "FAIL"

    if (marks[i] >= 50) {
        isPass = "PASS"
        numPass += 1

    }

    var studentName = students[i]
    var studentmarks = marks[i]

    console.log(`${studentName} - ${studentmarks} - ${isPass}`);

    if (marks[i] > largest) {
        largest = marks[i]

    }

    if (marks[i] === largest) {
        indxnum = i
    }

    average += marks[i]
}

var numFail = marks.length - numPass
var totalStudents = students.length


console.log(`Total Students: ${totalStudents}`);
console.log(`Passed: ${numPass}`);
console.log(`Failed: ${numFail}`);
console.log(`Top Student: ${students[indxnum]} (${largest})`);
console.log(`Class Average: ${average / marks.length}`);



