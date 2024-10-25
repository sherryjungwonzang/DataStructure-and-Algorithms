//1287. Element Appearing More Than 25% In Sorted Array
//given an integer array sorted in non-decreasing order
//there is exactly one integer in the array that occurs more than 25% of the time
//return that integer
var quarterSortedArray = (arr) => {
    let m = arr.length;
    let quarter = Math.floor(m / 4); //to store 25% of the size
    let count = 1;
    let curr = arr[0]; //curr integer

    //traversing
    for (let i = 1; i < m; i++) {
        //same element
        if (curr === arr[i]) count++;
        else count = 1;

        //more then 25% of the time
        if (count > quarter) return arr[i];
        else curr = arr[i]; //updating the new element
    }

    return curr; 
}
//TC: O(n)
//SC: O(1)
quarterSortedArray(arr = [1,2,2,6,6,6,6,7,10]); //6
//m = 9
//quarter = 9 / 4 = 2
//[1, 2, 2, 6, 6, 6, 6, 7, 10]
//    ^
//2 != 1 -> starting new element appearing
//curr = 1 -> 2
//count = 1 -> 1

//[1, 2, 2, 6, 6, 6, 6, 7, 10]
//       ^
//2 = 2 -> same element
//curr = 1 -> 2 -> 2
//count = 1 -> 1 -> 2

//[1, 2, 2, 6, 6, 6, 6, 7, 10]
//          ^
//6 != 2 -> starting new element appearing
//curr = 1 -> 2 -> 2 -> 6
//count = 1 -> 1 -> 2 -> 1

//[1, 2, 2, 6, 6, 6, 6, 7, 10]
//             ^
//6 = 6 -> same element
//curr = 1 -> 2 -> 2 -> 6 -> 6
//count = 1 -> 1 -> 2 -> 1 -> 2

//[1, 2, 2, 6, 6, 6, 6, 7, 10]
//                ^
//6 = 6 -> same element
//curr = 1 -> 2 -> 2 -> 6 -> 6 -> 6
//count = 1 -> 1 -> 2 -> 1 -> 2 -> 3 > quarter
//more than 25%
//6


quarterSortedArray(arr = [1,1]); //1
