//969. Pancake Sorting
//given an array of integers 'array'
//sort the array by performing a series of pancake flips

//in one pancake flip, we do the following steps:
//choose an integer l where i <= k <= arr.length
//reverse the sub-array arr[0...k-1] - 0-indexed

//for example, if arr = [3,2,1,4] and we performed a pancake flip choosing k = 3
//we reverse the sub-array [3,2,1] so arr=[1,2,3,4] after the pancake flip at k=3

//return an array of the k-values corresponding to a sequence of pancake flips that sort arr
//any valid answer that sorts the array within 10 * arr.length flips will be judged as correct

//Approach:
//using selection sort algorithm and two pointers - on flipping
var pancakeSorting = (arr) => {
    let n = arr.length;
    let res = [];

    //selection sorting
    for (let i = n; i >= 1; i--) {
        let idx = findIndex(i);

        if (idx === i - 1) continue;

        //1st flip - to flip the largest val tot he beginning
        flip(idx);
        res.push(idx + 1);

        //snd flip - to flip the subarray again to move maximum val to the end
        flip(i - 1);
        res.push(i);
    }

    //to find the max value
    function findIndex(num) {
        for (let i = 0; i < n; i++) {
            if (arr[i] === num) return i;
        }
    };

    //two pointers - flipping
    function flip(index) {
        let left = 0;
        let right = index;

        while (left < right) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;

            left++;
            right--;
        }
    };

    return res;
}
//TC: O(n^2)
//SC: O(1)
pancakeSorting([3,2,4,1]); //[4,2,4,3]
//We perform 4 pancake flips, with k values 4, 2, 4, and 3.
//Starting state: arr = [3, 2, 4, 1]
//After 1st flip (k = 4): arr = [1, 4, 2, 3]
//After 2nd flip (k = 2): arr = [4, 1, 2, 3]
//After 3rd flip (k = 4): arr = [3, 2, 1, 4]
//After 4th flip (k = 3): arr = [1, 2, 3, 4], which is sorted

//[3, 2, 4, 1]
//res = [ ]

//i = 4
//idx = findIndex(4) -> arr[2] = 4 = 2
//2 != 2
//1st flip(2) -> [3, 2, 4, 1]
//                L     R
// [4, 2, 3, 1]
//    L/R
//res = [3]
//2nd flip(4-1=3) -> [4, 2, 3, 1]
//                    L        R
//[1, 2, 3, 4] -> [1, 3, 2, 4]
//    L  R
//res = [3, 4]

//i = 3
//idx = findIndex(3) -> arr[1] = 3 = 1
//1 != 2
//1st flip(1) ->  [1, 3, 2, 4]
//                 L  R
//[3, 1, 2, 4]
//res = [3, 4, 2]
//2nd flip(3-1=2) -> [3, 1, 2, 4]
//                    L     R
//[2, 1, 3, 4]
//   L/R
//res = [3, 4, 2, 3]

//i = 2
//idx = findIndex(2) -> arr[0] = 2 = 0
//0 != 1
//1st flip(0) -> [2, 1, 3, 4]
//               LR
//res = [3, 4, 2, 3, 1]
//2nd flip(2-1=1) -> [2, 1, 3, 4]
//                    L  R
//[1, 2, 3, 4]
//res = [3, 4, 2, 3, 1, 2]

//i = 1
//idx = findIndex(1) -> arr[0] = 1 = 0
//0 = 0 -> continue

//res = [3, 4, 2, 3, 1, 2]

pancakeSorting([1,2,3]); //[]
//The input is already sorted, so there is no need to flip anything
