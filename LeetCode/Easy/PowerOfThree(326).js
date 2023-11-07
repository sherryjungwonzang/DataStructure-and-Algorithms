//326. Power of Three
//given an integer 'n'
//return true if it is a power of three
//otherwise return false

//an integer n is a power of three, if there exists an integer x such that n == 3^x
//Approach: dividing n by 3
var powerOfThree1 = (n) => {
  //base case
  if (n === 1) return true;
  if (n <= 0) return false;
  if (n % 3 !== 0) return false;

  //recursive call
  return powerOfThree1(n / 3);
}

//Approach: using bit integer and setting the upper bound as 3^19
var powerOfThree2 = (n) => {
  //upper bound
  return n > 0 && (3 ** 19) % n === 0;
}
powerOfThree1(27); //true - 27 = 3^3

powerOfThree2(0); //false - there is no x where 3^x = 0

powerOfThree2(-1); //false - there is no x where 3^x = -1
