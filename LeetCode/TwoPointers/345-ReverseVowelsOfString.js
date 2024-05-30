//345. Reverse Vowels Of a String
//given a string 's'
//reverse only all the vowels in the string and return it
//vowels are 'a', 'e', 'i', 'o', and 'u'

//Approach:
//using two pointers
var reverseVowels = (s) => {
    //two pointers
    let left = 0;
    let right = s.length - 1;
    let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', "I", 'O', 'U']);
    let res = s.split('');

    while (left < right) {
        if (vowels.has(res[left]) && vowels.has(res[right])) {
            swap(res, left, right);
            left++;
            right--;
        } else if (!vowels.has(res[left])) {
            left++;
        } else if (!vowels.has(res[right])) {
            right--;
        }
    }

    function swap(arr, left, right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
    };

    return res.join('');
}
reverseVowels("hello"); //"holle"
//"h e l l o"
// L       R
//L has no vowels -> L++

//   L     R -> swapping
//"h o l l e"
//     L R

reverseVowels("leetcode"); //"leotcede"
//"l e e t c o d e"
// L             R
//L has no vowels -> L++

//    L          R -> swapping
//"l e e t c o d e"
//     L       R
//R has no vowels -> R--

//     L     R -> swapping
//"l e o t c e d e"
//       L R 
