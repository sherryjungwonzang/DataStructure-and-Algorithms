//1367. Linked List In Binary Tree
//given a binary tree root and a linked list with head as the first node
//return true if all the elements in the linked list starting from the head correspond to some downward path connected in the binary tree otherwise return False
//in this context downward path means a path that starts at some node and goes downwards

//Approach:
//using DFS
var linkedListBinaryTree = (head, root) => {
    //DFS
    function dfs(head, curr, root) {
        //base case
        if (curr === null) return true;
        if (root === null) return false; //meaning at the end

        //matching
        if (curr.val === root.val) curr = curr.next;
        //new matching
        else if (head.val === root.val) head = head.next;
        //resetting pointer
        else curr = head;

        //recursive calls
        return dfs(head, curr, root.left) || dfs(head, curr, root.right);
    }

    return dfs(head, head, root);
}
//TC: O(n * m)
//SC: O(n)
linkedListBinaryTree(head = [4,2,8], root = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]); //true
//         1 
//    4        4
//      2     2
//    1     6    8
//             1   3

//starting with dfs([4,2,8], [4,2,8], [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3])
//curr val != root val -> 4 != 1
//curr = head -> [4, 2, 8]
//recursive calls -> dfs([4, 2, 8], [4, 2, 8], [4, 2, 1]) || dfs([4, 2, 8], [4, 2, 8], [4, 2, null, 6, 8, null, null, 1, 3])

//dfs([4, 2, 8], [4, 2, 8], [4, 2, null, 6, 8, null, null, 1, 3])
//curr val = root val -> 4 = 4
//curr = curr.next = [2, 8]
//recursive calls -> dfs([4, 2, 8], [2, 8], [2, null, 6, 8, null, null, 1, 3]) 

//dfs([4, 2, 8], [2, 8], [2, null, 6, 8, null, null, 1, 3]) 
//curr val = root val -> 2 = 2
//curr = curr.next = [8]
//recursive calls -> dfs([4, 2, 8], [8], [6]) || dfs([4, 2, 8], [8], [8, 1, 3])

//dfs([4, 2, 8], [8], [8, 1, 3])
//curr val = root val -> 8 = 8
//curr = curr.next = null
//recursive calls -> dfs([4, 2, 8], null, [1]) || dfs([4, 2, 8], null, [3])

//dfs([4, 2, 8], null, [1]) -> curr is null
//true

linkedListBinaryTree(head = [1,4,2,6,8], root = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]); //false

linkedListBinaryTree(head = [1,4,2,6], root = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]); //true
