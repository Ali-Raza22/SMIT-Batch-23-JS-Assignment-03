// Question 10 — Sum & Average of Array

var prices = [1200, 850, 430, 1600, 990];
totalPrice = 0
for(var i = 0 ; i < prices.length ; i++) {
    totalPrice += prices[i]
    
}
console.log("Total:", totalPrice);
console.log("Average:", totalPrice / prices.length);