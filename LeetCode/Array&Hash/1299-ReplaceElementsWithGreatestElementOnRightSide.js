//1299. Replace Elements With Greatest Element On Right Side
//given an array arr
//replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1
//after doing so, return the array
var replaceGreatestElement = (arr) => {
    let res = new Array(arr.length);

    //base setting
    res[arr.length - 1] = -1;

    //traversing from backwards 
    for (let i = arr.length - 1; i > 0; i--) {
        res[i - 1] = Math.max(arr[i], res[i]);
    }

    return res;
}
replaceGreatestElement(arr = [17,18,5,4,6,1]); //[18,6,6,6,1,-1]
//res = [  ,  ,  ,  ,  , -1]

//i = 5
//[17, 18, 5, 4, 6, 1]
//                  ^
//res[4] = max(arr[5], res[5]) = (1, -1) = 1
//res = [  ,  ,  ,  , 1, -1]

//i = 4
//[17, 18, 5, 4, 6, 1]
//               ^
//res[3] = max(arr[4], res[4]) = (6, 1) = 6
//res = [  ,  ,  , 6, 1, -1]

//i = 3
//[17, 18, 5, 4, 6, 1]
//            ^
//res[2] = max(arr[3], res[3]) = (4, 6) = 6
//res = [  ,  , 6, 6, 1, -1]

//i = 2
//[17, 18, 5, 4, 6, 1]
//         ^
//res[1] = max(arr[2], res[2]) = (5, 6) = 6
//res = [  , 6, 6, 6, 1, -1]

//i = 1
//[17, 18, 5, 4, 6, 1]
//      ^
//res[0] = max(arr[1], res[1]) = (18, 6) = 18
//res = [ 18, 6, 6, 6, 1, -1 ]

replaceGreatestElement([400]); //-1
