//Valid Palindrome (125)
//given a string s
//return true if it is a palindrome, or false otherwise
//a phrase is a palindrone if adter converting all uppercase letters into lowercase letters
//and removing all non-alphanumeric characters
//it read the same forward and backward
//alphanumeric characters include letters and numbers

//Approach:
//using two helper functions - cleanUp() and isPal()
//1) to remove non-alphanumeric value and uppoercase - cleanUp()
//2) compare left side to the right side with two pointers - isPal() 
var validPalindrome = (s) => {
  //helper functions
  //to clean the string 's'
  let cleanStr = cleanUp(s);

  //check whether it is a palindrome or not
  return isPal(cleanStr);
}

//remove all non-alphanumeric values
function cleanUp (str) {
  let char = "abcdefghijklmnopqrstuvwxyz0123456789";

  //check to see whether the value within string is found within char
  //if it is not - remove | if it is - add it to a new string variable
  let newS = "";

  for (let i = 0; i < str.length; i++) {
    //convert to the lowercase first
    let lowerCase = str[i].toLowerCase();

    if (char.indexOf(lowerCase) !== -1) { //meaning that is an alphanumeric value - can be found in char
      //add to the newS
      newS += lowerCase;
    }
  }
  return newS;
}

//check palindrome or not
//using with two pointers on left and right side + move inwards
function isPal(str) {
  //two pointers
  let left = 0;
  let right = str.length - 1;

  while(left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
//TC: O (n + m) - one loop for cleanUp and for entire string
//SC: O(n) - because of newS
validPalindrome("A man, a plan, a canal: Panama"); //true - "amanaplanacanalpanama" is a palindrome
//cleanStr = a m a n a p l a n a c a n a l p a n a m a
//           l                                       r
//a vs a -> true
//             l                                    r
//m vs m -> true
//               l                                r
//a vs a -> true
//                  l                           r
//n vs n -> true
//...
//                             l    r
//a vs a -> true
//                               l r
//c vs c  -> true

validPalindrome("race a car"); //false - "raceacar" is not a palindrome
//cleanStr = r a c e a c a r
//           l             r
//r vs r -> true
//             l          r
//a vs a -> true
//                l     r
//c vs c -> true
//                  l r
//e vs a -> false
 
validPalindrome(" "); //true - forwards and backwards of empty string is the same

