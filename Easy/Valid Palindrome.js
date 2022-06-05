//Valid Palindrome
//given a string s -> return true if it is a palindrome
//after converting all uppercase letters into lowercase letters
//removing all non-alphanumeric characters
//reading forward and backward
//alphanumeric: includes letters and numbers

//Approach1: compare with reverse
//reverse the given string and compare it with original
//Time/Space Complexity: O(n)
var isPalindrome = (s) => {
    const forward = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '').replace(/\s+/g, '');
    const reverse = forward.split('').reverse().join('');

    return forward === reverse;
}



//another solution
var isPalindrome = (s) => {
    //return the value of the string converted to lower case
    //remove special symbols and extra spaces
    let newS = s.toLowerCase().replace(/[\W_]/g, "");

    //reverse a string with built-in function
    let reverseS = newS.split("").reverse().join("");

    //compare two strings
    return newS === reverseS;
};



//Approach2: Two pointers
var isPalindrome = (s) => {
    //return the value of the string converted to lower case
    //remove special symbols and extra spaces
    let newS = s.toLowerCase().replace(/[\W_]/g, "");

    //one pointer starts from the beginning
    //one pointer starts from the end
    let i = 0;
    let j = newS.length - 1;

    //compare two pointers
    while(i < j) {
        if (newS[i] !== newS[j]) return false;
        i++;
        j--;
    }
    return true;
}


//another solution
var isPalindrome = (s) => {
    //remove spaces and any special string
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    let left = 0;
    let right = s.length - 1;

    while(left <= right) {
        if (s[left] !== s[right]) return false;
        left++;
        right--;
    }
    return true;
};
