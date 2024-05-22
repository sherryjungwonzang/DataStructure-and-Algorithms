//437. Path Sum3
//given the 'root' of a binary tree and an integer 'targetSum'
//return the num of paths where the sum of the values along the path equals to 'targetSum'
//the path does not need to start or end at the root or a leaf, but it must go downwards
//ie, traveling only from parent nodes to child nodes

//Approach:
//using DFS with recursive call and map
var pathSum3 = (root, targetSum) => {
    let res = 0;
    let map = {};

    //DFS
    function dfs(root, pathSum) {
        //base case
        if (!root) return null;

        pathSum += root.val; //curr pathSum

        if (pathSum === targetSum) res++; //find the targetSum
        //checking the frequency of targetSum in curr path
        if (map[pathSum - targetSum]) res += map[pathSum - targetSum];
        //setting map with frquency
        if (map[pathSum]) {
            map[pathSum]++;
        } else {
            map[pathSum] = 1;
        }

        //recursive calls
        if (root.left) dfs(root.left, pathSum);
        if (root.right) dfs(root.right, pathSum);

        //visited
        map[pathSum]--;
    };

    dfs(root, 0);

    return res;
}
//TC: O(n)
//SC: O(n)
pathSum3(root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8); //3 - the paths that sum to 8 are shown
//       10
//     5   -3
//   3   2   11
// 3  -2  1

pathSum3(root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22); //3
