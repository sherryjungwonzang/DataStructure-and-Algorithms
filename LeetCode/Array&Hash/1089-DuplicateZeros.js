//1089. Duplicate Zeros
//given a fixed-length integer array arr
//duplicate each occurrence of zero, shifting the remaining elemenets to the right
//that elements beyond the length of the original array are not written
//do the above modifications to the input array in place and do not return anything
var duplicateZeros = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        //zeros
        if (arr[i] === 0) {
            //duplicate zero
            arr.splice(i, 0, 0);

            //shifting to right
            arr.pop();

            i++; //to avoid adding new zero
        }
    }
}
duplicateZeros([1,0,2,3,0,4,5,0]); //[1,0,0,2,3,0,0,4]
//i = 0
//[1, 0, 2, 3, 0, 4, 5, 0]
// ^

//i = 1
//[1, 0, 2, 3, 0, 4, 5, 0]
//    ^
//arr.splice(1, 0, 0) -> [1, 0, 0, 2, 3, 0, 4, 5, 0]
//arr.pop -> [1, 0, 0, 2, 3, 0, 4, 5]
//i = 2

//i = 3
//[1, 0, 0, 2, 3, 0, 4, 5]
//          ^

//i = 4
//[1, 0, 0, 2, 3, 0, 4, 5]
//             ^

//i = 5
//[1, 0, 0, 2, 3, 0, 4, 5]
//                ^
//arr.splice(5, 0, 0) -> [1, 0, 0, 2, 3, 0, 0, 4, 5]
//arr.pop -> [1, 0, 0, 2, 3, 0, 0, 4]
//i = 6

//i = 7
//[1, 0, 0, 2, 3, 0, 0, 4]
//                      ^

duplicateZeros([1,2,3]); //[1,2,3]
