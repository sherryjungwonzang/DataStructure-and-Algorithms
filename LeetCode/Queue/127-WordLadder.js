//127. Word Ladder
//a transformation sequence from word 'beginWord' to word 'endWord' using a dictionary 'wordList' is a sequence of words beginWord -> s1 -> s2 -> ... -> sk
//every adjacent pair of words differs by a single letter
//every si for 1 <= i <= k is in wordList - note that beginWord does not need to be in wordList
//sk === endWord

//given two words, beginWord and endWord and a dictionary wordList
//return the number of words in the shortest transformation sequence from beginWord to endWord or 0 if no such sequence exists

//Approach:
//using BFS with queue
var wordLadder = (beginWord, endWord, wordList) => {
    let set = new Set(wordList);
    let queue = [[beginWord, 1]]; //[the first word, sequence]

    //BFS
    while (queue.length) {
        let [currWord, count] = queue.shift(); //curr

        //base case
        if (currWord === endWord) return count;

        //checking all alphabet whether there is anything can be changed
        for (let i = 0; i < 26; i++) {
            for (let j = 0; j < currWord.length; j++) {
                //going through 'a' to 'z'
                let letter = String.fromCharCode(97 + i); //String.fromCharCode(97) = 'a'

                //making a new word from checking a - z
                let newWord = currWord.slice(0, j) + letter + currWord.slice(j + 1);

                if (set.has(newWord)) {
                    queue.push([newWord, count + 1]);

                    set.delete(newWord); //for avoiding duplicate checkiong
                }
            }
        }
    }

    return 0;
}
//TC: O(m^2 x n)
//SC: O(m^2 x n)
wordLadder(beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]); //5 
//One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long

//set = { "hot", "dot", "dog", "lot", "log", "cog" }
//queue = [ ["hit", 1] ]
//curr = ["hit", 1] 

//i = 0, j = 0                       |i = 0, j = 1                        |i = 0, j = 2
//                                  letter = fromCharCode(97) = 'a'
//newWord = 'a' + 'it' = 'ait'       |newWord = 'h' + 'a' + 't' = 'hat'   |newWord = 'hi' + 'a' = 'hia'
//...

//queue = [ ["hit", 1], [hot, 2], [dot, 3], [log, 4], [dog, 5], [cog, 5] ]

wordLadder(beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]); //0
//The endWord "cog" is not in wordList, therefore there is no valid transformation sequence
