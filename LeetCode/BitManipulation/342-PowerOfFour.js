//342. Power of four
//given an integer 'n'
//return true if it is a power of three
//otherwise return false

//an integer n is a power of four, if there exists an integer x such that n == 4^x

//Approach: using recursive call with dividing by 4
var powerOfFour = (n) => {
  //base case
  if (n === 1) return false;
  if (n <= 0) return false;
  if (n % 4 !== 0) return false;

  //recursive call
  return powerOfFour(n / 4);
}
powerOfFour(27); //true - 27 = 3^3


var powerOfFour_bit = (n) => {
  //log 2 is even -> return true
  return n > 0 && Math.log2(n) % 2 === 0;
}
powerOfFour_bit(0); //false - there is no x where 3^x = 0

powerOfFour_bit(-1); //false - there is no x where 3^x = -1
