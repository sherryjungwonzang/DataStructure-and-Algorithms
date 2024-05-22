//211. Design Add and Search Words Data struture
//design a data structure that supports adding new words and finding if a string matches any previously added string

//Approach:
//Using Trie structure
var WordDictionary = () => {
    this.trie = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = (word) => {
    let node = this.trie;

    for (let char of word) {
      if (node[char] === null) node[char] = {}; //if there is no node, add {}
      node = node[char];
    }
    node.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
//will recursive call through the entire trie
//compare it with the word either return true or false
WordDictionary.prototype.dfs = (word, trie, index) => {
    //base case
    if (word.length === index) {
      return trie.isEnd ? true : false;
    }
  
    //need to get char
    let char = word[index];
  
    if (char === ".") { //. is the wildcard
      //need to loop through the keys within the trie
      for (let key in trie) { //when recursing to each of these keys
        if (this.dfs(word, trie[key], index + 1)) return true;  
      }
    } else { //not wildcard
      //need to check the character is within the trie
      if (trie[char] !== null) { //then we can carry out the search
        this.dfs(word, trie[char], index + 1);
      }
    }
    return false;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = (word) => {
    //using recursion
    return this.dfs(word, this.trie, 0); 
};

var wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
wordDictionary.search("pad"); // return False
wordDictionary.search("bad"); // return True
wordDictionary.search(".ad"); // return True
wordDictionary.search("b.."); // return True
