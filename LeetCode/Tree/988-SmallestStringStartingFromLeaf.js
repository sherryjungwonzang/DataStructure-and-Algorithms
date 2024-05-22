//988. Smallest String Starting from leaf
//given the root of a binary tree where each node has a value in the range [0, 25] - representing 'a' to 'z'
//return the lexicographically smallest string that starts at a leaf of this tree and ends at the root
//as a reminder, any shortet prefix of a string is lexicographically smaller
//for example, "ab" is lexicographically smaller than "aba"
//a leaf node is a node that has no children

//Approach:
//using DFS
var smallestStringFromLeaf = (root) => {
    let res = "";

    function dfs(node, path) {
        if (!node) return;

        path = String.fromCharCode(node.val + 97) + path; //97-"a", 98-"b", 99-"c", 100-"d"...

        //leaf node
        if (!node.left && !node.right) {
            if (!res || path < res) res = path;
        }

        //recursive calls
        dfs(node.left, path);
        dfs(node.right, path);
    }

    dfs(root, "");

    return res;
}
//TC: O(n) - the num of nodes in the tree
//SC: O(h) - the height of the tree
smallestStringFromLeaf([0,1,2,3,4,3,4]); //"dba"
//       a
//    b     c
//  d  e   d  e

smallestStringFromLeaf([25,1,3,1,3,0,2]); //"adz"
//       z
//    b     d
//  b  d   a  c

smallestStringFromLeaf([2,2,1,null,1,0,null,0]); //"abc"
//       c
//    c     b
//     b   a 
//   a
