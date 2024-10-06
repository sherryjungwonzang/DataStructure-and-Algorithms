//337. House Robber3
//the thief has found himself a new place for his thievery again
//there is only one entrance to this area, called root

//besides the root, each house has one and only one parent house
//after a tour, the smart thief realized that all houses in this place form a binary tree
//it will automatically contact the police if two-directly linked houses were broken into on the same night

//given the root of the binary tree
//return the max amount of money the thief can rob without alerting the police

//Approach:
//using DFS
var houseRobber3 = (root) => {

    //DFS
    function dfs(root) {
        //base case
        if (!root) return [0, 0]; //[rob, not]

        //child
        let left = dfs(root.left);
        let right = dfs(root.right);

        //robbing the root - cannot rob its leaves
        let includeRoot = root.val + left[1] + right[1];

        //not robbing the root - max from combinations leaves
        let excludeRoot = Math.max(...left) + Math.max(...right);

        return [includeRoot, excludeRoot];
    }

    return Math.max(...dfs(root));
}
houseRobber3([3,2,3,null,3,null,1]); //7 - 3 + 3 + 1 = 7
//     3
//  2     3
//    3     1

//starting with 3
//left: dfs([2, null, 3]) = [2, 3]
//right: dfs([3, null, 1]) = [3, 1]

//traversing left first                                         traversing right then
//dfs([2, null, 3]) -> left: dfs(null)                          dfs([3, null, 1]) -> left: dfs(null)
//                     right: dfs([3]) = [3, 0]                                      right: dfs([1]) = [1, 0] 

//left's right child                                            right's right child
//dfs([3]) -> left: null                                        dfs([1]) -> left: null
//            right: null                                                   right: null
//robbing root: 3 + 0 + 0 = 3                                   robbing root: 1 + 0 + 0 = 1
//not robbing root: max(0) + max(0) = 0                         not robbing root: max(0) + max(0) = 0
//[3, 0]                                                        [1, 0]

//done traversing left child                                    done traversing right child
//dfs([2, null, 3]) -> left: dfs(null) = [0, 0]                 dfs([3, null, 1]) -> left: dfs(null) = [0, 0]
//                      right: dfs([3]) = [3, 0]                                     right: dfs([1]) = [1, 0]
//robbing root: 2 + 0 + 0 = 2                                   robbing root: 3 + 0 + 0 = 3
//not robbing root: max([0, 0]) + max([3, 0]) = 3               not robbing root: max([0, 0]) + max([1, 1]) = 1
//[2, 3]                                                        [3, 1]

//done traversing left & right child  
//left: dfs([2, null, 3]) = [2, 3]
//right: dfs([3, null, 1]) = [3, 1]
//robbing root: 3 + 3 + 1 = 7                   
//not robbing root: max([2, 3]) + max([3, 1]) = 3 6
//max(7, 6) = 7

houseRobber3([3,4,5,1,3,null,1]); //9 - 4 + 5 = 9
//     3
//  4     5
// 1  3     1

//starting with 3
//left: dfs([4, 1, 3]) = [4, 4]
//right: dfs([5, null, 1]) = [5, 1]

//traversing left first                                         traversing right then
//dfs([4, 1, 3])    -> left: dfs([1]]) = [1, 0]                 dfs([5, null, 1])  -> left: dfs(null)
//                     right: dfs([3]) = [3, 0]                                       right: dfs([1]) = [1, 0] 

//left's left child                                            
//dfs([1]) -> left: null                                        
//            right: null                                   
//robbing root: 1 + 0 + 0 = 1                                 
//not robbing root: max(0) + max(0) = 0                     
//[1, 0] 

//left's right child                                            right's right child
//dfs([3]) -> left: null                                        dfs([1]) -> left: null
//            right: null                                                   right: null
//robbing root: 3 + 0 + 0 = 3                                   robbing root: 1 + 0 + 0 = 1
//not robbing root: max(0) + max(0) = 0                         not robbing root: max(0) + max(0) = 0
//[3, 0]                                                        [1, 0]

//done traversing left child                                    done traversing right child
//dfs([4, 1, 3])  -> left: dfs([1]]) = [1, 0]                   dfs([5, null, 1])  -> left: dfs(null) = [0, 0]
//                   right: dfs([3]) = [3, 0]                                         right: dfs([1]) = [1, 0]
//robbing root: 4 + 0 + 0 = 4                                   robbing root: 5 + 0 + 0 = 5
//not robbing root: max([1, 0]) + max([3, 0]) = 4               not robbing root: max([0, 0]) + max([1, 0]) = 1
//[4, 4]                                                        [5, 1]

//done traversing left & right child  
//left: dfs([4, 1, 3]) = [4, 4]
//right: dfs([5, null, 1]) = [5, 1]
//robbing root: 3 + 4 + 1 = 8
//not robbing root: max([4, 4]) + max([5, 1]) = 9
//max(8, 9) = 9
