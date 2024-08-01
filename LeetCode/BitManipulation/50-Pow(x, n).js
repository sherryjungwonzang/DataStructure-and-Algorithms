//50. Pow (x, n)
//implement pow(x, n), which calculates x raised to the power n - x^n

//Approach:
//using bit manipulation
var myPow = (x, n) => {
  //base case
  if (n === 0) return 1; //2^0 is 1 always

  //negative
  if (n < 0) {
    x = 1 / x;
    n = -n; //setting as positive
  }

  //even
  if (n % 2 === 0) {
    let even = myPow(x, n / 2);
    return even * even;
  } else { //odd
    return x * myPow(x, n - 1);
  }
}
//TC: O(log(n)) - the value of n each time
//SC: O(1)
myPow(2.00000, 10); //1024.00000

myPow(2.10000, 3); //9.26100

myPow(2.00000, -2); //0.25000
//2-2 = 1/22 = 1/4 = 0.25
