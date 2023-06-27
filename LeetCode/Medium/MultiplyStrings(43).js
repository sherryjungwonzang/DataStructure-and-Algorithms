//43. Multiply Strings
//given two non-negative integers 'num1' and 'num2' - represented as strings
//return the prodict of num1 and num2, also represented as a string

//must not use any built-in BigInteger library or convert the inputs to integer directly

//Approach:
//using array to store the number
var multiplyStrings = (num1, num2) => {
  //creating an array - initializing them with 0
  const res = Array(num1.length + num2.length).fill(0);

  //looping through the given digits from right to left
  for (let j = num2.length - 1; j > -1; j--) {
    for (let i = num1.length - 1; i > -1; i--) {
      //calculating each digits
      const multiply = num1[i] * num2[j];

      //settig index - last index | how many steps are moved from i and j
      const index = (num1.length + num2.length - 1) - (num2.length - 1 - j + num1.length - 1 -i);

      //updating res with index position with multiply value
      res[index] += multiply;


      //considering CARRY
      if (res[index] > 9) {
        res[index - 1] += Math.floor(res[index] / 10); //the next one should be carried
        res[index] %= 10;
      }
    }
  }

  //might be leading 0 - need to skip
  //99 * 9 -> carry digit
  //11 * 1 -> no carry digit
  while(res[0] === 0) {
    res.shift();
  }

  //if the res length is not 0 - will return everything
  return res.length === 0 ? 0 : res.join('');
}
//TC: O(n * m)
//SC: O(n + m)
multiplyStrings("2", "3"); //"6"
//        2
//        3
//       -----------
//        6

multiplyStrings("123", "456"); //"56088"
//        1  2  3
//        4  5  6
//       -----------
//[0  0  0  1  2  18] - looping through the first digit


//adding to the NOTE later!
//take each digits from the strings and do the multiply
//and sum up them and use array to keep the numbers
//        1  2  3
//        1  1  1
//       -----------
//        1  2  3
//     1  2  3
//  1  2  3
//---------------------
//[0  0  0  0  0  0] - can have max 6 digits

//starting the process
//[0  0  0  1  2  3] - looping through the first digit
//[0  0  1  3  5  3] - looping through the second digit
//[0  1  3  6  5  3] - looping through the second digit
//  1  3  6  5  3


//if there is a carry
//        9  9  9
//              9
//       -----------
//    [0  0  0  0] - can have max 4 digits

//starting the process
//    [0  0  0  81] - looping through the first digits | having a carry '81' - move 8 to the previous position
//    [0  0  8  1]
//    [0  0  89  1] - having a carry '81' - move 8 to the previous position
//    [0  8  9  1]
//    [0  89  9  1] - having a carry '81' - move 8 to the previous position
//    [8  9  9  1] 
//  8  9  9  1


//there is one more 9
//        9  9  9
//           9  9
//--------------------------- continue ---------
//    [8  18  0  1] - looping through the second digits
//    [17  9  0  1]
//    [98  9  0  1]
//  [9  8  9  0  1]
//  9  8  9  0  1
