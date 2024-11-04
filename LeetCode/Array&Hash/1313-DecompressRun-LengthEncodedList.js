//1313. Decompress Run-Length Encoded List
//given a list nums of integers representing a list compressed with run-length encoding
//consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0)
//for each such pair, there are freq elements with value val concatenated in a sublist
//concatenate all the sublists from left to right to generate the decompressed list
//return the decompressed list
var runLengthEncodedList = (nums) => {
    let res = [];

    for (let i = 1; i < nums.length; i += 2) {
        //making separate array as much as freq
        res.push(...new Array(nums[i - 1]).fill(nums[i]));
    }

    return res;
}
runLengthEncodedList(nums = [1,2,3,4]); //[2,4,4,4]
//[1, 2, 3, 4]
//    ^
//[freq, val] = [1, 2]
//making array with size 1 with filling 2 -> [2]
//res = [2]

//[1, 2, 3, 4]
//          ^
//[freq, val] = [3, 4]
//making array with size 3 with filling 4 -> [4, 4, 4]
//res = [2, 4, 4, 4]

runLengthEncodedList(nums = [1,1,2,3]); //[1,3,3]
//[1, 1, 2, 3]
//    ^
//[freq, val] = [1, 1]
//making array with size 1 with filling 1 -> [1]
//res = [1]

//[1, 1, 2, 3]
//          ^
//[freq, val] = [2, 3]
//making array with size 2 with filling 3 -> [3, 3]
//res = [1, 3, 3]
