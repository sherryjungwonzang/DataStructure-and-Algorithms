//Word Ladder(127)
//a tranformation sequence from word 'beginWord' to word 'endWord' using a dictionary 'wordList' is a sequence of words
//beginWord -> s1 -> s2 -> ... -> sk

//every adjacent pair of words differs by a single letter
//every s1 for 1 <= i <= k is in wordList - note that beginWord does not need to be in wordList
//sk === endWord

//given two words, beginWord and endWord and a dictionary wordList
//return the number of words in the shortest transformation sequence from beginWord to endWord
//or 0 if no such sequence exists

//Approach:
//using BFS with Queue
//separating out -> go through all letters of alphabet 
//-> update each one of letters to all the potential solutions within the alphabet -> compare with what we have in wordList
var wordLadder = (beginWord, endWord, wordList) => {
  //making to Set of wordList
  let set = new Set(wordList);
  //setting queue with beginWord and count of wordList in Set
  let queue = [[beginWord, 1]];


  while(queue.length) {
    //shift off the current word and count
    let [currWord, count] = queue.shift();

    if (currWord === endWord) {
      return count;
    }

    //look at each individual character and update it with every character from A-Z
    for (let i = 0; i < 26; i++) { //loop through all alphabet
      for (let j = 0; j < currWord.length; j++) { //loop through current word
        //String.fromCharCode(): return a string created from the specified sequence of UTF-16 code units
        let letter = String.fromCharCode(97 + i); //(97) = a | (97 + i) = a to z
        //need to slice as newWord
        let newWord = currWord.slice(0, j) + letter + currWord.slice(j + 1);

        if (set.has(newWord)) {
          queue.push([newWord, count + 1]);
          set.delete(newWord);
        }
      }
    }
  }
  return 0;
}
wordLadder("hit", "cog", ["hot","dot","dog","lot","log","cog"]); //5 - One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.
//set = [hot dot dog lot log cog]
//queue = [[hit, 1], ]

//shift off
//currWord = h i t, count = 1
//i = 0 ... 25
//           j
//letter = (97 + 0) = a
//newWord = currWord.slice(0, 0) + letter + currWord.slice(0 + 1) = a i t
//...comparing...

wordLadder("hit", "cog", ["hot","dot","dog","lot","log"]); //0 - The endWord "cog" is not in wordList, therefore there is no valid transformation sequence
