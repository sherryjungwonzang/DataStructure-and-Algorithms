//2259. Remove Digit From Number To Maximize Result
//given a string 'number' representing a positive integer and a character 'digit'
//return the resulting string after removing exactly one occurrence of digit from number 
//such that the value of the resulting string in decimal form is maximized
//the test cases are generated such that digit occurs at least once in number
var removeDigit = (number, digit) => {
    let max = '';

    for (let i = 0; i < number.length; i++) {
        if (number[i] === digit) {
            //removing digits
            let curr = number.slice(0, i) + number.slice(i + 1);

            //updating
            if (curr > max) max = curr;
        }
    }

    return max;
}
removeDigit("123", "3"); //"12"
//"1 2 3"       "1 2 3"
// ^               ^
//1 != 3        2 != 3 

//"1 2 3" 
//     ^  
//3 = 3 -> curr = slice(0, 2) + slice(3) = "12"
//max = '' -> "12"

removeDigit("1231", "1"); //"231"
//"1 2 3 1" 
// ^    
//1 = 1  
//-> curr = slice(0, 0) + slice(1) = "231"
//max = '' -> "231"

//"1 2 3 1"       "1 2 3 1"
//   ^                 ^
//2 != 1           3 != 1 

//"1 2 3 1" 
//       ^    
//1 = 1  
//-> curr = slice(0, 3) + slice(4) = "123"
//max = '' -> "231" -> "231"

removeDigit("551", "5"); //"51"
