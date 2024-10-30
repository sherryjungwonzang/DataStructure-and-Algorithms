//1281. Subtract The Product And Sum Of Digits Of An Integer
//given an integer number n
//return the difference between the product of its digits and the sum of its digits
var subtractProductSum = (n) => {
    let nums = Array.from(String(n), Number);
    let sum = nums.reduce((a, b) => a + b);
    let product = nums.reduce((a, b) => a * b);

    return product - sum;
}
subtractProductSum(234); //15
//nums = [2, 3, 4]
//sum = 2 + 3 + 4 = 9
//product = 2 * 3 * 4 = 24
//product - sum = 24 - 9 = 15

subtractProductSum(4421); //21
//nums = [4, 4, 2, 1]
//sum = 4 + 4 + 2 + 1 = 11
//product = 4 * 4 * 2 * 1 = 32
//product - sum = 32 - 11 = 21
