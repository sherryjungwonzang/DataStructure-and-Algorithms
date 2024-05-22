//6. ZigZag Conversion
//the string 'PAYPALISHIRING' is written in a zigzag pattern
//on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
//P   A   H   N
//A P L S I I G
//Y   I   R
//and then read line by line: 'PAHNAPLSIIGYIP'

//write the code that will take a string and make this conversion given a number of rows
//string convert(string s, int numRows);
var zigzagConversation = (s, numRows) => {
    //edge case
    if (numRows === 1 || s.length < numRows) return s;

    //direction flags
    let direction = false;
    let count = 0; //will update according to count of values
    let arr = new Array(numRows).fill(""); //temporary array with empty strings to store

    //looping through strings
    for (let i = 0; i < s.length; i++) {
        //extract the current value
        let curr = s[i];

        //add curr string at the column according index
        arr[count] += curr;

        //change direction flag
        if (count === 0 || count >= numRows - 1) direction = !direction;

        //update count - true(incrementing) or false(decrementing)
        direction ? count++ : count--;
    }
    return arr.join("");
}
zigzagConversation("PAYPALISHIRING", 3); //"PAHNAPLSIIGYIR"
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

zigzagConversation("PAYPALISHIRING", 4); //"PINALSIGYAHRPI" 
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

zigzagConversation("A", 1); //"A"
