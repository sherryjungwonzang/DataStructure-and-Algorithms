//Palindrome Number (9)
//given an integer 'x'
//return true if x is a palindrome and false otherwise

//Approach:
//using Two Pointers
var palindromeNumber = (x) => {
  //if it is a negative value
  if (x < 0) return false;

  //convert it to string
  x = x.toString();

  //two pointers
  let left = 0;
  let right = x.length - 1;

  while(left < right) {
    //non palindrome
    if (x[left] !== x[right]) {
      return false;
    }
    //moving the left and right at the same time
    left++;
    right--;
  }
  return true; 
}
palindromeNumber(121); //true - 121 reads as 121 from left to right and from right to left
// 1  2  1
// l     r

palindromeNumber(-121); //false - from left to right, it reads -121. From right to left, it becomes 121 -> those are not a palindrome
