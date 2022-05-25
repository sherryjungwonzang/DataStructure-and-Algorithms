//AVL Binary Search Tree
function AVLTree (value) {
    this.left = null;
    this.right = null;
    this.value = value;
    this.depth = 1;
}

AVLTree.prototype.setDepthBasedOnChildren = () => {
    if (this.node == null) {
        this.depth = 0;
    } else {
        this.depth = 1;
    }

    if (this.left !== null) {
        this.depth = this.left.depth + 1;
    }

    if (this.right !== null && this.depth <= this.right.depth) {
        this.depth = this,right.depth + 1;
    }
}


//Single Rotation
//rotate left
AVLTree.prototype.rotateLL = () => {
    var valueBefore = this.value;
    var rightBefore = this.right;
    this.value = this.left.value;

    this.right = this.left;
    this.left = this.left.left;
    this.right.left = this.right.right;
    this.right.right = rightBefore;
    this.right.value = valueBefore;

    this.right.getDepthFromChildren();
    this.getDepthFromChildren();
};

//rotate right
AVLTree.prototype.rotateRR = () => {
    var valueBefore = this.value;
    var leftBefore = this.left;
    this.value = this.right.value;

    this.left = this.right;
    this.right = this.right.right;
    this.left.right = this.left.left;
    this.left.left = leftBefore;
    this.left.value = valueBefore;

    this.left.updateInNewLocation();
    this.updateInNewLocation();
};


//Double Rotation
//rotate right then left
//rotate left then right
//balancing the tree
AVLTree.prototype.balance = () => {
    var ldepth = this.left == null ? 0 : this.left.depth;
    var rdepth = this.right == null ? 0 : this.right.depth;

    if(ldepth > rdepth + 1) {
        //LL or LR rotation
        var lldepth = this.left.left == null ? 0 : this.left.left.depth;
        var lrdepth = this.left.right == null ? 0 : this.left.right.depth;

        if (lldepth < lrdepth) {
            //LR rotation consists of a RR rotation of the left child
            this.left.rotateRR();
        }
        this.rotateLL();
    } else if (ldepth + 1 < rdepth) {
        //RR or RL rotation
        var rrdepth = this.right.right == null ? 0 : this.right.right.depth;
        var rldepth = this.right.left == null ? 0 : this.right.left.depth;

        if (rldepth > rrdepth) {
            //RR rotation consists of a LL rotation of the right child
            this.right.rotateLL();
        }
        this.rotateRR();
    }
}

//Insertion
AVLTree.prototype.insert = (value) => {
    var childInserted = false;

    if (value == this.value) {
        return false;
    } else if (value < this.value) {
        if (this.left == null) {
            this.left = new AVLTree(value);
            childInserted = true;
        } else {
            childInserted = this.left.insert(value);
            if (childInserted == true) this.balance();
        }
    } else if (value > this.value) {
        if (this.right == null) {
            this.right = new AVLTree(value);
            childInserted = true;
        } else {
            childInserted = this.right.insert(value);
            if (childInserted == true) this.balance();
        }
    }
    if (childInserted == true) this.setDepthBasedOnChildren();
    return childInserted;
}
//Time Complexity: O(nlog2(n))
//Space Complexity: O(nlog2(n))

//Deletion
AVLTree.prototype.remove = (value) => {
    return deleteRecursively(this, value);

    function deleteRecursively(root, value) {
        if (!root) {
            return null;
        } else if (value < root.value) {
            root.left = deleteRecursively(root.left, value);
        } else if (value > root.value) {
            root.right = deleteRecursively(root.right, value);
        } else {
            //no child
            if (!root.left && !root.right) {
                return null; //case1
            } else if (!root.left) {
                root = root.right;
                return root;
            } else if (!root.right) {
                return root;
            } else {
                var temp = findMin(root.right);
                root.value = temp.value;
                root.right = deleteRecursively(root.right, temp.value);
                return root;
            }
        }
        root.updateInNewLocation();
        return root;
    }
    function findMin(root) {
        while(root.left) root = root.left;
        return root;
    }
}
//Time Complexity: O(nlog2(n))
//Space Complexity: O(nlog2(n))


//TEST
var avlTest = new AVLTree(1, "");
avlTest.insert(2);
avlTest.insert(3);
avlTest.insert(4);
avlTest.insert(5);
avlTest.insert(123);
avlTest.insert(203);
avlTest.insert(2222);
console.log(avlTest); //AVLTree { left: null, right: null, value: 1, depth: 1 }
