//Binary Search Trees
function BinarySearchTree() {
    this._root = null;
}

//Insertion
BinarySearchTree.prototype.insert = (value) => {
    var thisNode = {left:null, right: null, value:value};

    if (!this._root) {
        //if there is no root value
        this._root = thisNode;
    } else {
        //loop traverse until
        var currentRoot = this._root;
        while(true) {
            if (currentRoot.value > value) {
                //incrementing if it is not a null and inserting if it is  a null
                if (currentRoot.left !== null) {
                    currentRoot = currentRoot.left;
                } else {
                    currentRoot.left = thisNode;
                    break;
                }
            } else if (currentRoot.value < value) {
                //if bigger than current, put it on the right
                //incrementing if it is not a null and inserting if it is a null
                if (currentRoot.right !== null) {
                    currentRoot = currentRoot.right;
                } else {
                    currentRoot.right = thisNode;
                    break;
                }
            } else {
                break; //case that both are the same
            }
        }
    }
}
//Time complexity: O(log2(n)) for balanced trees
//Time complexity: O(n) for unbalanced trees


//Deletion
//case1: the node has no children
//if the node has no child, return null
//case2: the node has one child
//if the noe has one child, return the existing child
//case3: the node has two children
//if the node has two children, either find the max of the left subtree or find the min of the right subtree to replace that node
BinarySearchTree.prototype.remove = (value) => {
    return deleteRecursively(this._root, value);

    function deleteRecursively(root, value) {
        if (!root) {
            return null;
        } else if (value < root.value) {
            root.left = deleteRecursively(root.left, value);
        } else if (value > root.value) {
            root.right = deleteRecursively(root.right, value);
        } else {
            //case1
            //no child
            if (!root.left && !root.right) {
                return null;
            } else if (!root.left) { //case2
                root = root.right;
                return root;
            } else if (!root.right) { //case2
                root = root.left;
                return root;
            } else {
                var temp = findMin(root.right); //case3
                root.value = temp.value;
                root.right = deleteRecursively(root.right, temp.value);
                return root;
            }
        }
        return root;
    }

    function findMin(root) {
        while(root.left) {
            root = root.left;
        }
        return root;
    }
}
//Time complexity: O(log2(n)) for balanced trees
//Time complexity: O(n) for unbalanced trees


//Search
//checking whether currentRoot is smaller or greater than the value to be searched
//if currentRott is smaller, the right child is visited
//if currentRoot is bigger, the left child is visited
BinarySearchTree.prototype.findNode = (value) => {
    var currentRoot = this._root;
    var found = false;

    while(currentRoot) {
        if(currentRoot.value > value) {
            currentRoot = currentRoot.left;
        } else if (currentRoot.value < value) {
            currentRoot = currentRoot.right;
        } else {
            //we've found the node
            found = true;
            break;
        }
    }
    return found;
}

var bst1 = new BinarySearchTree();
bst1.insert(1);
bst1.insert(3);
bst1.insert(2);
bst1.findNode(3); //true
bst1.findNode(6); //false

//Time complexity: O(log2(n)) for balanced trees
//Time complexity: O(n) for unbalanced trees
