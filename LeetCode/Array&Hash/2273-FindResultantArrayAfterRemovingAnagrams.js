//2273. Find Resultant Array After Removing Anagrams
//given a 0-indexed string array words where words[i] consists of lowercase Enlight letters
//in one operation, select any index i such that 0 < i < words.length and words[i - 1] and words[i] are anagrams and delete words[i] from words
//keep performing this operation as long as you can select an index that satifsied the conditions
//return words after performing all operations
//it can be shown that selecting the indices for each operation in any arbitrary order will lead to the same result

//Approach:
//using sorting
var resultantArr = (words) => {

    for (let i = 1; i < words.length;) {
        let curr = words[i].split('').sort().join();
        let prev = words[i - 1].split('').sort().join();

        //removing anagram
        curr === prev ? words.splice(i, 1) : i++;
    }

    return words;
}
resultantArr(["abba","baba","bbaa","cd","cd"]); //["abba","cd"]
//["abba", "baba", "bbaa", "cd", "cd"]
//           ^
//curr = "baba" -> [a, a, b, b]
//prev = "abba" -> [a, a, b, b]
//curr = prev -> remove [1] element

//["abba", "bbaa", "cd", "cd"]
//           ^
//curr = "bbaa" -> [a, a, b, b]
//prev = "abba" -> [a, a, b, b]
//curr = prev -> remove [1] element

//["abba", "cd", "cd"]
//           ^
//curr = "cd" -> [c, d]
//prev = "abba" -> [a, a, b, b]
//curr != prev -> i++

//["abba", "cd", "cd"]
//                 ^
//curr = "cd" -> [c, d]
//prev = "cd" -> [c, d]
//curr = prev -> remove [2] element

//["abba", "cd"]

resultantArr(["a","b","c","d","e"]); //["a","b","c","d","e"]
//["a", "b", "c", "d", "e"]
//       ^
//curr = "b" -> [b]
//prev = "a" -> [a]
//curr != prev -> i++

//["a", "b", "c", "d", "e"]
//            ^
//curr = "c" -> [c]
//prev = "b" -> [b]
//curr != prev -> i++

//["a", "b", "c", "d", "e"]
//                 ^
//curr = "d" -> [c]
//prev = "c" -> [b]
//curr != prev -> i++

//["a", "b", "c", "d", "e"]
//                      ^
//curr = "e" -> [c]
//prev = "d" -> [b]
//curr != prev -> i++

//["a", "b", "c", "d", "e"]


