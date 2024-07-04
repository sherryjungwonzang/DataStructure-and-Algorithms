//1343. Number Of Sub-arrays Of SizeK And Average Greater Than Or Equal To Threshold
//given an array of integers 'aa' and two integers 'k' and 'threshold'
//return the number of sub-arrays of size k and average greater than or equal to threshold

//Approach:
//using sliding windows
var numOfSubarrays = (arr, k, threshold) => {
    let count = 0;
    let windowSize = 0;
    let windowSum = 0;

    //sliding window
    for (let i = 0; i < arr.length + 1; i++) {
        if (windowSize === k) { //finding the correct window range
            if (windowSum / k >= threshold) count++;

            //if not
            windowSum -= arr[i - k]; //reducing the sliding window
            windowSize--;
        }

        windowSum += arr[i];
        windowSize++;
    }

    return count;
}
numOfSubarrays(arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4); //3
//Sub-arrays [2,5,5],[5,5,5] and [5,5,8] have averages 4, 5 and 6 respectively
//All other sub-arrays of size 3 have averages less than 4 (the threshold)

numOfSubarrays(arr = [11,13,17,23,29,31,7,5,2,3], k = 3, threshold = 5); //6
//The first 6 sub-arrays of size 3 have averages greater than 5 - averages are not integers
