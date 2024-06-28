//1539. Kth Missing Positive Number
//given an array 'arr' of positive integers sorted in a strictly increasing order and an integer 'k'
//return the k_th positive integer that is missing from this array

//Approach:
//using binary search
var kthMissingPositiveNum = (arr, k) => {
    let low = 0;
    let high = arr.length - 1;

    //binary search
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let missing = arr[mid] - (mid + 1); //the num of missing elements between curr mid and its indes

        //arranging the range
        if (missing < k) low = mid + 1; //kth missing lies to the right or mid
        else high = mid - 1; //kth missing lies to the left or mid
    }

    //low > high
    if (high !== -1) { //kth missing integer would be smaller than any element in array
        let missingCount = arr[high] - (high + 1);

        return arr[high] + (k - missingCount); //kth missing integer
    }

    return k;
}
kthMissingPositiveNum([2,3,4,7,11], 5); //9 - The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9
//low = 0
//high = 4
//mid = 2
//missing = arr[2] - (2 + 1) = 4 - 3 = 1

//low = 0 -> 3
//high = 4 -> 4
//mid = 2 -> 3
//missing = arr[3] - (3 + 1) = 7 - 4 = 3

//low = 0 -> 3 -> 4
//high = 4 -> 4 -> 4
//mid = 2 -> 3 -> 4
//missing = arr[4] - (4 + 1) = 11 - 5 = 6

//missingCount = arr[3] - (3 + 1) = 7 - 4 = 3: 1, 5 and 6 are missing
//arr[high] + (k - missingCount) = arr[3] + (5 - 3) = 9

kthMissingPositiveNum([1,2,3,4], 2); //6 - The missing positive integers are [5,6,7,...]. The 2nd missing positive integer is 6
