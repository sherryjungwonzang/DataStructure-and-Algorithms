//1592. Rearrange Spaces Between Words
//given a string text of words that are placed among some number of spaces
//each word consists of one or more lowercase English letters and are separated by at least one space
//ti's guaranteed that text contains at least one word
//rearrange the spaces so that there is an equal number of spaces between every pair of adjacent words and that number is maximized
//if you cannot redistribute all the spaces equally, place the extra spaces at the end, meaning the returned string should be the same length as text
//return the string after rearranging the spaces
var rearrangeSpaces = (text) => {
    let arr = text.split(" ");
    let total = arr.length - 1;

    arr = arr.filter(s => s !== '');

    //evenly reaarrage length between words
    let spaceBetween = arr.length > 1 ? Math.floor(total / (arr.length - 1)) : 0;
    //checking the space remain at the end
    let spaceLeft = arr.length > 1 ? total % (arr.length - 1) : total;

    return (arr.join(" ".repeat(spaceBetween)) + " ".repeat(spaceLeft));
}
//TC: O(n)
//SC: O(n)
rearrangeSpaces(text = "  this   is  a sentence "); //"this   is   a   sentence"
//  this   is  a sentence 
//^^    ^^   ^^ ^        ^
//arr = ['', '', 'this', '', '', 'is', '', 'a', 'sentence', ''] || total = 9

//arr = [this, is, a, sentence] || length = 4
//spaceBetween = floor(9 / 3) = 3
//spaceLeft = (9 % 3) = 0
//no left space at the end and rearrange space with 3

//"this   is   a   sentence"
//     ^^^  ^^^ ^^^

rearrangeSpaces(text = " practice   makes   perfect"); //"practice   makes   perfect "
// practice   makes   perfect
//^        ^^      ^^       
//arr = ['', 'practice', '', '', 'makes', '', '', 'perfect'] || total = 7

//arr = [practice, makes, perfect] || length = 3
//spaceBetween = floor(7 / 2) = 3
//spaceLeft = (7 % 2) = 1
//1 left space at the end and rearrange space with 3

//"practice   makes   perfect "
//         ^^^     ^^^       ^
