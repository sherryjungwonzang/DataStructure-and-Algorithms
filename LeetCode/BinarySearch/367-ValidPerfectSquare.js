//367.Valid Perfect Square
//given a positive integer num
//return true if num is a perfect square or false otherwise
//a perfect square is an integer that is the square of an integer - iun other words, it is the product of some integer with itself

//Approach:
//using binary search
var validPerfectSquare = (num) => {
    //base case
    if (num < 1) return false;
    if (num === 1) return true;

    let left = 1;
    let right = num;

    //binary searach
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (mid * mid === num) return true;
        else if (mid * mid < num) right = mid - 1;
        else if (mid * mid > num) left = mid + 1;
    }

    return false;
}
validPerfectSquare(16); //true - 4 * 4 = 16
//left = 1 -> 1 -> 1 -> 2
//right = 16 -> 9 -> 6 -> 6
//mid = 8 -> 5 -> 3 -> 4
//8 * 8 = 64 > 16 -> move right to mid + 1
//5 * 5 = 25 > 16 -> move right to mid + 1
//3 * 3 = 9 < 16 -> move left to mid - 1
//4 * 4 = 16 = 16  -> true

validPerfectSquare(14); //false
//left = 1 -> 1 -> 2 -> 2 -> 2 -> 2
//right = 14 -> 8 -> 8 -> 6 -> 5 -> 5
//mid = 7 -> 3 -> 5 -> 4 -> 3 -> 3      ....
//7 * 7 = 49 > 14 -> move right to mid + 1
//3 * 3 = 9 < 14 -> move left to mid - 1
//5 * 5 = 25 > 14 -> move right to mid + 1
//4 * 4 = 8 < 14 -> move left to mid - 1
//3 * 3 = 9 < 14 -> move left to mid - 1
//... false
