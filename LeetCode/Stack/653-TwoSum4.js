//653. Two Sum IV - Input is a BST
//given the 'root' of a BST and an integer 'k'
//return true if there exist two elements in the BST such that their sum is equal to k
//or false otherwise

//Approach:
//using stack to track whether there is a sum that is equal to 'k'
var twoSum4 = (root, k) => {
    //base case
    if (!root) return false;

    const set = new Set(); //to track all elements
    const stack = [root]; //create stack with setting

    while(stack.length) {
        const node = stack.pop();

        if (set.has(k - node.val)) {
            return true;
        } else {
            set.add(node.val);
            if (node.right) stack.push(node.right);
            if (node.left) stack.push(node.left);
        }
    }
    return false;
}
twoSum4([5,3,6,2,4,null,7], 9); //true

twoSum4([5,3,6,2,4,null,7], 28); //false
