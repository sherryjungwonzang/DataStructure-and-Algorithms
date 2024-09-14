//1379. Find Corresponding Node Of Binary Tree In Clone Of That Tree
//given two binary trees original and closed and given a reference to a node target in the original tree
//the cloned tree is a copy of the original tree
//return a reference to the same node in the cloned tree
//not allowed to change any of the two trees or the target node 
//and the answer must be a reference to a node in the cloned tree

//Approach:
//using DFS with recursion
var getTargetCopy = (original, cloned, target) => {

    //DFS
    function dfs(original, clone) {
        //base case
        if (!original) return;
        if (original === target) return clone;

        return dfs(original.left, clone.left, target) || dfs(original.right, clone.right, target);
    }

    return dfs(original, cloned);
}
getTargetCopy(tree = [7,4,3,null,null,6,19], target = 3); //3
//      7
//   4    3
//      6  19

//starting with dfs([7,4,3,null,null,6,19], [7,4,3,null,null,6,19], 3)
//7 != target
//left: dfs([4], [4], 3)
//right: dfs([3, 6, 19], [3, 6, 19], 3)

//dfs([4], [4], 3)
//4 != target
//no child

//dfs([3, 6, 19], [3, 6, 19], 3)
//3 = target

getTargetCopy(tree = [7], target =  7); //7

getTargetCopy(tree = [8,null,6,null,5,null,4,null,3,null,2,null,1], target = 4); //4
//  8
//   6
//    5
//     4
//      3
//       2
//        1

//starting with dfs([8,null,6,null,5,null,4,null,3,null,2,null,1], [8,null,6,null,5,null,4,null,3,null,2,null,1], 4)
//8 != target
//left: []
//right: dfs([6,null,5,null,4,null,3,null,2,null,1],[6,null,5,null,4,null,3,null,2,null,1],4)

//dfs([6,null,5,null,4,null,3,null,2,null,1],[6,null,5,null,4,null,3,null,2,null,1],4)
//6 != target
//left: []
//right: dfs([5,null,4,null,3,null,2,null,1],[5,null,4,null,3,null,2,null,1],4)

//dfs([5,null,4,null,3,null,2,null,1],[5,null,4,null,3,null,2,null,1],4)
//5 != target
//left: []
//right: dfs([4,null,3,null,2,null,1],[4,null,3,null,2,null,1],4)

//dfs([4,null,3,null,2,null,1],[4,null,3,null,2,null,1],4)
//4 = target
