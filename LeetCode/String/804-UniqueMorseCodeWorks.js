//804. Unique Morse Code Works
//international mose code defines a standard encoding where each letter is mapped to a series of dots and dashes as follows:
//For convenience, the full table for the 26 letters of the English alphabet is given below:
//[".-","-...","-.-.","-..",".","..-.","--.",
//"....","..",".---","-.-",".-..","--","-.",
//"---",".--.","--.-",".-.","...","-","..-",
//"...-",".--","-..-","-.--","--.."]

//given an array of strings 'words' where each word can be written as a concatenation of the Morse code of each other
//For example, "cab" can be written as "-.-..--...", which is the concatenation of "-.-.", ".-", and "-..."
//We will call such a concatenation the transformation of a word
//return the number of different transformation among all words we have

//Approach:
//using set and charCodeAt()
var uniqueMorseCode = (words) => {
    let set = new Set();
    let morse = [
        ".-","-...","-.-.","-..",".","..-.","--.",
        "....","..",".---","-.-",".-..","--","-.",
        "---",".--.","--.-",".-.","...","-","..-",
        "...-",".--","-..-","-.--","--.."
    ];

    //traversing 
    for (let word of words) {
        let transformation = ""; //to collect morse code

        for (let char of word) {
            let index = char.charCodeAt(0) - 97;

            //transforming to morse code
            transformation += morse[index];
        }

        //adding to set for checking duplicates
        set.add(transformation);
    }

    return set.size;
}
uniqueMorseCode(words = ["gin","zen","gig","msg"]); //2
//["gin", "zen", "gig", "msg"]      ["gin", "zen", "gig", "msg"]        ["gin", "zen", "gig", "msg"]        ["gin", "zen", "gig", "msg"]
//   ^                                        ^                                          ^                                          ^
//word = "g i n"                    word = "z e n"                      word = "g i g"                      word = "m s g"
//        ^                                 ^                                   ^                                   ^
//"g" = 103 - 97 = 6 -> "--."       "z" = 122 - 97 = 25 -> "--.."       "g" = 103 - 97 = 6 -> "--."         "m" = 109 - 97 = 12 -> "--" 
//transformation = "--."            transformation = "--.."             transformation = "--."              transformation = "--" 

//word = "g i n"                    word = "z e n"                      word = "g i g"                      word = "m s g"
//          ^                                 ^                                   ^                                   ^
//"i" = 105 - 97 = 8 -> ".."        "e" = 105 - 97 = 8 -> "."           "i" = 105 - 97 = 8 -> ".."          "s" = 115 - 97 = 18 -> "..." 
//transformation = "--..."          transformation = "--..."            transformation = "--..."            transformation = "--..." 

//word = "g i n"                    word = "z e n"                      word = "g i g"                      word = "m s g"
//            ^                                 ^                                   ^                                   ^
//"n" = 110 - 97 = 13 -> "-."       "n" = 101 - 97 = 4 -> "-."           "g" = 103 - 97 = 6 -> "--."         "g" = 103 - 97 = 6 -> "--." 
//transformation = "--...-."        transformation = "--...-."          transformation = "--...--."         transformation = "--...--." 
//set = [ "--...-." ]               set = [ "--...-." ] -> duplicate    set = [ "--...-.", "--...--." ]     set = [ "--...-.", "--...--." ] -> duplicate

//set = [ "--...-.", "--...--." ] = 2

uniqueMorseCode(words = ["a"]); //1
