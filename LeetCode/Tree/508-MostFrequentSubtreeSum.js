//508. Most Frequent Subtree Sum
//given the root of a binary tree
//return the most frequent subtree sum
//if there is a tie, return all the values with the highest frequency in any order
//the subtree sum of a node is degined as the sum of all the node values fornmed by the subtree rooted at that node

//Approach:
//using DFS and map
var mostFrequentSubtreeSum = (root) => {
    let map = new Map();
    let res = [];
    let maxFreq = 0;

    //DFS
    function dfs(root) {
        //base case
        if (!root) return 0;

        let leftSum = dfs(root.left);
        let rightSum = dfs(root.right);
        let sum = root.val + leftSum + rightSum;
        let freq = (map.get(sum) || 0) + 1;

        //setting map
        map.set(sum, freq);

        //updating
        maxFreq = Math.max(maxFreq, freq);

        return sum;
    };

    dfs(root);

    //collecting all values with maxFreq
    for (let [sum, freq] of map) {
        if (freq === maxFreq) res.push(sum);
    }

    return res;
}
mostFrequentSubtreeSum([5,2,-3]); //[2, -3, 4]
//    5
//  2  -3

//starting with dfs([5, 2, -3]) -> Left: dfs([2]) = 2
//                                 Right: dfs([-3]) = -3

//traversing left first                    traversing right then
//dfs([2])    -> left: null                dfs([-3])  -> left: null
//               right: null                             right: null
//               sum = 2 + 0 + 0 = 2                     sum = -3 + 0 + 0 = -3
//               freq = 0 + 1 = 1                        freq = 0 + 1 = 1
//maxFreq = 0 -> (0, 1) = 1 -> (1, 1) = 1
//map = { 2: 1, -3: 1, }

//done traversing left & right child  
//dfs([5, 2, -3]) -> Left: dfs([2]) = 2
//                   Right: dfs([-3]) = -3
//                   sum = 5 + 2 - 3 = 4
//                   freq = 0 + 1 = 1
//maxFreq = 0 -> (0, 1) = 1 -> (1, 1) = 1 -> (1, 1) = 1
//map = { 2: 1, -3: 1, 4: 1}

//as maxFreq is 1 -> [2, -3, 4]

mostFrequentSubtreeSum([5,2,-5]); //[2]
//    5
//  2  -5

//starting with dfs([5, 2, -5]) -> Left: dfs([2]) = 2
//                                 Right: dfs([-5]) = -5

//traversing left first                    traversing right then
//dfs([2])    -> left: null                dfs([-5])  -> left: null
//               right: null                             right: null
//               sum = 2 + 0 + 0 = 2                     sum = -5 + 0 + 0 = -5
//               freq = 0 + 1 = 1                        freq = 0 + 1 = 1
//maxFreq = 0 -> (0, 1) = 1 -> (1, 1) = 1
//map = { 2: 1, -5: 1, }

//done traversing left & right child  
//dfs([5, 2, -5]) -> Left: dfs([2]) = 2
//                   Right: dfs([-5]) = -5
//                   sum = 5 + 2 - 5 = 2
//                   freq = 1 + 1 = 2 -> 2 is already in map so add 1
//maxFreq = 0 -> (0, 1) = 1 -> (1, 1) = 1 -> (1, 2) = 2
//map = { 2: 1 -> 2, -5: 1}

//as maxFreq is 2 -> [2]
