//Word Break(139)
//given a string 's' and a dictionary of strings 'wordDict'
//return true if s can be segmented into a space-separated sequence of one or more dictionaty words
//the same wod in the dictionary may be reused multiple times in the segmentation
var wordBreak = (s, wordDict) => {
  //create two Sets - visited and se
  let visited = new Set();
  let set = new Set(wordDict);
  let queue= [0]; //initialize the queue for BFS

  //starting BFS
  while(queue.length) {
    let current = queue.shift();

    if (!visited.has(current)) { //if we don't carry this out
      for (let i = current + 1; i <= s.length; i++) {
        //create substrings with slice() method
        if (set.has(s.slice(current, i))) {
          if (i === s.length) {
            return true; //meaning we have reached the end of the string
          }
          //otherwise
          queue.push(i);
        }
      }
      visited.add(current);
    }
  }
  //when the queue is empty - we will get out off this while loop
  return false;
}
wordDict("l e e t c o d e",  ["leet", "code"]); //true
//visited = [ ]
//set = [ leet, code ]
//queue = [ 0 ]

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
//set.has -> NO

//restart from 4
//s.slice = (4, 5) -> c
//s.slice = (4, 6) -> co
//s.slice = (4, 7) -> cod
//s.slice = (4, 8) -> code
//set.has: code -> shift off 4 to visited
//visited = [ 0, 4 ]
//queue = [] - when queue is empty, everything is done
//8 === s.length=8 -> end
//return true


wordDict("applepenapple", ["apple", "pen"]); //true - can be segmented as apple pen apple

wordDict("c a t s a n d o g", ["cats", "dog", "sand", "and", "cat"]); //false
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







