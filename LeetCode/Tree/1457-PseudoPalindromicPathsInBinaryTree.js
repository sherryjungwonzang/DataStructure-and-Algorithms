//1457. Pseudo-Palindromic Paths In Binary Tree
//given a binary tree where node values are digits from 1 to 9
//a path in the binary tree is said to be pseudo-palindromic 
//if at least one permutation of the node values in the path is a palindrome
//return the number of pseudo-palindromic paths going from the root node to leaf nodes

//Approach:
//using DFS
var pseudoPalindromicPaths = (root) => {
    let count = 0;
    let arr = new Array(10).fill(0);

    //DFS
    function dfs(node, arr) {
        arr[node.val]++;

        //left and right node
        if (node.left) dfs(node.left, arr);
        if (node.right) dfs(node.right, arr);

        //leaf node
        if (!node.left && !node.right) {
            if (checkPalindrome(arr)) count++;
        }

        arr[node.val]--; //backtracking?
    };

    //checking palindrome
    function checkPalindrome(arr) {
        let odd = 0;

        for (let num of arr) {
            if (num % 2 !== 0) odd++;
        }

        if (odd === 1 || odd === 0) return true;
        else return false;
    };

    dfs(root, arr);

    return count;
}
pseudoPalindromicPaths([2,3,1,3,1,null,1]); //2 - [2,3,3] can be rearranged in [3,2,3] & [2,1,1] can be rearranged [1,2,1]
//      2
//    3   1
//  3  1    1

pseudoPalindromicPaths([2,1,1,1,3,null,null,null,null,null,1]); //1 - [2,1,1] can be rearranged in [1,2,1]
//      2
//    1   1
//  1  3    
//       1


pseudoPalindromicPaths([9]); // 1
