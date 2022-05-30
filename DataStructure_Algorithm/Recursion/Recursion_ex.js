//The focus should be to identify the correct base case first before solving the entire problem

//ex1. Convert decimal (base10) to binary number
//keep dividing the num by 2 and each time calculate the modulus and division
//Base case: is when the n is less than 2, it can be only 0 or 1
function base10ToString(n) {
    var binaryString = "";

    function base10ToStringHelper(n) {
        if (n < 2) {
            binaryString += n;
            return;
        } else {
            base10ToStringHelper(Math.floor(n / 2)); //division
            base10ToStringHelper(n % 2); //modulus
        }
    }
    base10ToStringHelper(n);

    return binaryString;
}
console.log(base10ToString(232)); //11101000
//Time Complexity: O(log2(n))
//logarithmic-> because recursive call divides the n by 2
//Space Complexity: O(log2(n))


//ex2. Print all permutations of an array
//to swap elements of the array in every possible position
//base case: beginIndex is equal to endIndex
function swap(strArr, index1, index2) {
    var temp = strArr[index1];
    strArr[index1] = strArr[index2];
    strArr[index2] = temp;
}

function permute(strArr, begin, end) {
    if (begin == end) {
        console.log(strArr);
    } else {
        for (var i = begin; i < end + 1; i++) {
            swap(strArr, begin, i);
            permute(strArr, begin + 1, end);
            swap(strArr, begin, i);
        }
    }
}

function permuteArray(strArr) {
    permute(strArr, 0, strArr.length - 1);
}

permuteArray(["A", "C", "D"]);
//["A", "C", "D"]
//["A", "D", "C"]
//["C", "A", "D"]
//["C", "D", "A"]
//["D", "C", "A"]
//["D", "A", "C"]

//Time Complexity: O(n!)
//Space Complexity: O(n!)
//there are n! permutations and it creates n! call stacks


//ex3. Flatten an object
//given a JavaScript array:
//flatten it into {'Key1': '1', 'Key2.a': '2', 'Key2.b': '3', 'Key2.c.d': '3', 'Key2.c.e': '1'}
//the child is denoted by . between the parent and child
var dictionary = {
    'Key1': '1',
    'Key2': {
        'a': '2',
        'b': '3',
        'c': {
            'd': '3',
            'e': '1'
        }
    }
}

//iterate over any property and recursively check it for child properties
//passing in the concatenated string name

//Base case: when input is not an object
function flattenDictionary(dictionary) {
    var flattenedDictionary = {};

    function flattenDictionaryHelper(dictionary, propName) {
        if (typeof dictionary != 'object') {
            flattenedDictionary[propName] = dictionary;
            return;
        }

        for (var prop in dictionary) {
            if (propName == "") {
                flattenDictionaryHelper(dictionary[prop], propName + prop);
            } else {
                flattenDictionaryHelper(dictionary[prop], propName + '.' + prop);
            }
        }
    }
    flattenDictionaryHelper(dictionary, "");

    return flattenedDictionary;
}
//Time Complexity: O(n)
//Space Complexity: O(n)
//each properties is visited only once and stored once per n properties


//ex4. Recursively determines if a string is a palindrome
//palindrome is a word spelled the same backward and forward 
function isPalindromeRecursive(word) {
    return isPalindromeHelper(word, 0, word.length - 1);
}

function isPalindromeHelper(word, beginPos, endPos) {
    if (beginPos >= endPos) return true;

    if (word.charAt(beginPos) != word.charAt(endPos)) {
        return false;
    } else {
        return isPalindromeHelper(word, beginPos + 1, endPos - 1);
    }
}

console.log(isPalindromeRecursive('hi')); //false
console.log(isPalindromeRecursive('iii')); //true
console.log(isPalindromeRecursive('ii')); //true
console.log(isPalindromeRecursive('aibohphobia')); //true
console.log(isPalindromeRecursive('racecar')); //true
//Time Complexity: O(n)
//Space Complexity: O(n)
//because of the recursive call stack
//call stack remains part of memory even if it is not declaring a variable or being stored inside a data structure
