//1305. All Elements In Two BSTs
//given two binary search trees root1 and root2
//return a list containing all the integers from both trees sorted in ascending order

//Approach:
//using inorder traveral and recursion
var allElementsBSTs = (root1, root2) => {
    let arr = [];

    function inorder(root, arr) {
        //base case
        if (root == undefined) return;

        //left-root-right
        inorder(root.left, arr);
        arr.push(root.val);
        inorder(root.right, arr);
    };

    //inorder traversal implement
    inorder(root1, arr);
    inorder(root2, arr);

    //sorting
    arr.sort((a, b) => a - b);

    return arr;
}
//TC: O(n)
//SC: O(n)
allElementsBSTs(root1 = [2,1,4], root2 = [1,0,3]); //[0,1,1,2,3,4]
//    2         1
//  1   4     0   3

//starting with inorder([2,1,4], []) & inorder([1,0,3], [])
//inorder([2,1,4], []) -> L: inorder([1], [])                        inorder([1,0,3], [1, 2, 4]) -> L: inorder([0], [1, 2, 4])  

//2's left first                                                     1's left first
//inorder([1], []) -> L: inorder(null, [])                           inorder([0], [1, 2, 4]) -> L: inorder(null, [1, 2, 4])
//                 -> arr = [] -> [1]                                                        -> arr = [1, 2, 4] -> [1, 2, 4, 0]
//                 -> R: inorder(null, [])                                                   -> R: inorder(null, [1, 2, 4])

//adding root to arr -> arr = [1] -> [1, 2]                          adding root to arr -> arr = [1, 2, 4, 0] -> [1, 2, 4, 0, 1]

//2's right then                                                     1's right then
//inorder([4], [1, 2]) -> L: inorder(null, [1, 2])                   inorder([3], [1, 2, 4, 0, 1]) -> L: inorder(null, [1, 2, 4, 0, 1])
//                  -> arr = [1, 2] -> [1, 2, 4]                                                   -> arr = [1, 2, 4, 0, 1] -> [1, 2, 4, 0, 1, 3]
//                  -> R: inorder(null, [1, 2])                                                    -> R: inorder(null, [1, 2, 4, 0, 1])
//arr = [1, 2, 4]                                                    arr = [1, 2, 4, 0, 1, 3]

//sorting: [1, 2, 4, 0, 1, 3] -> [0, 1, 1, 2, 3, 4]

allElementsBSTs(root1 = [1,null,8], root2 = [8,1]); //[1,1,8,8]
//    1         8
//      8     1   

//starting with inorder([1,null,8], []) & inorder([8,1], [])
//inorder([1,null,8], []) -> L: inorder(null, [])                        inorder([8,1], []) -> L: inorder([1], [1, 8])  

//1's left first                                                         8's left first
//null                                                                   inorder([1], [1, 8]) -> L: inorder(null, [1, 8])
//                                                                                            -> arr = [1, 8] -> [1, 8, 1]
//adding root to arr -> arr = [] -> [1]                                                       -> R: inorder(null, [1, 8])
//                                                      
//1's right then                                                         adding root to arr -> arr = [1, 8, 1] -> [1, 8, 1, 8]  
//inorder([8]], [1])  -> L: inorder(null, [1])                      
//                    -> arr = [1] -> [1, 8]                             8's right then   
//                    -> R: inorder(null, [1])                           null                                                
//arr = [1, 8]                                                           arr = [1, 8, 1, 8]  

//sorting: [1, 8, 1, 8] -> [1, 1, 8, 8]
