//2917. Find The K-or Of An Array
//given an integer array nums, and an integer k
//let's introduce K-or operation by extending the standard bitwise OR
//in K-or, a bit position in the result is set to 1 if at least k numbers in nums have a 1 in that position
//return the K-or of nums
var findKor = (nums, k) => {
    let binaryStorage = [];
    let res = '';
    let arr;

    //making bit
    for (let num of nums) {
        let bit = num.toString(2);

        //reverse it and making as array
        arr = bit.split('').reverse();

        //storing
        binaryStorage.push(arr);
    }

    //counting 1
    for (let i = 0; i < 32; i++) {
        let count = 0;

        for (let j = 0; j < binaryStorage.length; j++) {
            //checking each binary's position
            if (parseInt(binaryStorage[j][i]) > 0) count++;
        }

        //making K-or
        if (count >= k) res += "1";
        else res += "0";
    }

    return parseInt(res.split('').reverse().join(''), 2);
}
findKor(nums = [7,12,9,8,9,15], k = 4); 
//[7, 12, 9, 8, 9, 15]                  [7, 12, 9, 8, 9, 15]                [7, 12, 9, 8, 9, 15]                              [7, 12, 9, 8, 9, 15]                                              [7, 12, 9, 8, 9, 15]                                                          [7, 12, 9, 8, 9, 15]      
// ^                                         ^                                      ^                                                    ^                                                                    ^                                                                                 ^
//7 = 0111 -> arr: [1, 1, 1]            12 = 1100 -> arr: [0, 0, 1, 1]      9 = 1001 -> arr: [1, 0, 0, 1]                     8 = 1000 -> arr: [0, 0, 0, 1]                                     9 = 1001 -> arr: [1, 0, 0, 1]                                                 15 = 1111 -> arr: [1, 1, 1, 1]
//binaryStorage = [ [1, 1, 1,], ]       [ [1, 1, 1,], [0, 0, 1, 1], ]       [ [1, 1, 1,], [0, 0, 1, 1], [1, 0, 0, 1],  ]      [ [1, 1, 1,], [0, 0, 1, 1], [1, 0, 0, 1], [0, 0, 0, 1],  ]        [ [1, 1, 1,], [0, 0, 1, 1], [1, 0, 0, 1], [0, 0, 0, 1], [1, 0, 0, 1]  ]       [ [1, 1, 1,], [0, 0, 1, 1], [1, 0, 0, 1], [0, 0, 0, 1], [1, 0, 0, 1], [1, 1, 1, 1] ]

//binaryStorage = [ [1, 1, 1,], [0, 0, 1, 1], [1, 0, 0, 1], [0, 0, 0, 1], [1, 0, 0, 1], [1, 1, 1, 1] ]
//                   ^           ^             ^             ^             ^             ^
//i = 0 < 32, j = 0 < 6
//res[0][0] = 1 > 0 -> count = 0 -> 1

//i = 0 < 32, j = 1 < 6
//res[1][0] = 0 = 0 -> count = 0 -> 1 -> 1

//i = 0 < 32, j = 2 < 6
//res[2][0] = 1 > 0 -> count = 0 -> 1 -> 1 -> 2

//i = 0 < 32, j = 3 < 6
//res[3][0] = 0 = 0 -> count = 0 -> 1 -> 1 -> 2 -> 2

//i = 0 < 32, j = 4 < 6
//res[4][0] = 1 > 0 -> count = 0 -> 1 -> 1 -> 2 -> 2 -> 3

//i = 0 < 32, j = 5 < 6
//res[5][0] = 1 > 0 -> count = 0 -> 1 -> 1 -> 2 -> 2 -> 3 -> 4
//count = 4 = k -> res = '1' 

//binaryStorage = [ [1, 1, 1,], [0, 0, 1, 1], [1, 0, 0, 1], [0, 0, 0, 1], [1, 0, 0, 1], [1, 1, 1, 1] ]
//                      ^           ^             ^             ^             ^             ^
//i = 1 < 32, j = 0 < 6
//res[0][1] = 1 > 0 -> count = 0 -> 1

//i = 1 < 32, j = 1 < 6
//res[1][1] = 0 = 0 -> count = 0 -> 1 -> 1

//i = 1 < 32, j = 2 < 6
//res[2][1] = 0 = 0 -> count = 0 -> 1 -> 1

//i = 1 < 32, j = 3 < 6
//res[3][1] = 0 = 0 -> count = 0 -> 1 -> 1

//i = 1 < 32, j = 4 < 6
//res[4][1] = 0 = 0 -> count = 0 -> 1 -> 1

//i = 1 < 32, j = 5 < 6
//res[5][1] = 1 > 0 -> count = 0 -> 1 -> 1 -> 2
//count = 2 <= k -> res = '1, 0' 

//binaryStorage = [ [1, 1, 1,], [0, 0, 1, 1], [1, 0, 0, 1], [0, 0, 0, 1], [1, 0, 0, 1], [1, 1, 1, 1] ]
//                         ^           ^             ^             ^             ^             ^
//i = 2 < 32, j = 0 < 6
//res[0][2] = 1 > 0 -> count = 0 -> 1

//i = 2 < 32, j = 1 < 6
//res[1][2] = 1 >  0 -> count = 0 -> 1 -> 2

//i = 2 < 32, j = 2 < 6
//res[2][2] = 0 = 0 -> count = 0 -> 1 -> 2

//i = 2 < 32, j = 3 < 6
//res[3][2] = 0 = 0 -> count = 0 -> 1 -> 2

//i = 2 < 32, j = 4 < 6
//res[4][2] = 0 = 0 -> count = 0 -> 1 -> 2

//i = 2 < 32, j = 5 < 6
//res[5][2] = 1 > 0 -> count = 0 -> 1 -> 2 -> 3
//count = 3 <= k -> res = '1, 0, 0' 

//binaryStorage = [ [1, 1, 1,], [0, 0, 1, 1], [1, 0, 0, 1], [0, 0, 0, 1], [1, 0, 0, 1], [1, 1, 1, 1] ]
//                                        ^             ^             ^             ^             ^
//i = 3 < 32, j = 0 < 6
//res[0][3] = nothing

//i = 3 < 32, j = 1 < 6
//res[1][3] = 1 > 0 -> count = 0 -> 1

//i = 3 < 32, j = 2 < 6
//res[2][3] = 1 > 0 -> count = 0 -> 1 -> 2

//i = 3 < 32, j = 3 < 6
//res[3][3] = 1 > 0 -> count = 0 -> 1 -> 2 -> 3

//i = 3 < 32, j = 4 < 6
//res[4][3] = 1 > 0 -> count = 0 -> 1 -> 2 -> 3 -> 4

//i = 3 < 32, j = 5 < 6
//res[5][3] = 1 > 0 -> count = 0 -> 1 -> 2 -> 3 -> 4 -> 5
//count = 5 > k -> res = '1, 0, 0, 1' 

//parseInt(1001) = 9

findKor(nums = [2,12,1,11,4,5], k = 6); //0

findKor(nums = [10,8,5,9,11,6,8], k = 1); //15
