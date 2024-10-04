//1502. Can Make Arithmetic Progression From Sequence
//a sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same
//given an array of numbers 'arr'
//return true if the array can be rearranged to form an arithmetic progression
//otherwise return false

//Approach:
//using sorting
var arithmeticProgression = (arr) => {
    //base case
    if (arr.length < 2) return true;

    //sorting
    arr.sort((a, b) => a - b);

    let diff = arr[1] - arr[0];

    //checking arithmetic progression
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== diff) return false;
    }

    return true;
}
arithmeticProgression([3,5,1]); //true
//sorting: [1, 3, 5]
//diff standard: [1] - [0] = 3 - 1 = 2

//[1, 3, 5]
//       ^
//[2] - [1] = 5 - 3 = 2 = diff
//true

arithmeticProgression([1,2,4]); //false
//sorting: [1, 2, 4]
//diff standard: [1] - [0] = 2 - 1 = 1

//[1, 2, 4]
//       ^
//[2] - [1] = 4 - 2 = 2 != diff
//false
