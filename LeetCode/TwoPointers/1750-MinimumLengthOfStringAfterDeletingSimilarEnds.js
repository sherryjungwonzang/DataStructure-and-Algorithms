//1750. Minimum Length Of String After Deleting Similar Ends
//given a string 's' consisting only of character 'a', 'b' and 'c'

//asked to apply the following algorithm on the string any number of times:
//1. pick a non-empty prefix from the string s where all the characters in the prefix are equal
//2. pick a non-empty suffix from the string s where all the characters in the suffix are equal
//3. the prefix and the suffix should no intersect at any index
//4. the characters from the prefix and suffix must be the same
//5. delete both the prefix and the suffix

//return the min length of s after performing the above operation any numver of times - possibly zero times

//Approach:
//using two pointers
var minLength = (s) => {
    let left = 0;
    let right = s.length - 1;

    //two pointers
    while (left < right && s[left] === s[right]) {
        let char = s[left];

        //find the different char with 'char'
        while (left <= right && s[left] === char) left++;
        while (right >= left && s[right] === char) right--;
    }

    return right - left + 1; //the length of string
}
minLength("ca"); //2 - cannot remove any characters

minLength("cabaabac"); //0
//"c  a  b  a  a  b  a  c"
// L                    R
//char = "c"
//s[left] = "c" & s[right] = "c"
//move left++ & right--

//"c  a  b  a  a  b  a  c"
//    L              R
//char = "a"
//s[left] = "a" & s[right] = "a"
//move left++ & right--

//"c  a  b  a  a  b  a  c"
//       L        R
//char = "b"
//s[left] = "b" & s[right] = "b"
//move left++ & right--

//"c  a  b  a  a  b  a  c"
//          L  R
//char = "a"
//s[left] = "a" & s[right] = "a"
//move left++ 

//"c  a  b  a  a  b  a  c"
//            LR
//char = "a"
//s[left] = "a" & left <= right
//move left++ 

//"c  a  b  a  a  b  a  c"
//             R  L
//char = "a" != "b"
//stop iterating

//left = 5, right = 4 -> 4 - 5 + 1 = 0

minLength("aabccabba"); //3 
//Take prefix = "aa" and suffix = "a" and remove them, s = "bccabb"
//Take prefix = "b" and suffix = "bb" and remove them, s = "cca"

//"a  a  b  c  c  a  b  b  a"
// L                       R
//char = "a"
//s[left] = "a" & s[right] = "a"
//move left++ & right--
//move left once more

//"a  a  b  c  c  a  b  b  a"
//       L              R
//char = "b"
//s[left] = "b" & s[right] = "b"
//move left++ & right--
//move right once more

//"a  a  b  c  c  a  b  b  a"
//          L     R
//s[left] != s[right] -> done

//left = 3, right = 5 -> 5 - 3 + 1 = 3




