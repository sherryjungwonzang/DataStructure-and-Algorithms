//824. Goat Latin
//given a string 'sentence' that consist of words separated by spaces
//each word consists of lowercase and uppercase letters only
//we would like to convert the sentence to 'Goat latin" with the rule as follows:
//if a word begins with a vowel ('a', 'e', 'i', 'o', or 'u'), append "ma" to the end of the word
//For example, the word "apple" becomes "applema"

//If a word begins with a consonant (i.e., not a vowel), remove the first letter and append it to the end, then add "ma"
//For example, the word "goat" becomes "oatgma"

//Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1
//For example, the first word gets "a" added to the end, the second word gets "aa" added to the end, and so on

//Return the final sentence representing the conversion from sentence to Goat Latin
var goatLatin = (sentence) => {
    let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let words = sentence.split(' ');

    return words.map((word, index) => 
            //the first letter is vowel
            vowels.has(word[0]) ? word + 'ma' + 'a'.repeat(index + 1)
                                 : word.slice(1) + word[0] + 'ma' + 'a'.repeat(index + 1) //not starting with vowel
            ).join(' ');
}
goatLatin(sentence = "I speak Goat Latin"); //"Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
//words = [I, speak, Goat, Latin]
//         ^
//I: has vowels on [0] -> I + ma + a = Imaaa

//words = [I, speak, Goat, Latin]
//              ^
//speak: has no vowels on [0] -> peak + s + ma + aa = peaksmaaa

//words = [I, speak, Goat, Latin]
//                    ^
//Goat: has no vowels on [0] -> oat + G + ma + aaa = oatGmaaaa

//words = [I, speak, Goat, Latin]
//                           ^
//Latin: has no vowels on [0] -> atin + L + ma + aaaa = atinLmaaaaa

//"Imaa peaksmaaa oatGmaaaa atinLmaaaaa"

goatLatin("The quick brown fox jumped over the lazy dog"); //"heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"
