//1002. Find Common Characters
//given a string array 'words'
//return an array of all characters that show up in all strings within the words - including duplicates
//you may return the answer in any order

//Approach:
//using includes() and replace()
var findCommonChars = (words) => {
    let res = [];

    //set first word as base for comparison
    for (let word of words[0]) {
        //checking letters
        if (words.every(w => w.includes(word))) {
            //duplicate letters
            res.push(word);

            //removing letter for further comparison 
            words = words.map(w => w.replace(word, ''));
        }
    }

    return res;
}
findCommonChars(words = ["bella","label","roller"]); //["e","l","l"]
//                          ^
//                        word

//word = "b e l l a", words = ["bella", "label", "roller"] 
//        ^
//checking 'b' with word -> no "b"

//word = "b e l l a", words = ["bella", "label", "roller"] 
//          ^
//checking 'e' with word  -> yes
//res = [ 'e', ]
//["bella", "label", "roller"]  -> ["blla", "labl", "rollr"]

//word = "b e l l a", words = ["blla", "labl", "rollr"]
//            ^
//checking 'l' with word  -> yes
//res = [ 'e', 'l' ]
//["blla", "labl", "rollr"] -> ["bla", "lab", "rolr"]

//word = "b e l l a", words = ["bla", "lab", "rolr"]
//              ^
//checking 'l' with word  -> yes
//res = [ 'e', 'l', 'l' ]
//["bla", "lab", "rolr"] -> ["ba", "ab", "ror"]

//word = "b e l l a", words = ["ba", "ab", "ror"]
//                ^
//checking 'a' with word  -> only in two words
//res = [ 'e', 'l', 'l' ]

findCommonChars(words = ["cool","lock","cook"]); //["c","o"]
//                          ^
//                        word

//word = "c o o l", words = ["cool","lock","cook"]
//        ^
//checking 'c' with word  -> yes
//res = [ 'c', ]
//["cool", "lock", "cook"]  -> ["ool", "lok", "ook"]

//word = "c o o l", words = ["ool", "lok", "ook"]
//          ^
//checking 'o' with word  -> yes
//res = [ 'c', 'o' ]
//["ool", "lok", "ook"]  -> ["ol", "lk", "ok"]

//word = "c o o l", words = ["ol", "lk", "ok"]
//            ^
//checking 'o' with word  -> only in two words
//res = [ 'c', 'o' ]

//word = "c o o l", words = ["ol", "lk", "ok"]
//              ^
//checking 'l' with word  -> only in two words
//res = [ 'c', 'o' ]


