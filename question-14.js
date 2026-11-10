// Question 14 — Remove Duplicate Numbers

var numbers = [10, 20, 10, 30, 20, 40, 30, 50];

var unique = []


for (var i = 0; i < numbers.length; i++) {
    var isMatch = false

    for (var j = 0; j < unique.length; j++) {

        if (numbers[i] === unique[j]) {
            isMatch = true
            break
        }
    }

    if (isMatch === false) {
            unique.push(numbers[i])
        }


}
console.log(unique);
