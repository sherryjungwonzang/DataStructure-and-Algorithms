//6. ZigZag Conversion
//the string 'PAYPALISHIRING' is written in a zigzag pattern
//on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
//P   A   H   N
//A P L S I I G
//Y   I   R
//and then read line by line: 'PAHNAPLSIIGYIP'

//write the code that will take a string and make this conversion given a number of rows
//string convert(string s, int numRows);
var zigZagConversion = (s, numRows) => {
  //edge cases
  if (numRows === 1 || s.length < numRows) return s;

  //difrection flag
  let direction = false;
  let count = 0; //will updated according to count of values
  //creating an array with initializing 'numRows' amount of empty strings
  let arr = new Array(numRows).fill("");

  //looping through string
  for (let i = 0; i < s.length; i++) {
    //extract the current value
    let curr = s[i];

    //to add curr to the string at count
    arr[count] += curr;

    //to change the direction flag
    //can flip direction only when the count is 0 and numRows - 1
    if (count === 0 || count >= numRows - 1) direction = !direction;

    //to check whether the direction is true or false
    //true - count is incrementing
    //false - count is decrementing
    direction ? count++ : count--;
  }
  //convert it into a string
  return arr.join("");
}
zigZagConversion("PAYPALISHIRING", 3); //"PAHNAPLSIIGYIR"
//"PAYPALISHIRING", numRows = 3
//P   A   H   N -> 0
//A P L S I I G -> 1
//Y   I   R     -> 2
//count = 0
//direction = False
//arr = ["    ", "    ", "    "];

//count = 0 -> 1 -> 2 | 1 | 0 -> 1 -> 2 | 1 | 0 -> 1 -> 2 | 1 | 0 -> 1
//direction = (default: False)| True | False | True | False | True | False | True
//arr = ["PAHN", "APLSIIG", "YIR"];
//arr.join -> "PAHNAPLSIIGYIR"

zigZagConversion("PAYPALISHIRING", 4); //"PINALSIGYAHRPI" 
//"PAYPALISHIRING", numRows = 4
//P     I    N -> 0
//A   L S  I G -> 1
//Y A   H R    -> 2
//P     I      -> 3
//count = 0
//direction = False
//arr = ["    ", "    ", "    ", "    "];

//count = 0 -> 1 -> 2 -> 3 | 2 | 1 | 0 -> 1 -> 2 -> 3 | 2 | 1 | 0 -> 1 -> 2
//direction = (default: False)| True | False | False | True | False | True
//arr = ["PIN", "ALSIG", "YAHR", "PI"];
//arr.join -> "PINALSIGYAHRPI" 

zigZagConversion("A", 1); //"A"
