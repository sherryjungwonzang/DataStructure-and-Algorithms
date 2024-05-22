//371. Sum of Two Integers
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
var sumofTwoIntegers = (a, b) => { 
    let carry;
  
    while(b !== 0) {
      carry = a & b;
      a = a ^ b;
      b = carry << 1;
    }
    return a;
}
sumofTwoIntegers(1, 2); //3
//a = 1 = 0001
//b = 3 = 0011
//carry = a & b = 0001
//updating a and b
//a = a ^ b = 0010
//b = carry << 1 = 0010

//a = 0010
//b = 0010
//carry = a ^ b = 0010
//updating a and b
//a = a ^ b = 0000
//b = <<< = 0100

//a = 0100 -> return
//b = 0000

sumofTwoIntegers(2, 3); //5
//a = 2 = 0010
//b = 3 = 0011
//carry = & = 0010
//updating a and b
//a = ^ = 0001
//b << = 0100

//a = 0001
//b = 0100
//carry = 0000
//a = 0101 -> return
//b = 0000
