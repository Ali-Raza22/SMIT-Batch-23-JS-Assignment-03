// Question 09 — Filter Passing Students

var arr1 = [85, 93, 72, 46, 62, 59, 30, 88,]
var arr2 = []
var num = 0

for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] >= 50) {
        num++
        arr2.push(arr1[i])

    }
}

console.log(arr2);
console.log(num);