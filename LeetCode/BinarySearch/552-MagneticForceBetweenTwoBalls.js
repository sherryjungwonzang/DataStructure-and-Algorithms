//1552. Magnetic Force between Two balls
//in the universe Earth C-137, Rick discovered a specifal form of magnetic force between two balls
//if they are put in his new invented basket
//Rick has n empty baskets, the i_th basket is at position[i]
//morty has m balls and needs to distribute the balls into the baskets
//such that the minimum magnetic force between any two balls is maximum

//Rick stated that magnetic force between two different balls at positions x and y is |x - y|
//given the integer array position and the integer m
//return the required force

//Approach:
//using binary search with two pointers
var magneticForce = (position, m) => {
    //base case - distance between two balls
    if (m === 2) return right - position[0];

    //sorting in ascending order
    position = position.sort((a, b) => a - b);

    //two pointers
    let left = 0;
    let right = position[position.length - 1];
    let res = -1; //-1 or null should be printed when the test is failed

    //Binary Search
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        //checking the validation
        if (canPlaceBalls(position, m, mid)) { //if we can place balls
            res = mid;
            left = mid + 1;
        } else { //if we cannot place balls - distance can be too long
            right = mid - 1; //moving right pointer to shrink the size
        }
    }
    return res;
}

//checking whether we can place all balls "count" in a valid basket or not
function canPlaceBalls (baskets, count, posDist) {
    let prev = 0;
    let ballsPlaced = 1; //assuming that we are placing a vall at the first index

    for (let i = 1; i < baskets.length; i++) {
        let distance =  baskets[i] - baskets[prev];

        if (distance >= posDist) { //if the distance between two buckets is greater than posDist - available to place the ball here
            ballsPlaced += 1;
            prev = i;

            //meaning that we place all balls
            if (ballsPlaced === count) return true;
        }
    }
    return false;
}
//TC: O(n * log(n)) - n is the position array
//SC: O(1)
magneticForce([1,2,3,4,7], 3); //3
//Distributing the 3 balls into baskets 1, 4 and 7 will make the magnetic force between ball pairs [3, 3, 6]
//The minimum magnetic force is 3
//We cannot achieve a larger minimum magnetic force than 3.

magneticForce([5,4,3,2,1,1000000000], 2); //999999999
//We can use baskets 1 and 1000000000
