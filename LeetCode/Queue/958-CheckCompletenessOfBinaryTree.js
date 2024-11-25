//958. Check Completeness Of Binary Tree
//giventhe root of a binary tree, determine if it is a complete binary tree
//in a complete binary tree, every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible
//it can have between 1 and 2h nodes inclusive at the last level h

//Approach:
//using BFS
var completenessBinaryTree = (root) => {
    let prev = root; 
    let queue = [root];

    //BFS
    while (queue.length) {
        let curr = queue.shift();

        if (curr !== null) {
            //non-completeness
            if (prev === null) return false;

            //recursive calls on child
            queue.push(curr.left);
            queue.push(curr.right);
        }

        //updating
        prev = curr;
    }

    return true;
}
completenessBinaryTree([1,2,3,4,5,6]); //true
//      1
//   2     3
// 4  5   6

//prev = [1,2,3,4,5,6]
//queue = [ [1,2,3,4,5,6] ]
//curr = [1,2,3,4,5,6]
//recursive call on left and right
//queue = [ [2,4,5], [3,6] ]
//prev = [1,2,3,4,5,6] -> [1,2,3,4,5,6]

//prev = [1,2,3,4,5,6]
//queue = [ [2,4,5], [3,6] ]]               queue = [ [3,6] || [4], [5] ]
//curr = [1,2,3,4,5,6], [2,4,5]             curr = [1,2,3,4,5,6], [2,4,5], [3,6]
//recursive call on left and right          recursive call on left and right
//queue = [ [3,6] || [4], [5] ]             queue = [ [4], [5], [3], [6] ]
//prev = [1,2,3,4,5,6] -> [2,4,5]           -> [3,6]

//prev = [3,6]
//queue = [ [4], [5], [3], [6] ]                    queue = [ [5], [3], [6] ]                                   queue = [ [3], [6] ]                                            queue = [ [6] ] 
//curr = [1,2,3,4,5,6], [2,4,5], [3,6], [4]         curr = [1,2,3,4,5,6], [2,4,5], [3,6], [4], [5]              curr = [1,2,3,4,5,6], [2,4,5], [3,6], [4], [5], [3]             curr = [1,2,3,4,5,6], [2,4,5], [3,6], [4], [5], [3], [6]
//recursive call on left and right                  recursive call on left and right                            recursive call on left and right                                recursive call on left and right  
//queue = [ [5], [3], [6] ]                         queue = [ [3], [6] ]                                        queue = [ [6] ]                                                 queue = [ ] 
//prev = [3,6] -> [4]                               -> [5]                                                      -> [3]                                                          -> [6]

//true

completenessBinaryTree([1,2,3,4,5,null,7]); //false
//      1
//   2     3
// 4  5     7

//prev = [1,2,3,4,5,null,7]
//queue = [ [1,2,3,4,5,null,7] ]
//curr = [1,2,3,4,5,null,7]
//recursive call on left and right
//queue = [ [2,4,5], [3,null,7] ]
//prev = [1,2,3,4,5,null,7] -> [1,2,3,4,5,null,7]

//prev = [1,2,3,4,5,null,7] 
//queue = [ [2,4,5], [3,null,7] ]               queue = [ [3,null,7] || [4], [5] ]
//curr = [1,2,3,4,5,null,7], [2,4,5]            curr = [1,2,3,4,5,null,7], [2,4,5], [3,null,7]   
//recursive call on left and right              recursive call on left and right
//queue = [ [3,null,7] || [4], [5] ]            queue = [ [4], [5], null, [7] ]
//prev = [1,2,3,4,5,null,7] -> [2,4,5]          -> [3,null,7]

//prev =  [3,null,7]
//queue = [ [4], [5], null, [7] ]                               queue = [ [5], null, [7] ]                                          queue = [ null, [7] ]                                                   queue = [ [7] ]
//curr = [1,2,3,4,5,null,7], [2,4,5], [3,null,7], [4]           curr = [1,2,3,4,5,null,7], [2,4,5], [3,null,7], [4], [5]            curr = [1,2,3,4,5,null,7], [2,4,5], [3,null,7], [4], [5], null          curr = [1,2,3,4,5,null,7], [2,4,5], [3,null,7], [4], [5], null
//recursive call on left and right                              recursive call on left and right                                    recursive call on left and right                                        recursive call on left and right 
//queue = [ [5], null, [7] ]                                    queue = [ null, [7] ]                                               queue = [ [7] ]                                                         queue = [ ]
//prev =  [3,null,7] -> [4]                                     -> [5]                                                              -> null                                                                 prev is null -> false

//False
