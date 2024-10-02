//1217. Minimum Cost To Move Chips To The Same Position
//we have n chips, where the position of the ith chip is position[i]
//we need to move all the chips to the same position
//in one steps, we can change the position of the ith chip from position[i] to:

//position[i] + 2 or position[i] - 2 with cost = 0
//position[i] + 1 or position[i] - 1 with cost = 1

//return the min cost needed to move all the chips to the same position

//Approach:
//using Greedy approach and parity
var minCostMoveChips = (position) => {
    //checking same parity
    let evenCount = 0;
    let oddCount = 0;

    for (let pos of position) {
        //even
        if (pos % 2 === 0) evenCount++;
        else oddCount++;
    }

    return Math.min(oddCount, evenCount);
}
//TC: O(n)
//SC: O(1)
minCostMoveChips([1,2,3]);  //1
//                                       O
//          ->  O                    ->  O
// O  O  O      O  O                     O    
//---------     ---------                ---------
///1  2  3      1  2  3                  1  2  3
//              3 to 1 with cost 0       2 to 1 with cost 1

//[1, 2, 3]
// ^  ^  ^
//evenCount = 0 -> 1
//oddCount = 0 -> 1 -> 2
//min(1, 2) = 1

minCostMoveChips([2,2,2,3,3]); //2
//                                         O
//                 O                       O
//    O            O                       O
//    O  O  ->     O            ->         O
//    O  O         O  O                    O 
//---------     ---------               ---------
///1  2  3      1  2  3                 1  2  3
//              3 to 2 with cost 1      3 to 2 with cost 1 
//[2, 2, 2, 3, 3]
// ^  ^  ^  ^ ^ ^
//evenCount = 0 -> 1 -> 2 -> 2
//oddCount = 0 -> 1 -> 2
//min(2, 3) = 2
