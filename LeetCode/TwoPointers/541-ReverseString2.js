//541. Reverse String2
//given a string s and an integer k
//reverse the first k characters for every 2k characters counting from the start of the string
//if there are fewer than k characters left, reverse all of them
//if there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original

//Approach:
//using two pointers
var reverseString2 = (s, k) => {
    let arr = s.split('');

    for (let i = 0; i < arr.length; i += 2 * k) {
        let left = i;
        let right = i + k - 1; //setting to the next to left pointer

        //two pointers
        while (left < right) {
            //base case
            if (arr[right] === undefined) {
                right--;
                continue;
            }

            //swapping
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }

    return arr.join('');
}
reverseString2("abcdefg", 2); //"bacdfeg"
//arr = [a, b, c, d, e, f, g]

//i = 0
//left = 0
//right = i + k - 1 = 0 + 2 - 1 = 1
//arr = [a, b, c, d, e, f, g]
//       L  R
//swapping
//arr = [b, a, c, d, e, f, g]
//left = 0 -> 1
//right = 1 -> 0

//i = 0 + 2 * 2 = 4
//left = 4
//right = i + k - 1 = 4 + 2 - 1 = 5
//arr = [b, a, c, d, e, f, g]
//                   L  R
//swapping
//arr = [b, a, c, d, f, e, g]
//left = 4 -> 5
//right = 5 -> 4

reverseString2("abcd", 2); //"bacd"
