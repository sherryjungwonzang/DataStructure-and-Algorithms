//740. Delete and Earn
//given an integer array 'nums'
//want to maximize the number of points you get by performing the following operation any number of times:

//pick any nums[i] and delete it to earn nums[i] points
//afterwards, you must delete every element equal to nums[i] - 1 and every element equal to nums[i] + 1

//return the max number of points you can earn by applying the above operation some number of times

//Approach:
//using DP array and two separate arrays to store the value of points and earned
var deleteAndEarn = (nums) => {
    //base case
    if (nums.length === 1) return nums[0];

    //first array - to store the sum of each number
    let points = new Array (Math.max(...nums) + 1).fill(0);
    for (let i = 0; i < nums.length; i++) {
        points[nums[i]] += nums[i];
    }

    //DP - second array
    let earned = new Array(...points).fill(0);

    //base case
    earned[1] = points[1];

    for (let i = 2; i < points.length; i++) {
        //to check the max value between picking [i - 1]'s sum and [i and i + 1]'s sum
        earned[i] = Math.max(earned[i - 1], earned[i - 2] + points[i]);
    }

    return Math.max(earned[earned.length - 1], earned[earned.length - 2]);
}
//TC: O(n)
//SC: O(n)
deleteAndEarn([2,2,3,3,3,4]); //9
//Delete a 3 to earn 3 points. All 2's and 4's are also deleted. nums = [3,3]
//Delete a 3 again to earn 3 points. nums = [3]
//Delete a 3 once more to earn 3 points. nums = []
//You earn a total of 9 points

//points: [0, 0, 0, 0, 0] -> [0, 0, 4, 9, 4]

//earned = [0, 0, 0, 0, 0]
//[2, 2, 3, 3, 3, 4]
//       ^
//earned[2] = max(earned[1], earned[0] + points[2]) = (0, 0 + 4) = 4
//earned = [0, 0, 4, 0, 0]

//[2, 2, 3, 3, 3, 4]
//          ^
//earned[3] = max(earned[2], earned[1] + points[3]) = (4, 0 + 9) = 9
//earned = [0, 0, 4, 9, 0]

//[2, 2, 3, 3, 3, 4]
//             ^
//earned[4] = max(earned[3], earned[2] + points[4]) = (9, 4 + 4) = 9
//earned = [0, 0, 4, 9, 9]

//max(earned[4], earned[3]) = (9, 9) = 9

deleteAndEarn([3,4,2]); //6 
//Delete 4 to earn 4 points. Consequently, 3 is also deleted. nums = [2]
//Delete 2 to earn 2 points. nums = []
//You earn a total of 6 points
