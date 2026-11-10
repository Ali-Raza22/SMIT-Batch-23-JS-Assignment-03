// Question-13 — Filter Numbers
var numbers = [12, -5, 0, 18, -9, 25, 0, -3, 40];

var positive = []
var negative = []
var zero = []

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    positive.push(numbers[i])

  }
  else if (numbers[i] === 0) {
    negative.push(numbers[i])

  } else if (numbers[i] < 0) {
    zero.push(numbers[i])

  }

}
console.log("positive:", positive);
console.log("negative:", negative);
console.log("zero:", zero);