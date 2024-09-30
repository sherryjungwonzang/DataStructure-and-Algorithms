//1013. Partition Array Into Three Parts With Equal Sum
//given an array of integers arr
//return true if we can partition the array into three non-empty parts with equal sums
//formally, we can partition the array if we can find indexes i + 1 < j with (arr[0] + arr[1] + ... + arr[i] == arr[i + 1] + arr[i + 2] + ... + arr[j - 1] == arr[j] + arr[j + 1] + ... + arr[arr.length - 1])
var partitionArrayEqualSum = (arr) => {
    let total = arr.reduce((a, b) => a + b);
    let equalSum = total / 3;
    let sum = 0; //each parition sum
    let count = 0; //partition counting

    //base case
    if (total % 3) return false;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        //found partition
        if (sum === equalSum) {
            //do partition
            count++;

            //resetting
            sum = 0;
        }
    }

    return count >= 3; 
}
partitionArrayEqualSum(arr = [0,2,1,-6,6,-7,9,1,2,0,1]); //true - 0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1
//total = 9 -> 9 % 3 = 0: valid
//equalSum = 9 % 3 = 3

//[0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1]
// ^  ^  ^
//sum = 0 -> 0 -> 2 -> 3 = equalSum
//count = 0 -> 1

//[0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1]
//           ^  ^   ^  ^  ^
//sum = 0 -> -6 -> 6 -> 0 -> -7 -> 2 -> 3 = equalSum
//count = 0 -> 1 -> 2

//[0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1]
//                           ^  ^  ^
//sum = 0 -> 2 -> 3 = equalSum
//count = 0 -> 1 -> 2 -> 3

//count = 3 >= 3 -> true

partitionArrayEqualSum(arr = [0,2,1,-6,6,7,9,-1,2,0,1]); //false
//total = 21 -> 21 % 3 = 0: valid
//equalSum = 21 % 3 = 7

//[0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1]
// ^  ^  ^  ^   ^  ^  ^   ^  ^  ^  ^
//sum = 0 -> 2 -> 3 -> -3 -> 3 -> 10 -> 19 -> 18 -> 20 -> 20 -> 21
//count = 0 not >= 3 -> false

partitionArrayEqualSum(arr = [3,3,6,5,-2,2,5,1,-9,4]); //true - 3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4
