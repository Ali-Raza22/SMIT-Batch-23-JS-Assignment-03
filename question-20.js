// Question-20

var products = ["keyboard", "mouse", "monitor", "USB", "headphones"]
var prices = [2500, 1200, 22000, 800, 3500]

var userproductnum = +prompt("Enter Product Number")
var quantity = +prompt("Enter Product Quantity")

var num = userproductnum - 1
var subTotal = prices[num] * quantity 

for (var i = 0; i < products.length; i++) {
    
    var prodName = products[i]
    var prodPrice = prices[i]
    
    console.log(`Product : ${prodName}  (Price ${prodPrice})`);
    
}

if (userproductnum <= 0 || userproductnum > 5
    || quantity <= 0 
) {
    
    alert("Invalid Number")
    
} else{
    console.log("Your Choice :");
    console.log(`Product: ${products[num]}`);
    console.log(`Unit Price: Rs. ${prices[num]}`);
    console.log(`Quantity: ${quantity}`);
    
    console.log(`Subtotal: Rs. ${subTotal}`);
    
    if (subTotal >= 5000) {
        var discount = 10
        var discountAmount = subTotal * discount / 100
        console.log(`Discount: Rs. ${discountAmount}`);
    }
    
    discountAmount = 0
    var finalBill = subTotal - discountAmount
    
    console.log(`Final Bill: Rs. ${finalBill}`);
    

}