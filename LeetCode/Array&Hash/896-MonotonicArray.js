//896. Monotonic Array
//an array is monotonic if it is either monotone increasing or monotone decreasing
//an array 'nums' is monotone increasing if for all i <= j, nums[i] <= nums[j]
//anarray nums is monotone decreasing if for all i <= j and nums[i] >= nums[j]

//given an integer array 'nums'
//return true if the given array is monotonic or false otherwise

//Approach:
//using One pass solution
//setting two flags: increasing and decreasing flags as true
var monotonicArray = (numn) => {
    //setting two flags
    let increasing = true;
    let decreasing = true;

    for (let i = 0; i < nums.length; i++) {
        //Array is decreasing
        if (nums[i] > nums[i + 1]) {
            increasing = false;
        }

        //Array is increasing
        if (nums[i] < nums[i + 1]) {
            decreasing = false;
        }
    }
    return increasing || decreasing;
}
monotonicArray([1,3,2]); //false
//increasing = true
//decreasing = true

//[1, 3, 2]
// i
//1 < 3 -> decreasing false
//increasing = true
//decreasing = false

//    i
//3 > 2 -> increasing false
//increasing = false
//decreasing = false

//false || false = false

monotonicArray([6,5,4,4]); //true
//increasing = true
//decreasing = true

//[6, 5, 4, 4]
// i
//6 > 5 -> increasing -> false
//increasing = false
//decreasing = true

//    i
//5 > 4 -> increasing -> false
//increasing = false
//decreasing = true

//       i
//4 = 4 -> increasing -> false
//increasing = false
//decreasing = true

//true || false -> true
