// Question-20

var products = ["keyboard", "mouse", "monitor", "USB", "headphones"]
var prices = [2500, 1200, 22000, 800, 3500]

var userproductnum = +prompt("Enter Product Number")
var quantity = +prompt("Enter Product Quantity")

var prodName = ""
var prodPrice = 0
var num = 0

for (var i = 0; i < products.length; i++) {
    num += 1
    // console.log(num);
    
    prodName = products[i]
    prodPrice = prices[i]

    console.log(prodName , prodPrice , num);
    
}