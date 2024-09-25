//1619. Mean of Array After Removing Some Elements
//given an integer array arr
//return the mean of the remaining integers after removing the smallest 5% and the largest 5% of the elements
//answers with 10^-5 of the actial answer will be considered accepted

//Approach:
//using sorting
var meanAfterRemoving = (arr) => {
    //sorting
    arr.sort((a, b) => a - b);

    let n = arr.length;
    let range = n * 0.05; //5% of elements
    let sum = 0;

    //traveresing from removing 5% smallest to removing 5% largest
    for (let i = range; i < n - range; i++) {
        sum += arr[i];
    }

    //diving by the amount of valid range
    return sum / (n - 2 * range);
}
meanAfterRemoving(arr = [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3]); //2.00000
//n = 20
//5% removing = 20 / 0.05 = 1 -> one elements from front and end
//sorting: [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3]
//             >                                                  <
//sum = 0 -> 2 -> 4 -> 6 -> 8 -> 10 -> 12 -> 14 -> 16 -> 18 -> 20 -> 22 -> 24 -> 26 -> 28 -> 30 -> 32 -> 34 -> 36
//the amount of valid range: n - 2 * range = 20 - 2 * 1 = 18
//36 / 18 = 2

meanAfterRemoving(arr = [6,2,7,5,1,2,0,3,10,2,5,0,5,5,0,8,7,6,8,0]); //4.00000
//n = 20
//5% removing = 20 / 0.05 = 1 -> one elements from front and end
//sorting: [0, 0, 0, 0, 1,  2, 2, 2, 3, 5, 5, 5,  5, 6, 6, 7, 7, 8, 8, 10]
//             >                                                    <
//sum = 0 -> 0 ->  0 -> 1 -> 3 -> 5 -> 7 -> 10 -> 15 -> 20 -> 25 -> 30 -> 36 -> 42 -> 49 -> 56 -> 64 -> 72
//the amount of valid range: n - 2 * range = 20 - 2 * 1 = 18
//72 / 18 = 4

meanAfterRemoving(arr = [6,0,7,0,7,5,7,8,3,4,0,7,8,1,6,8,1,1,2,4,8,1,9,5,4,3,8,5,10,8,6,6,1,0,6,10,8,2,3,4]); //4.77778
