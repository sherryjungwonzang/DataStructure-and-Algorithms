//7. Reverse Integer
//given a signed 32-bit integer 'x' 
//return x with its digites reversed
//if reversing x causes the value to go outside the signed 32-bit integer range '-2^31, 2^31-1
//then return 0

//assume the environment does not allow you to sotre 64-bit integers - signed or unsigned
var reverseInteger = (x) => {
  //check integer is negative or positive
  //negative
  if (x < 0) return -1 * reverseInteger(-x);

  //positive
  //converting num into string when merging -> x + ""
  //splitting each elements - split()
  //reversing - reverse()
  //merging together - join()
  const res = (x + "").split('').reverse().join('');

  //checking the range
  return (res > 2 ** 31 - 1) ? 0 : res;
}
reverseInteger(123); //321
//convert: 123 -> "123"
//split: [1, 2, 3]
//reverse: [3, 2, 1]
//join: 321

reverseInteger(-123); //-321
//negative: -1 * reverseInteger(123) = -321
//reverseInteger(123) part:
//convert: 123 -> "123"
//split: [1, 2, 3]
//reverse: [3, 2, 1]
//join: 321

reverse(120); //20
//convert: 123 -> "120"
//split: [1, 2, 0]
//reverse: [0, 2, 1]
//join: 21
