//748. Shortest Completing Word
//given a string licensePlate and an array of strings words
//find the shortest completing word in words

//a completing word is a word that contains all the letters in licensePlate
//ignore numbers and spaces in licensePlate and treat letters as case insensitive
//if a letter appears more than once in licenseplate, then it must appear in the word the same number of times or more

//for example, if licensePlate = "aBc 12c"
//then it contains letters 'a', 'b', and 'c' twice
//possible completing words are "abccdef", "caaacab", and "cbca"

//return the shortest completing word in words - it is guaranteed an answer exists
//if there are multiple shortest completing words, return the first one that occurs in words

//Approach:
//using regex
var shortestCompletingWord = (licensePlate, words) => {
    //removing all chars other than alphabet
    let license = licensePlate.toLowerCase().replace(/[\d\s]/g,''); 
    let sorted = [...words].sort((a, b) => a.length - b.length); //for searching shortest

    for (let word of sorted) {
        let copy = license;

        for (let i = 0; i < word.length; i++) {
            copy = copy.replace(word[i], ''); 

            if (!copy) return word; //meaning cmpleting words
        }
    }
}
shortestCompletingWord(licensePlate = "1s3 PSt", words = ["step","steps","stripe","stepple"]); //steps
//"1s3 PSt" -> to lowercase: "1s3 pst" -> regex: "spst"
//sorted: ["step", "steps", "stripe", "stepple"]
//           ^
//copy = spst
//i = 0
//copy = copy.replace(word[0], '') = (s, '') -> pst
//i = 1
//copy = copy.replace(word[1], '') = (t, '') -> ps
//i = 2
//copy = copy.replace(word[2], '') = (e, '') -> ps
//i = 3
//copy = copy.replace(word[3], '') = (p, '') -> s

//sorted: ["step", "steps", "stripe", "stepple"]
//                    ^
//copy = spst
//i = 0
//copy = copy.replace(word[0], '') = (s, '') -> pst
//i = 1
//copy = copy.replace(word[1], '') = (t, '') -> ps
//i = 2
//copy = copy.replace(word[2], '') = (e, '') -> ps
//i = 3
//copy = copy.replace(word[3], '') = (p, '') -> s
//i = 4
//copy = copy.replace(word[4], '') = (s, '') -> ' ' 
//return steps

shortestCompletingWord(licensePlate = "1s3 456", words = ["looks","pest","stew","show"]); //"pest"
//licensePlate only contains the letter 's'. All the words contain 's', but among these "pest", "stew", and "show" are shortest
//The answer is "pest" because it is the word that appears earliest of the 3

//"1s3 456" -> to lowercase: "1s3 456" -> regex: "s"
//sorted: ["pest", "stew", "show", "looks"]
//           ^
//copy = s
//i = 0
//copy = copy.replace(word[0], '') = (p, '') -> s
//i = 1
//copy = copy.replace(word[1], '') = (e, '') -> s
//i = 2
//copy = copy.replace(word[2], '') = (s, '') -> ' '
//return pest
