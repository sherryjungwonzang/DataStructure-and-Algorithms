//500. Keyboard Row
//given an array of strings words
//return the words that can be typed using letters of the alphabet on only one row of American keyboard
//in the American keyboard:
//the first consists of the characters "qwertyuiop"
//the second consists of the characters "asdfghjkl"
//the third consists of the characters "zxcvbnm"

//Approach:
//using recursion
var keyboardRow = (words) => {
    let row1 = new Set("qwertyuiop");
    let row2 = new Set("asdfghjkl");
    let row3 = new Set("zxcvbnm");
    let res = [];

    //seach each char in each row
    function beTyped(word, row) {
        for (let char of word) {
            if (!row.has(char.toLowerCase())) return false;
        }

        return true;
    }

    //search word in each row with recursion
    for (let word of words) {
        if (beTyped(word, row1) || beTyped(word, row2) || beTyped(word, row3)) res.push(word);
    }

    return res;
}
keyboardRow(["Hello","Alaska","Dad","Peace"]); //["Alaska","Dad"]
//              ^

//word = H e l l o          A l a s k a                D a d                    P e a c e
//       ^                  ^                          ^                        ^
//beTyped(Hello, row1)      beTyped(Alaska, row1)      beTyped(Dad, row1)       beTyped(Peace, row1)       
//h -> not in row1          a -> not in row1           d -> not in row1         p -> in row1
//false                     false                      false                    e -> in row1
//                                                                              a -> not in row1
//beTyped(Hello, row2)      beTyped(Alaska, row2)      beTyped(Dad, row2)  
//h -> in row2              a -> in row2               d -> in row2             beTyped(Peace, row2) 
//e -> not in row2          l -> in row2               a -> in row2             p -> not in row2
//false                     a -> in row2               d -> in row2             false
//                          s -> in row2               true                    
//beTyped(Hello, row3)      k -> in row2                                        beTyped(Peace, row3) 
//h -> not in row1          a -> in row2                                        p -> not in row3
//false                     true                                                false

//res = [ "Alaska", "Dad" ]

keyboardRow(["omk"]); //[]

keyboardRow(["adsdf","sfd"]); //["adsdf","sfd"]
