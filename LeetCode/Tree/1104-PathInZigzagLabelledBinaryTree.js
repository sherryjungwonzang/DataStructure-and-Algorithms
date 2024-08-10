//1104. Path In Zigzag Labelled Binary Tree
//in an infinite binary tree where every node has two children, the nodes are labelled in row order
//in the odd numbered rows, the labelling is left to right
//in the even numbered rows, the labelling is right to left

//given the label of a node in this tree
//return the labels in the path from the root of the tree to the node with that label
var zigzagLabelledBinaryTree = (label) => {
    let level = 1; //the last level
    let num = 1; 
    let levelCount = 1;  

    //to find the last level
    while (num < label) { 
        levelCount *= 2; //indicating the first element on each level
        num += levelCount; //indicating the last element on each level
        level += 1; //the num of level
    };

    let res = [label];

    //starting from the previous level from the last level
    while (--level) {
        let levelEnd = 2 ** (level) - 1;
        let levelStart = 2 ** (level - 1);
        let target = Math.floor(label / 2); //the element right top from label

        target = levelEnd + levelStart - target;
        label = target;
        res.push(target);
    };

    return res.reverse();
}
//->                                   1
//                    3                               2               <-
//->        4                5                6               7
//      15      14       13      12       11      10       9       8   <-
//->  16  17  18  19   20  21  22  23   24  25  26  27   28  29  30  31

zigzagLabelledBinaryTree(14); //[1,3,4,14]
//level = 1 -> 2 -> 3 -> 4
//firstElement = 1 -> 3 -> 7 -> 15
//lastElement = 1 -> 2 -> 4 -> 8

//res = [16, ]
//starting from level 3
//levelEnd = 2^3 - 1 = 7
//levelStart = 2^2 = 4
//target = floor(14/2) = 7 -> 4
//label = 14 -> 4
//res = [16, 4, ]

//level 2
//levelEnd = 2^3 - 1 = 7 -> 2^2 - 1 = 3
//levelStart = 2^2 = 4 -> 2^1 = 2
//target = floor(14/2) = 7 -> 4 -> floor(4/2) = 2 -> 3
//label = 14 -> 4 -> 3
//res = [16, 4, 3, ]

//level 1
//levelEnd = 2^3 - 1 = 7 -> 2^2 - 1 = 3 -> 2^1 - 1 = 1
//levelStart = 2^2 = 4 -> 2^1 = 2 -> 2^0 = 1
//target = floor(14/2) = 7 -> 4 -> floor(4/2) = 2 -> 3 -> floor(3/2) = 1 -> 1
//label = 14 -> 4 -> 3 -> 1
//res = [16, 4, 3, 1]
//reverse: [1, 3, 4, 16]

zigzagLabelledBinaryTree(26); //[1,2,6,10,26]
