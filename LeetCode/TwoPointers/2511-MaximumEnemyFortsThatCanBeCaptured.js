//2511. Maximum Enemy Forts That Can Be Captured
//given a 0-indexed integer array forts of length n representing the positions of several forts
//forts[i] can be -1, 0, or 1 where:
//-1 represents there is no fort at the ith position.
//0 indicates there is an enemy fort at the ith position.
//1 indicates the fort at the ith the position is under your command

//now you have decided to move your army from one of your forts at position i to an empty position j such that:
//0 <= i, j <= n - 1
//the army travels over enemy forts only
//formally, for all k where min(i,j) < k < max(i,j), forts[k] == 0
//while moving the army, all the enemy forts that come in the way are captured

//return the maximum number of enemy forts that can be captured
//in case it is impossible to move your army, or you do not have any fort under your command, return 0

//Approach:
//using two pointers
var maxEnemyForts = (forts) => {
    let max = 0;
    let left = 0;

    //two pointer
    for (let right = 0; right < forts.length; right++) {
        if (forts[right]) {
            if (forts[left] && forts[left] !== forts[right]) {
                max = Math.max(max, right - left - 1);
            }

            //updating
            left = right;
        }
    }

    return max;
}
//TC: O(n)
//SC: O(1)
maxEnemyForts([1,0,0,-1,0,0,0,0,1]); //4
//- Moving the army from position 0 to position 3 captures 2 enemy forts, at 1 and 2
//- Moving the army from position 8 to position 3 captures 4 enemy forts
//since 4 is the maximum number of enemy forts that can be captured, we return 4

//left = 0 || right = 0
//[1, 0, 0, -1, 0, 0, 0, 0, 1]
// LR
//[R] = 1: fort -> [L] = 1 && [L] = [R]: F
//left = 0 -> 0 || right = 0

//left = 0 || right = 1
//[1, 0, 0, -1, 0, 0, 0, 0, 1]
// L  R  R
//[R] = 0 -> pass

//left = 0 || right = 3
//[1, 0, 0, -1, 0, 0, 0, 0, 1]
// L        R
//[L] = 1: fort & [L] != [R]: T -> T
//max = 0 -> max(0, 3 - 0 - 1) = 2
//left = 0 -> 0 -> 3 || right = 3

//left = 3 || right = 4
//[1, 0, 0, -1, 0, 0, 0, 0, 1]
//          L   R  R  R  R  
//[R] = 0 -> pass

//left = 3 || right = 8
//[1, 0, 0, -1, 0, 0, 0, 0, 1]
//          L               R  
//[L] = -1: no fort & [L] != [R]: T -> T
//max = 0 -> max(2, 8 - 3 - 1) = 4
//left = 0 -> 0 -> 3 -> 8 || right = 8

//4

maxEnemyForts([0,0,1,-1]); //0
//left = 0 || right = 0
//[0, 0, 1, -1]
// LR R 
//[R] = 0 -> pass

//left = 0 || right = 2
//[0, 0, 1, -1]
// L     R 
//[L] = 0: no fort: F & [L] != [R]: T -> F
//left = 0 -> 2 || right = 2

//left = 2 || right = 3
//[0, 0, 1, -1]
//       L  R 
//[L] = 1: fort: F & [L] != [R]: T -> T
//max = 0 -> max(0, 3 - 2 - 1) = 0
//left = 2 -> 3 || right = 3

//0
