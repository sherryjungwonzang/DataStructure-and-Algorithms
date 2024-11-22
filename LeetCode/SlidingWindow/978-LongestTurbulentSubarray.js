//978. Longest Turbulent Subarray
//given an integer array arr
//return the length of a maximum size turbulent subarray of arr

//a subarray is turbulent if the comparison sign flips between each adjacent pair of elements in the subarray
//more formally, a subarray [arr[i], arr[i + 1], ..., arr[j]] of arr is said to be turbulent if and only if:
//For i <= k < j:
//arr[k] > arr[k + 1] when k is odd, and
//arr[k] < arr[k + 1] when k is even

//Or, for i <= k < j:
//arr[k] > arr[k + 1] when k is even, and
//arr[k] < arr[k + 1] when k is odd

//Approach:
//using sliding window
var longestTurbulentSubarray = (arr) => {
    let left = 0;
    let right = 1;
    let maxLen = 0;
    let currLen = 0;

    //base case
    if (arr.length <= 1) return 1;

    while (right < arr.length) {
        currLen = right - left + 1;

        //sliding window
        if (!isTurbulent(arr, right)) {
            //edge case - repeating numbers
            if (arr[right - 1] === arr[right]) currLen--; 

            maxLen = Math.max(maxLen, currLen);

            left = right;
        }

        right++;
    };

    //checking turbulent or not
    function isTurbulent(arr, right) {
        if (arr[right - 1] < arr[right] && arr[right] > arr[right + 1]) return true;
        if (arr[right - 1] > arr[right] && arr[right] < arr[right + 1]) return true;

        return false;
    };

    return maxLen;
}
longestTurbulentSubarray([9,4,2,10,7,8,8,1,9]); //5 - arr[1] > arr[2] < arr[3] > arr[4] < arr[5]
//maxLen = 0
//currLen = 0

//[9, 4, 2, 10, 7, 8, 8, 1, 9]
// L  R
//currLen = 0 -> 1 - 0 + 1 = 2
//9 > 4 & 4 > 2 -> False
//maxLen = 0 -> max(0, 2) = 2
//update left & right++

//[9, 4, 2, 10, 7, 8, 8, 1, 9]
//    L  R
//currLen = 0 -> 1 - 0 + 1 = 2 -> 2 - 1 + 1 = 2
//4 > 2 & 2 < 10 -> True: trubulent 
//right++

//[9, 4, 2, 10, 7, 8, 8, 1, 9]
//    L      R
//currLen = 0 -> 1 - 0 + 1 = 2 -> 2 - 1 + 1 = 2 -> 3 - 1 + 1 = 3
//2 < 10 & 10 > 7 -> True: trubulent 
//right++

//[9, 4, 2, 10, 7, 8, 8, 1, 9]
//    L         R
//currLen = 0 -> 1 - 0 + 1 = 2 -> 2 - 1 + 1 = 2 -> 3 - 1 + 1 = 3 -> 4 - 1 + 1 = 4
//10 > 7 & 7 < 8 -> True: trubulent 
//right++

//[9, 4, 2, 10, 7, 8, 8, 1, 9]
//    L            R
//currLen = 0 -> 1 - 0 + 1 = 2 -> 2 - 1 + 1 = 2 -> 3 - 1 + 1 = 3 -> 4 - 1 + 1 = 4 -> 5 - 1 + 1 = 5
//7 < 8 & 8 = 8 -> False
//maxLen = 0 -> max(0, 2) = 2 -> max(2, 5) = 5
//update left & right++

//[9, 4, 2, 10, 7, 8, 8, 1, 9]
//                 L  R
//currLen = 0 -> 1 - 0 + 1 = 2 -> 2 - 1 + 1 = 2 -> 3 - 1 + 1 = 3 -> 4 - 1 + 1 = 4 -> 5 - 1 + 1 = 5 -> 6 - 5 + 1 = 2
//8 = 8 & 8 > 1 -> False
//maxLen = 0 -> max(0, 2) = 2 -> max(2, 5) = 5 -> max(5, 2) = 5
//update left & right++

//[9, 4, 2, 10, 7, 8, 8, 1, 9]
//                    L  R
//currLen = 0 -> 1 - 0 + 1 = 2 -> 2 - 1 + 1 = 2 -> 3 - 1 + 1 = 3 -> 4 - 1 + 1 = 4 -> 5 - 1 + 1 = 5 -> 6 - 5 + 1 = 2 -> 7 - 6 + 1 = 2
//8 > 1 & 1 < 9 -> True: trubulent 
//right++

//[9, 4, 2, 10, 7, 8, 8, 1, 9]
//                    L     R
//currLen = 0 -> 1 - 0 + 1 = 2 -> 2 - 1 + 1 = 2 -> 3 - 1 + 1 = 3 -> 4 - 1 + 1 = 4 -> 5 - 1 + 1 = 5 -> 6 - 5 + 1 = 2 -> 7 - 6 + 1 = 2 -> 8 - 6 + 1 = 3
//9 > 1 & 9 < null -> False

//5

longestTurbulentSubarray(arr = [4,8,12,16]); //2

longestTurbulentSubarray([100]); //1
