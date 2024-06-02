//941. Valid Mountain Array
//given an array of integers 'arr'
//return true if and only if it is a valid mountain array
//recall that arr is a mountain array if and only if:
//arr.length >= 3
//there exists some i with 0 < i < arr.length - 1:
//arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
//arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
var validMountainArray = (arr) => {
    let n = arr.length;
    let pivot = false;

    //base case
    if (n < 3) return false;

    //checking
    for (let i = 1; i < n - 1; i++) {
        let curr = arr[i];
        let prev = arr[i - 1];
        let next = arr[i + 1];

        if (curr > prev && curr > next) { //mountain array
            pivot = true;
        } else if (prev >= curr && next >= curr) {
            return false;
        }
    }
    return pivot;
}
validMountainArray([2,1]); //false

validMountainArray([3,5,5]); //false

validMountainArray([0,3,2,1]); //true
//[0, 3, 2, 1]
// p  c  n
//curr=3 > prev=0 && curr=3 > next=2 -> mountain array

//    p  c  n
//curr=2 < prev=3 && curr=2 > next=1
