//2129. Capitalize The Title
//given a string title consisting of one or more words separated by a single space, where each word consists of English letters
//capitalize the string by changing the capitalization of each word such that:
//if the length of the word is 1 or 2 letters, change all letters to lowercase
//otherwise, change the first letter to uppercase and the remaining letters to lowercase
//return the capitalized title
var capitalizeTitle = (title) => {
    let words = title.toLowerCase().split(' ');

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 2) {
            //only the first letter is capital
            words[i] = words[i][0].toUpperCase() + words[i].slice(1);
        }
    }

    return words.join(' ');
}
capitalizeTitle("capiTalIze tHe titLe"); //"Capitalize The Title"
//"capiTalIze tHe titLe"
//words = [capitalize, the, title] -> [ Capitalize, the, title]
//              ^
//'C'+ apitalize = Capitalize

//words = [capitalize, the, title] -> [ Capitalize, The, title]
//                      ^
//'T'+ he = The

//words = [capitalize, the, title] -> [ Capitalize, The, Title]
//                             ^
//'T'+ itle = Title

//[ Capitalize, The, Title ] -> "Capitalize The Title"

capitalizeTitle("First leTTeR of EACH Word"); //"First Letter of Each Word"

capitalizeTitle("i lOve leetcode"); //"i Love Leetcode"
//"i lOve leetcode"
//words = [ i, love, leetcode ] -> [ i, love, leetcode ]
//          ^
//<2 -> leave it as original

//words = [ i, love, leetcode ] -> [ i, Love, leetcode ]
//               ^
//'L' + ove = Love

//words = [ i, love, leetcode ] -> [ i, Love, Leetcode ]
//                      ^
//'L' + eetcode = Leetcode

//[ i, Love, Leetcode ] -> "i Love Leetcode"
