//989. Add To Array-Form Of Integer
//the array-form of an integer num is an array representing its digits in left to right order
//for example, for num = 1321, the array form is [1, 3, 2, 1]
//given num, the array form of an integer and an integer k
//return the array-form of the integer num + k
var addArrayForm = (num, k) => {
    let i = num.length - 1;
    let res = [];

    //checking from the backwards
    while (i >= 0 || k > 0) {
        //checking carry
        if (i >= 0) {
            //sum
            res.push((num[i] + k) % 10);

            //need to cut the already visited position
            k = Math.trunc((num[i] + k) / 10);

            i--;
        } else { //still have k, after carry
            res.push(k % 10);

            k = Math.trunc(k / 10);
        }
    }

    return res.reverse();
}
addArrayForm(num = [1,2,6,3], k = 516); //[1,7,7,9]
//[1, 2, 6, 3] || k = 516
//          ^
//i = 3
//3 + 516 = 519 -> 519 % 10 = 9
//              -> 519 / 10 = 51
//res = [ 9, ]

//[1, 2, 6, 3] || k = 516
//       ^
//i = 2
//6 + 51 = 57 -> 57 % 10 = 7
//            -> 57 / 10 = 5
//res = [ 9, 7, ]

//[1, 2, 6, 3] || k = 516
//    ^
//i = 1
//2 + 5 = 7 -> 7 % 10 = 7
//          -> 7 / 10 = 0
//res = [ 9, 7, 7, ]

//[1, 2, 6, 3] || k = 516
// ^
//i = 0
//1 + 0 = 1 -> 1 % 10 = 1
//          -> 1 / 10 = 0
//res = [ 9, 7, 7, 1 ] -> reverse: [1, 7, 7, 9]

addArrayForm(num = [9, 9, 9], k = 1 ); //[1,0,0,0]
//[9, 9, 9] || k = 1
//       ^
//i = 2
//9 + 1 = 10 -> 10 % 10 = 0
//           -> 10 / 10 = 1
//res = [ 0, ]

//[9, 9, 9] || k = 1
//    ^
//i = 1
//9 + 1 = 10 -> 10 % 10 = 0
//           -> 10 / 10 = 1
//res = [ 0, 0,  ]

//[9, 9, 9] || k = 1
// ^
//i = 0
//9 + 1 = 10 -> 10 % 10 = 0
//           -> 10 / 10 = 1
//res = [ 0, 0, 0,  ]

//[9, 9, 9] || k = 1
// ^
//i = -1 || k is still 1
//1 % 10 = 1
//k = trunc(1 / 10) = 0
//res = [ 0, 0, 0, 1 ] -> reverse: [1, 0, 0, 0]

addArrayForm(num = [1,2,0,0], k = 34); //[1,2,3,4]

addArrayForm(num = [2,7,4], k = 181); //[4,5,5]

addArrayForm(num = [2,1,5], k = 806); //[1,0,2,1]
