//139. Word Break
//given a STRING 's' and a dictionary of strings 'wordDict'
//return true if s can be segmented into a space-separated sequence of one or more dictionary words
//note - that the same word in the dictionary may be reused multiple times in the segmentation

//Approach:
//BFS with Queue - will use this approach in this problem

//loop through string starting from index 0
//check all possible strings if we can find the words equal to 's' within the dictionary
//when we find the word -> add the ending index into queue
//shift off the queue to the next position
var wordBreak = (s, wordDict) => {
    let visited = new Set();
    let set = new Set(wordDict);
    let queue = [0];

    //BFS
    while(queue.length) {
        let curr = queue.shift();

        if (!visited.has(curr)) {
            for (let i = curr + 1; i <= s.length; i++) {
                if (set.has(s.slice(curr, i))) {
                    if (i === s.length) return true; //meaning we have reached the end of the string
                    queue.push(i);
                }
            }
        }
        visited.add(curr);
    }
    return false;
}
//TC: O(n^3) - looping through entire of string & check every single substring
//SC: O(n) - n is the value of indices we store within the queue
wordBreak("l e e t c o d e",  ["leet", "code"]); //true - because "leetcode" can be segmented as "leet code"
//visited = [ ]
//set = [ leet, code ]
//queue = [ 0 ]

//current = 0
//s.slice = (0, 1) -> l
//s.slice = (0, 2) -> le
//s.slice = (0, 3) -> lee
//s.slice = (0, 4) -> leet
//set.has: leet -> put 4 in queue and shift off 0 to visited
//visited = [ 0 ]
//queue = [ 4 ]
//4 !== s.length=8 -> continue

//s.slice = (0, 4) -> leet
//s.slice = (0, 5) -> leetc
//s.slice = (0, 6) -> leetco
//s.slice = (0, 7) -> leetcod
//s.slice = (0, 8) -> leetcode
//8 === s.length=8 -> end
//set.has -> NO

//restart from current = 4
//s.slice = (4, 5) -> c
//s.slice = (4, 6) -> co
//s.slice = (4, 7) -> cod
//s.slice = (4, 8) -> code
//set.has: code -> shift off 4 to visited
//visited = [ 0, 4 ]
//queue = [] - when queue is empty, everything is done
//8 === s.length=8 -> end
//return true

wordBreak("a p p l e p e n a p p l e", ["apple", "pen"]); //true - can be segmented as apple pen apple
//because "applepenapple" can be segmented as "apple pen apple".
//Note that you are allowed to reuse a dictionary word.

//visited = [ ]
//set = [ apple, pen ]
//queue = [ 0 ]

//s.slice = (0, 1) -> a
//s.slice = (0, 2) -> ap
//s.slice = (0, 3) -> app
//s.slice = (0, 4) -> appl
//s.slice = (0, 5) -> apple
//set.has: apple -> put 5 in queue and continue
//visited = [ 0 ]
//queue = [ 5 ]
//5 !== s.length = 13 -> continue

//s.slice = (0, 6) -> applep
//s.slice = (0, 7) -> applepe
//s.slice = (0, 8) -> applepen
//s.slice = (0, 9) -> applepena
//s.slice = (0, 10) -> applepenap
//s.slice = (0, 11) -> applepenapp
//s.slice = (0, 12) -> applepenappl
//s.slice = (0, 13) -> applepenapple
//13 === s.length = 13 -> the end
//set.has -> NO
//visited = [ 0 ]
//queue = [ 5 ]

//restart from current = 5
//s.slice = (5, 6) -> p
//s.slice = (5, 7) -> pe
//s.slice = (5, 8) -> pen
//set.has: pen -> put 8 in queue and continue
//visited = [ 0 5 ]
//queue = [ 8 ]

//s.slice = (5, 9) -> pena
//s.slice = (5, 10) -> penap
//s.slice = (5, 11) -> penapp
//s.slice = (5, 12) -> penappl
//s.slice = (5, 13) -> penapple
//13 === s.length = 13 -> the end
//set.has -> NO
//visited = [ 0 5 ]
//queue = [ 8 ]

//restart from current = 8
//s.slice = (8, 9) -> a
//s.slice = (8, 10) -> ap
//s.slice = (8, 11) -> app
//s.slice = (8, 12) -> appl
//s.slice = (8, 13) -> apple
//13 === s.length = 13 -> the end
//set.has -> apple
//visited = [ 0 5 8 ]
//queue = [  ]

wordBreak("c a t s a n d o g", ["cats", "dog", "sand", "and", "cat"]); //false
//visited = [ ]
//set = [ cats, dog, sand, and, cat ]
//queue = [ 0 ]

//s.slice = (0, 1) -> c
//s.slice = (0, 2) -> ca
//s.slice = (0, 3) -> cat
//set.has: cat -> put 3 in queue and continue
//visited = [ 0 ]
//queue = [ 3 ]
//3 !== s.length=9 -> continue

//s.slice = (0, 4) -> cats
//set.has: cats -> put 4 in queue and continue
//visited = [ 0 ]
//queue = [ 3 4 ]
//4 !== s.length=9 -> continue

//s.slice = (0, 5) -> catsa
//s.slice = (0, 6) -> catsan
//s.slice = (0, 7) -> catsand
//s.slice = (0, 8) -> catsando
//s.slice = (0, 9) -> catsandog

//restart from 3
//s.slice = (3, 4) -> s
//s.slice = (3, 5) -> sa
//s.slice = (3, 6) -> san
//s.slice = (3, 7) -> sand
//set.has: sand -> put 7 in queue and continue
//visited = [ 0 3 ]
//queue = [ 4 7 ]
//7 !== s.length=9 -> continue

//s.slice = (3, 8) -> sando
//s.slice = (3, 9) -> sandog

//restart from 4
//s.slice = (4, 5) -> a
//s.slice = (4, 6) -> an
//s.slice = (4, 7) -> and
//set.has: and -> put 7 in queue and continue
//visited = [ 0 3 4 ]
//queue = [ 7 7 ]
//7 !== s.length=9 -> continue

//s.slice = (4, 8) -> ando
//s.slice = (4, 9) -> andog

//restart from 7
//s.slice = (7, 8) -> o
//s.slice = (7, 9) -> og
//visited = [ 0 3 4 7 ]
//queue = [] - when queue is empty, everything is done
//9 === s.length=8 -> end
//return false - since we cannot find 'dogs'
