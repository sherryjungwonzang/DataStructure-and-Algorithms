//1704. Determine If String Halves Are Alike
//given a string s of even length
//split this string into two halves of equal lengths, and let a be the first half and b be the second half
//two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U')
//notice that s contains uppercase and lowercase letters
//return true if a and b are alike. Otherwise, return false

//Approach:
//using set
var halvesAlike = (s) => {
    let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let count = 0;
    let mid = Math.floor(s.length / 2);

    for (let i = 0; i < mid; i++) {
        let first = s[i];
        let second = s[mid + i];

        if (vowels.has(first)) count++;
        if (vowels.has(second)) count--;
    }

    return count === 0; //meaning same structure
}
//TC: O(n)
//SC: O(1)
halvesAlike("book"); //true - a has 1 vowel and b has 1 vowel
//mid = 4 / 2 = 2

//b o o k
//    ^     -> first = "bo"
//             second = "ok"

//first = "bo" -> o is vowel
//count = 0 -> 1

//first = "ok" -> o is vowel
//count = 0 -> 1 -> 0
//true

halvesAlike("textbook"); //false - a has 1 vowel whereas b has 2
//mid = 8 / 2 = 4

//t e x t b o o k
//        ^         -> first = "text"
//                     second = "book"

//first = "text" -> e is vowel
//count = 0 -> 1

//first = "book" -> o is vowel
//count = 0 -> 1 -> 0 -> -1
//false
