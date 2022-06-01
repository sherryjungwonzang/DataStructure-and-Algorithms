//Trie
//for searching strings and matching on stored strings
//at each level, nodes can branch off to form complete words
//using a nested object where each level has its direct children as keys
function TrieNode() {
    this.children = {}; //table
    this.endOfWord = false;
}

function Trie() {
    this.root = new TrieNode();
}

//Insertion into the Trie
//the child trie node is created on the root if it does not exist already
Trie.prototype.insert = (word) => {
    var current = this.root;

    for (var i = 0; i < word.length; i++) {
        var ch = word.charAt(i);
        var node = current.children[ch];
        if (node == null) {
            node = new TrieNode();
            current.children[ch] = node;
        }
        current = node;
    }
    current.endOfWord = true; //mark the current nodes endofword as true
}

//Search 
//each character of the word must be checked
//done by setting a temporary variable of 'current' on the root
//the 'current' variable us updated as each character in the word is checked
Trie.prototype.search = (word) => {
    var current = this.root;
    for (var i = 0; i < word.length; i++) {
        var ch = word.charAt(i);
        var node = current.children[ch];
        if (node == null) {
            return false; //node doesn't exist
        }
        current = node;
    }
    return current.endOfWord;
}
var trie = new Trie();
trie.insert("sammie");
trie.insert("simran");
console.log(trie.search("simran")); //true
console.log(trie.search("fake")); //false
console.log(trie.search("sam")); //false


//Deletion element from a trie
//should traverse the root node until it reaches the last character of the word
//then for each node that does not have any other children, the node should be deleted
Trie.prototype.delete = (word) => {
    this.deleteRecursively(this.root, word, 0);
}

Trie.prototype.deleteRecursively = (current, word, index) => {
    if (index == word.length) {
        //when end of word is reached only delete if current,endOfWord is true
        if (!current.endOfWord) return false;
        current.endOfWord = false;

        //if current has no other mapping then return true
        return Object.keys(current.children).length == 0;
    }

    var ch = word.charAt(index);
    var node = current.children[ch];
    if (node == null) return false;
    var shouldDeleteCurrentNode = this.deleteRecursively(node, word, index+1);

    //if true is returned
    //then delete the mapping of character and trienode reference
    if (shouldDeleteCurrentNode) {
        delete current.children[ch];
        //return true if no mappings are left in the map
        return Object.keys(current.children).length == 0;
    }
    return false;
}
