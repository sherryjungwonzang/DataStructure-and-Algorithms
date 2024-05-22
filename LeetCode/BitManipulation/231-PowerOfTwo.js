//231. Power of Two
//given an integer 'n'
//return true if it is a power of two
//otherwise, return false

//an integer n is a power of two, if there exists an integer x such that n == 2^x

//Approach 1: dividing by 2 and check whether it is odd or not
var powerOfTwo1 = (n) => {
    //base case
    if (n === 1) return true;
    if (n < 2 || n % 2 !== 0) return false;
  
    //recursive call
    return powerOfTwo1(n / 2);
}
  
//Approach 2: using bit representation '&'
var powerOfTwo2 = (n) => {
    if (n <= 0) return false; //since we have not found corresponding bits of 0s
  
    //binary representation
    return (n & (n - 1)) === 0; //valid
}
//TC: O(1)
  
powerOfTwo1(1); //true - 2^0 = 1
//n = 1 - 0 0 0 1
//n = 0 - 0 0 0 0
//&     - 0 0 0 0 -> valid
  
powerOfTwo2(3); //false
//n = 3 - 0 0 1 1
//n = 2 - 0 0 1 0
//&     - 0 0 1 0 -> non valid
  
powerOfTwo2(16); //true - 2^4 = 16
//n = 16      - 0 0 0 1 0 0 0 0 
//n - 1 = 15  - 0 0 0 0 1 1 1 1
//&           - 0 0 0 0 0 0 0 0 -> valid
