//645. Set Mismatch
//have a set of integers s, which originally contains all the numbers from 1 to n
//unfortunately, dueto some error, one of the numbers in s got duplicated to another number in the set
//which results in repetition of one number and loss of another number
//given an integer array nums representing the data status of this set after the error
//find the number that occurs twice and the number that is missing
//return them in the form of an array
var setMismatch = (nums) => {
    let n = nums.length;
    let arr = new Array(n + 1).fill(0);
    let duplicate = 0;
    let missing = 0;

    //tracking the frequency
    for (let num of nums) arr[num]++;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === 2) duplicate = i; //duplicate
        if (arr[i] === 0) missing = i; //missing
    }

    return [duplicate, missing];
}
//TC: O(n)
//SC: O(n)
setMismatch([1,2,2,4]); //[2, 3]
//arr = [0, 0, 0, 0, 0] -> [0, 1, 2, 0, 1] accoridng to the frequency
//[0, 1, 2, 0, 1]
//       ^ -> duplicate = 2
//          ^ -> missing = 3
//[2, 3]

setMismatch([1, 1]); //[1, 2]
//arr = [0, 0, 0] -> [0, 2, 0]
//[0, 2, 0]
//    ^ -> duplicate = 1
//       ^ -> missing = 2
//[1, 2]
