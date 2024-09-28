//1408. String Matching In An Array
//given an array of string words
//return all strings in words tht is a substring of another word
//can return the answer in any order

//Approach:
//using sorting
var stringMatching = (words) => {
    //sorting
    words.sort((a, b) => a.length - b.length);

    let res = [];

    for (let i = 0; i < words.length; i++) {
        let curr = words[i];

        //checking matching
        for (j = i + 1; j < words.length; j++) {
            if (words[j].includes(curr)) {
                res.push(curr);
                
                break;
            }
        }
    }

    return res;
}
stringMatching(words = ["mass","as","hero","superhero"]); //["as","hero"]
//sorting: ["as", "mass", "hero", "superhero"]

//["as", "mass", "hero", "superhero"]
// curr     j      j          j
//mass includes "as" || hero not includes "as" || superhero not includes "as" 
//res = [ "as", ]

//["as", "mass", "hero", "superhero"]
//        curr     j           j      
//hero not includes "mass" || superhero not includes "mass" 
//res = [ "as", ]

//["as", "mass", "hero", "superhero"]
//                curr         j    
//superhero includes "hero" 
//res = [ "as", "hero" ]

stringMatching(words = ["leetcode","et","code"]); //["et","code"]
//sorting: [ "et", "code", "leetcode" ]

//[ "et", "code", "leetcode" ]
//  curr     j          j         
//code not includes "et" || leetcode includes "et"
//res = [ "et", ]

//[ "et", "code", "leetcode" ]
//          curr      j        
//leetcode includes "code"
//res = [ "et", "code" ]

stringMatching(words = ["blue","green","bu"]); //[]
