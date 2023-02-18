//Sum of Two Integers (371)
//given two integers a and b
//return the sum of the two integers without using the operators + and -

//Approach: bit Manipulation | Bit Shifting
//& - to find my carries | the position needs to carry
//^ - to actually do addition within the iterations
//<< - to turn my carry into what I am going to apply in the next iteration || to move the carries to the left
//a - running addition results || b - carries

//find carries -> do the addition -> b holds left-shifted carry
//a is the actual addition result
//b is the carry after left shift
function sumofTwoIntegers(a, b) { 
  let carry;

  while(b !== 0) {
    carry = a & b;
    a = a ^ b;
    b = carry << 1;
  }
  return a;
}
sumofTwoIntegers(1, 2); //3

sumofTwoIntegers(2, 3); //5


