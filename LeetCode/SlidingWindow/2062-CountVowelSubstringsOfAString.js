//2062. Count Vowel Substrings Of A String
//a substring is a contiguous (non-empty) sequence of characters within a string
//a vowel substring is a substring that only consists of vowels ('a', 'e', 'i', 'o', and 'u') and has all five vowels present in it
//given a string word
//return the number of vowel substrings in word

//Approach:
//using sliding window
var countVowelSubstrings = (word) => {
    let vowel = {'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 1}
    let map = new Map(Object.entries(vowel));
    let left = 0;
    let str = "";
    let pointer = 0;
    let count = 0;

    //sliding window
    while (left <= word.length - 5) {
        //checking vowels
        if (map.has(word[pointer])) {
            str += word[pointer++];

            if (str.length >= 5 && isAllVowel(str)) count++;
        } else {
            left++;

            str = ""; //resetting

            pointer = left; //updating
        }
    } 

    //checking all vowels or not
    function isAllVowel(str) {
        return str.includes('a') && str.includes('e') && str.includes('i') && str.includes('o') && str.includes('u'); 
    }

    return count;
}
countVowelSubstrings("cuaieuouac"); //7 - uaieuo, uaieuou, uaieuoua, aieuo, aieuou, aieuoua, ieuoua
//map = {'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 1}

//left = 0
// c u a i e u o u a c
// L
// P  
// -
//left = 'c' || pointer = 0 -> map does not have
//left = 0 -> 1
//str = "" -> ""
//pointer = 0 -> 1

//left = 1
// c u a i e u o u a c                           c u a i e u o u a c                            c u a i e u o u a c                             c u a i e u o u a c                                         c u a i e u o u a c
//   L                                             L                                              L                                               L                                                           L        
//   P                                               P                                                P                                                 P                                                             P
//   -                                             ---                                            -----                                           -------                                                     ---------
//left = 1 || pointer = 1 -> map has u           left = 1 || pointer = 2 -> map has a           left = 1 || pointer = 3 -> map has i            left = 1 || pointer = 4 -> map has e                        left = 1 || pointer = 5 -> map has u 
//str = "" -> "u"                                str = "" -> "u" -> "ua"                        str = "" -> "u" -> "ua" -> "uai"                str = "" -> "u" -> "ua" -> "uai" -> "uaie"            str = "" -> "u" -> "ua" -> "uai" -> "uaie" -> "uaieu"
//pointer = 1 -> 2                               pointer = 1 -> 2 -> 3                          pointer = 1 -> 2 -> 3 -> 4                      pointer = 1 -> 2 -> 3 -> 4 -> 5                             str >= 5 but it does not have all vowel 
//                                                                                                                                                                                                          pointer = 1 -> 2 -> 3 -> 4 -> 5 -> 6    

// c u a i e u o u a c                                              c u a i e u o u a c                                                                 c u a i e u o u a c                                                                                 c u a i e u o u a c                                     
//   L                                                                L                                                                                   L                                                                                                   L                         
//             P                                                                  P                                                                                     P                                                                                                     P         
//   -----------                                                      -------------                                                                       ---------------                                                                                     -----------------              
//left = 1 || pointer = 6 -> map has o                              left = 1 || pointer = 7 -> map has u                                                left = 1 || pointer = 8 -> map has a                                                                left = 1 || pointer = 9 -> map does not have c                  
//str = ""  -> "u" -> "ua" -> "uai" -> "uaie" -> "uaieuo"           str = "" -> "u" -> "ua" -> "uai" -> "uaie" -> "uaieuo" -> "uaieuou"                 str = "" -> "u" -> "ua" -> "uai" -> "uaie" -> "uaieuo" -> "uaieuou" -> "uaieuoua"                   left = 1 -> 2
//str >= 5 and it has all vowel -> count = 0 -> 1                   str >= 5 and it has all vowel -> count = 0 -> 1 -> 2                                str >= 5 and it has all vowel -> count = 0 -> 1 -> 2 -> 3                                           str = "uaieuoua" -> ""
//pointer = 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7                         pointer = 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8                                      pointer = 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9                                                 pointer resetting = 9 -> 2                                                                                                      

//left = 2
// c u a i e u o u a c                           c u a i e u o u a c                            c u a i e u o u a c                             c u a i e u o u a c                                         c u a i e u o u a c
//     L                                             L                                              L                                               L                                                           L        
//     P                                               P                                                P                                                 P                                                             P
//     -                                             ---                                            -----                                           -------                                                     ---------
//left = 2 || pointer = 2 -> map has a           left = 2 || pointer = 3 -> map has i           left = 2 || pointer = 4 -> map has e            left = 2 || pointer = 5 -> map has u                        left = 2 || pointer = 6 -> map has o 
//str = "" -> "a"                                str = "" -> "a" -> "ai"                        str = "" -> "a" -> "ai" -> "aie"                str = "" -> "a" -> "ai" -> "aie" -> "aieu"                  str = "" -> "a" -> "ai" -> "aie" -> "aieu" -> "aieuo"
//pointer = 2 -> 3                               pointer = 2 -> 3 -> 4                          pointer = 2 -> 3 -> 4 -> 5                      pointer = 2 -> 3 -> 4 -> 5 -> 6                             str >= 5 and it has all vowel -> count = 0 -> 1 -> 2 -> 3 -> 4
//                                                                                                                                                                                                          pointer = 2 -> 3 -> 4 -> 5 -> 6 -> 7    

// c u a i e u o u a c                                                      c u a i e u o u a c                                                                     c u a i e u o u a c                                                                 
//     L                                                                        L                                                                                       L                                                          
//               P                                                                          P                                                                                         P                                                                                                          
//     -----------                                                              -------------                                                                           ---------------                                                                     
//left = 2 || pointer = 7 -> map has u                                      left = 2 || pointer = 8 -> map has a                                                    left = 2 || pointer = 9 -> map does not have c                                                                         
//str = "" -> "a" -> "ai" -> "aie" -> "aieu" -> "aieuo" -> "aieuou"         str = "" -> "a" -> "ai" -> "aie" -> "aieu" -> "aieuo" -> "aieuou" -> "aieuoua"          left = 2 -> 3  
//str >= 5 and it has all vowel -> count = 0 -> 1 -> 2 -> 3 -> 4 -> 5       str >= 5 and it has all vowel -> count = 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6                str = "aieuoua" -> ""                 
//pointer = 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8                                 pointer = 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9                                          pointer resetting = 9 -> 3

//left = 3
// c u a i e u o u a c                           c u a i e u o u a c                            c u a i e u o u a c                             c u a i e u o u a c                                         c u a i e u o u a c                                            c u a i e u o u a c                                                                  c u a i e u o u a c
//       L                                             L                                              L                                               L                                                           L                                                              L                                                                                    L
//       P                                               P                                                P                                                 P                                                             P                                                                P                                                                                      P
//       -                                             ---                                            -----                                           -------                                                     ---------                                                     ------------                                                                          -------------
//left = 3 || pointer = 3 -> map has i           left = 3 || pointer = 4 -> map has e           left = 3 || pointer = 5 -> map has u            left = 3 || pointer = 6 -> map has o                        left = 3 || pointer = 7 -> map has u                           left = 3 || pointer = 8 -> map has a                                                 left = 3 || pointer = 9 -> map does not have c
//str = "" -> "i"                                str = "" -> "i" -> "ie"                        str = "" -> "i" -> "ie" -> "ieu"                str = "" -> "i" -> "ie" -> "ieu" -> "ieuo"                  str = "" -> "i" -> "ie" -> "ieu" -> "ieuo" > "ieuou"           str = "" -> "i" -> "ie" -> "ieu" -> "ieuo" > "ieuou" -> "ieuoua"                     left = 3 -> 4
//pointer = 3 -> 4                               pointer = 3 -> 4 -> 5                          pointer = 3 -> 4 -> 5 -> 6                      pointer = 3 -> 4 -> 5 -> 6 -> 7                             str >= 5 but it does not has all vowel                         str >= 5 and it has all vowel -> count = 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7        str = "ieuoua" -> "" 
//                                                                                                                                                                                                          pointer = 3 -> 4 -> 5 -> 6 -> 7 -> 8                           pointer = 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9                                            pointer resetting = 9 -> 4

//left = 4
// c u a i e u o u a c                           c u a i e u o u a c                            c u a i e u o u a c                             c u a i e u o u a c                                         c u a i e u o u a c                                            c u a i e u o u a c   
//         L                                             L                                              L                                               L                                                           L                                                              L               
//         P                                               P                                                P                                                 P                                                             P                                                                P         
//         -                                             ---                                            -----                                           -------                                                     ---------                                                     ------------    
//left = 4 || pointer = 3 -> map has e           left = 4 || pointer = 5 -> map has u           left = 4 || pointer = 6 -> map has o            left = 4 || pointer = 7 -> map has u                        left = 4 || pointer = 8 -> map has a                           left = 4 || pointer = 9 -> map does not have c
//str = "" -> "e"                                str = "" -> "e" -> "eu"                        str = "" -> "e" -> "eu" -> "euo"                str = "" -> "e" -> "eu" -> "euo" -> "euou"                  str = "" -> "e" -> "eu" -> "euo" -> "euoua"                    left = 4 -> 5 < 5 -> done
//pointer = 4 -> 5                               pointer = 4 -> 5 -> 6                          pointer = 4 -> 5 -> 6 -> 7                      pointer = 4 -> 5 -> 6 -> 7 -> 8                             str >= 5 but it does not has all vowel                         str = "euoua" -> "" 
//                                                                                                                                                                                                          pointer = 4 -> 5 -> 6 -> 7 -> 8 -> 9                           

//count = 7

countVowelSubstrings("aeiouu"); //2 - aeiou, aeiouu

countVowelSubstrings("unicornarihan"); //0


