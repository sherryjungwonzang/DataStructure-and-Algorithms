//3028. Ant On The Boundary
//an ant is on a boundary
//it sometimes goes left and sometimes right

//given an array of non-zero integers nums
//the ant starts reading nums from the first element of it to its end
//at each step, it moves according to the value of the curr element:
//if nums[i] < 0, it moves left by -nums[i] units
//if nums[i] > 0, it moves right by nums[i] units

//return the number of times the ant returns to the boundary
var antBoundary = (nums) => {
    let currPosition = 0;
    let count = 0;

    for (let num of nums) { //tracking curr position
        currPosition += num;

        //on the boundary
        if (currPosition === 0) count++;
    }

    return count;
}
antBoundary([2, 3, -5]); //1
//[2, 3, -5]
// ^
//currPosition = 0 -> 2
//count = 0

//[2, 3, -5]
//    ^
//currPosition = 0 -> 2 -> 5
//count = 0

//[2, 3, -5]
//       ^
//currPosition = 0 -> 2 -> 5 -> 0
//count = 0 -> 1

antBoundary([3,2,-3,-4]); //0
//[3, 2, -3, -4]
// ^
//currPosition = 0 -> 3
//count = 0

//[3, 2, -3, -4]
//    ^
//currPosition = 0 -> 3 -> 5
//count = 0

//[3, 2, -3, -4]
//       ^
//currPosition = 0 -> 3 -> 5 -> 2
//count = 0

//[3, 2, -3, -4]
//           ^
//currPosition = 0 -> 3 -> 5 -> 2 -> -2
//count = 0
