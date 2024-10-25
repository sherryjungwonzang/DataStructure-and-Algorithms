//1367. Linked List In Binary Tree
//given a binary tree root and a linked list with head as the first node
//return true if all the elements in the linked list starting from the head correspond to some downward path connected in the binary tree otherwise return False
//in this context downward path means a path that starts at some node and goes downwards

//Approach:
//using BFS with queue
var linkedListBinaryTree = (head, root) => {
    let queue = [root];

    function bfs(treeNode, listNode) {
        //base case
        if (!treeNode) return false;
        if (treeNode.val !== listNode.val) return false;
        if (!listNode.next) return true;

        listNode = listNode.next;

        let left = bfs(treeNode.left, listNode);
        let right = bfs(treeNode.right, listNode);

        return left || right;
    }

    //BFS
    while (queue.length) {
        let curr = queue.shift();

        if (bfs(curr, head)) return true;

        //adding elements in the beginning
        if (curr.left) queue.unshift(curr.left);
        if (curr.right) queue.unshift(curr.right);
    }

    return false;
}
linkedListBinaryTree(head = [4,2,8], root = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]); //true
//         1 
//    4        4
//      2     2
//    1     6    8
//             1   3

//queue = [ [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3],  ] 
//curr = [ [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3], ]
//adding left and right to queue
//queue = [ [4,2,null,6,8,null,null,1,3], [4,null,2,1] ] 
//starting with bfs([4,2,null,6,8,null,null,1,3], [4,2,8]) = True
//treeNode != listNode -> 4 = 4
//listNode = [2,8]
//left = bfs([2,null,6,8,null,null,1,3], [2,8]) = True
//right = bfs(null, [2,8]) = False

//left side                                                     right side
//bfs([2,null,6,8,null,null,1,3], [2,8]) = True                 bfs(null, [2,8]) = False
//treeNode = listNode -> 2 = 2                                
//listNode = [8]                                                  
//left = bfs([6]], [8]) -> False                                                 
//right = bfs([8,1,3]], [8]) -> True                                             

//bfs([6]], [8]) = False                                
//treeNode != listNode -> 6 != 8                            
//listNode = []                     
                        

// bfs([8,1,3]], [8]) = True                                 
//treeNode = listNode -> 8 = 8
//listNode = []
//left = bfs([1]], []) -> True
//right = bfs([3], []) -> True

//True

linkedListBinaryTree(head = [1,4,2,6,8], root = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]); //false
//         1 
//    4        4
//      2     2
//    1     6    8
//             1   3

//queue = [ [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3],  ] 
//curr = [ [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3], ]
//starting with bfs([1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3], [4,2,8]) -> false
//listNode = [4,2,6,8]
//left = bfs([4,null,2,null,null,1], [4,2,6,8]) = False
//right = bfs([4,2,null,6,8,null,null,1,3], [4,2,6,8]) = False

//left side                                                     right side
//bfs([4,null,2,null,null,1], [4,2,6,8]) = False                bfs([4,2,null,6,8,null,null,1,3], [4,2,6,8]) = False
//treeNode = listNode -> 4 = 4                                  treeNode = listNode -> 4 = 4
//listNode = [2,6,8]                                            listNode = [2,6,8]
//left = bfs(null, [2,6,8]) -> False                            left = bfs([2,null,6,8,null,null,1,3]], [2,6,8]) -> False
//right = bfs([2,1], [2,6,8]) -> False                          right = bfs(null, [2,6,8]) -> False

//bfs([2,1], [2,6,8]) = False                                   bfs([2,null,6,8,null,null,1,3]], [2,6,8]) = False
//treeNode = listNode -> 2 = 2                                  treeNode = listNode -> 2 = 2      
//listNode = [6,8]                                              listNode = [6,8]
//left = bfs([1], [6,8]) -> false                               left = bfs([6], [6,8]) -> False
//right = bfs(null, [6,8]) -> false                             right = bfs([8,1,3], [6,8]) -> False

//bfs([1], [6,8]) -> 1 != 6                                     bfs([6], [6,8]) = False
//false                                                         treeNode = listNode -> 6 = 6
//                                                              listNode = [8]
//                                                              left = bfs(null, [8]) -> False
//                                                              right = bfs(null, [8]) -> False

//                                                              bfs([8,1,3], [6,8]): treeNode != listNode -> 8 != 6
//                                                              false                                   

//False

linkedListBinaryTree(head = [1,4,2,6], root = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]); //true

