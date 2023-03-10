//Implement Trie (208)
//trie is a tree data structure used to efficiently store and retrieve keys in a dataset of strings
//there are various applications of this data structure, such as autocomplete and spellchecker
var Trie = () => {
  //initialize trie object
  this.root = {};
}

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = (word) => {
  let node = this.root;

  for (let c of word) {
    if (node[c] === null) node[c] = {};
    node = node[c];
  }
  node.isWord = true; //when it reaches the end of the word 
};

//traverse through both word and prefix
/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.traverse = (word) => {
    let node = this.root;

    for(let c of word) {
      node = node[c];
      if (node === null) return null;
    }
    return node;
};

//search if the word is within the trie
/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = (word) => {
  let node = this.traverse(word);

  return node !== null && node.isWord === true;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
//any descendant within the trie always has common ancestors
Trie.prototype.startsWith = (prefix) => {
    let node = this.traverse(prefix);
    
    return node !== null;
};

var trie = new Trie()
trie.insert("apple");
trie.traverse("apple");
trie.search("apple"); //true

trie.search("app"); //false
trie.startsWith("app"); //true
trie.insert("app");
trie.search("app"); //true
