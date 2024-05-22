//100. Same Tree
//given the roots of two binary trees p and q
//ro check if they are the same or not
//two binary trees - considered the same if they are structually identical, and the nodes have the same value

//Approach:
//Recursive solution
//base case: pop this out of the recursive call stack
//recurrence relation: what is going to get us closer and closer to the base case after each kind of recursive call
var sameTree = (p, q) => {
    //base cases
    if (p === null && q === null) return true;
    if (p === null || q === null) return false;

    if (p.val === q.val) {
        return isSameTree(p.left, q.left) && isSameTree(p.right, q,right);
    }
    return false;
}
//TC: O(p + q) - worst case: all values are equal to each other, so need to iterate through each
//SC: O(1)

isSameTree([1,2,3], [1,2,3]); //true
//p.val = q.val 
//isSameTree(2, 2) && isSameTree(3,3)
//no more subtree - true

isSameTree([1,2], [1,null,2]); //false
//p.val = q.val
//isSameTree(2, null) && isSameTree(null, 2)
//p === 2 and q === null -> return false
// &&
//p === null and q === 2 -> return false
//false

isSameTree([1,2,1], [1,1,2]); //false
//p.val = q.val
//isSameTree(2, 1) && isSameTree(1, 2)
//p=2 !== q=1 -> return false
// &&
//p=1 !== q=2 -> return false
//false
