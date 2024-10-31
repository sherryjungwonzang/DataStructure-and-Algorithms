//1805. Number Of Different Integers In A String
//given a string word that consists of digits and lowercase English letters
//you will replace every non-digit character with a space
//for example, "a123bc34d8ef34" will become " 123  34 8  34"
//notice that you are left with some integers that are separated by at least one space: "123", "34", "8", and "34"
//return the number of different integers after performing the replacement operations on word
//two integers are considered different if their decimal representations without any leading zeros are different

//Approach:
//using hash set & regex
var numDifferentIntegers = (word) => {
    let zero = '0'.charCodeAt(0); //48
    let set = new Set();
    let nums = word.split(/[^0-9]+/); //extracting only numbers

    //drop leading zeros
    for (let num of nums) {
        if (num.length > 0) {
            let i = 0;

            while (num.charCodeAt(i) === zero) i++;

            //preserving the last 0 
            set.add(num.slice(i) || '0');
        }
    }

    return set.size;
}
numDifferentIntegers("a123bc34d8ef34"); //3 - "123", "34", and "8"
//nums = [ '', '123', '34', '8', '34' ]
//               ^
//num = 123 || i = 0
//123.charCodeAt(0): 49 !== 48 -> adding to set
//set = { 123, }

//nums = [ '', '123', '34', '8', '34' ]
//                      ^
//num = 34 || i = 0
//34.charCodeAt(0): 51 !== 48 -> adding to set
//set = { 123, 34, }

//nums = [ '', '123', '34', '8', '34' ]
//                           ^
//num = 8 || i = 0
//8.charCodeAt(0): 56 !== 48 -> adding to set
//set = { 123, 34, 8, }

//nums = [ '', '123', '34', '8', '34' ]
//                                 ^
//num = 34 || i = 0
//34.charCodeAt(0): 51 !== 48 -> already in set
//set = { 123, 34, 8 } -> size: 3

numDifferentIntegers("a1b01c001"); //1 - "1", "01", and "001" all represent the same integer because the leading zeros are ignored when comparing their decimal values
//nums = [ '', '1', '01', '001' ]
//              ^
//num = 1 || i = 0
//1.charCodeAt(0): 49 !== 48 -> adding to set
//set = { 1, }

//nums = [ '', '1', '01', '001' ]
//                   ^
//num = 01 || i = 0 -> 1: as 0 is there
//01.charCodeAt(1): 49 !== 48 -> already in set
//set = { 1, }

//nums = [ '', '1', '01', '001' ]
//                          ^
//num = 001 || i = 0 -> 1 -> 2: as 0 is there
//001.charCodeAt(2): 49 !== 48 -> already in set
//set = { 1 } -> size: 1

numDifferentIntegers("leet1234code234"); //2
