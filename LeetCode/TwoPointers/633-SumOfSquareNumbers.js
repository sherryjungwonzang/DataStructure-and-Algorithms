//633. Sum of Square Numbers
//given a non-negative integer 'c'
//decide whether there are two integers a and b such that a^2 + b^2 = c

//Approach:
//using two pointers
var sumSquareNum = (c) => {
    //two pointers
    let left = 0;
    let right = Math.floor(Math.sqrt(c)); //the near number of sqrt from c

    while(left <= right) {
        let curr = left ** 2 + right ** 2;

        if (c > curr) {
            left += 1;
        } else if (c < curr) {
            right -= 1;
        } else { //c = curr
            return true;
        }
    }
    return false;
}
sumSquareNum(5); //true
//1 * 1 + 2 * 2 = 5

//left = 0, right = 2
//curr = 0 + 4 = 4
//c = 5 > curr = 4 -> left+1

//left = 1, right = 2
//curr = 1 + 4 = 5
//c = curr -> true

sumSquareNum(3); //false
