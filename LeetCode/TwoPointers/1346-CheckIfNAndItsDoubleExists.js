//1346. Check If N And Its Double Exists
//given an array arr of integers
//check if there exist two indices i and j such that:
//i != j
//0 <= i, j < arr.length
//arr[i] == 2 * arr[j]

//Approach:
//using two pointers
var checkDoubleExist = (arr) => {
    let left = 0;
    let right = 1;

    //two pointers
    while (left < arr.length - 1) {
        if (arr[left] === (arr[right] * 2) || arr[right] === (arr[left] * 2)) return true;
        else if (right === arr.length - 1) {
            left++;

            //resetting the right position
            right = left + 1;
        } else {
            right++;
        }
    }

    return false;
}
checkDoubleExist([10,2,5,3]); //true - For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]
//[10, 2, 5, 3]
// L   R
//10 = 2 * 2 || 2 = 10 * 2 -> NO
//move right

//[10, 2, 5, 3]
// L      R
//10 = 2 * 5 || 5 = 10 * 2 -> YES
//true

checkDoubleExist([3,1,7,11]); //false
//[3, 1, 7, 11]
// L  R
//3 = 1 * 2 || 1 = 3 * 2 -> NO
//move right

//[3, 1, 7, 11]
// L     R
//3 = 7 * 2 || 7 = 3 * 2 -> NO
//move right

//[3, 1, 7, 11]
// L        R
//right - arr.length - 1 -> need to reset

//[3, 1, 7, 11]
//    L  R
//1 = 7 * 2 || 7 = 1 * 2 -> NO
//move right

//[3, 1, 7, 11]
//    L      R
//right - arr.length - 1 -> need to reset

//[3, 1, 7, 11]
//       L  R
//7 = 11 * 2 || 11 = 7 * 2 -> NO
//move right

//left is in the last index 
//false

