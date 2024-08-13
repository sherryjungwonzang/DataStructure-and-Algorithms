//151. Reverse Words In A String
//given an input string 's'
//reverse the order of the words

//a word is defined as a sequence of non-space characters
//the words in 's' will be separated by at least one space
//return a string of the words in reverse order concatenated by a single space

//Approach:
//using two pointer
var reverseWords = (s) => {
    //check the first and last space
    let left = 0;
    let right = s.length - 1;

    while (left <= right && s[left] === ' ') left++; //checking the first non-space char
    while (left <= right && s[right] === ' ') right--; //checking the first non-space char
    s = s.substring(left, right + 1); //extract the trimmed substr

    //splitting the triemmed string
    let words = s.split(/\s+/);

    //merging
    let res = '';
    
    for (let k = words.length - 1; k > 0; k--) {
        res += words[k] + " ";
    };

    return res + words[0];
}
reverseWords("the sky is blue"); //"blue is sky the"

reverseWords("  hello world  "); //"world hello"
//              L         R
//L = 0 -> 2
//R = 13 -> 12
//s = s.substring(2, 12) -> "hello world"
//words = ["hello", "world"]

//res = ' '
//["hello", "world"]
//             k
//res = 'world +" "'

//res + words[0] = world + " " + "hello"
//world hello

reverseWords("a good   example"); //"example good a"
