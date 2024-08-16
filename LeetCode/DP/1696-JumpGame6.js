//1696. Jump Game6
//given a 0-indexed integer array 'nums' and an integer 'k'
//initially standing at index 0
//in one move, you can jump at most k steps forward without going outside the boundaries of the array
//that is, you can jump from index 1 to any index in the range [i + 1, min(n - 1, i +k)] inclusive

//want to reach the last index of the array (index(n - 1))
//your score is the sum of all nums[j] for each index j you visited in the array
//return the max score you can get

//Approach:
//using DP and dequeue
var jumpGame6 = (nums, k) => {
    let n = nums.length;
    let dp = [...nums];
    let queue = [];

    //DP
    for (let i = 1; i < n; i++) {
        let prev = dp[i - 1];

        while (queue.length > 0 && queue[queue.length - 1] < prev) queue.pop();
        queue.push(prev);

        if (i - k - 1 >= 0 && dp[i - k - 1] === queue[0]) queue.shift();
        dp[i] += queue[0];
    }

    return dp[n - 1];
}
//TC: O(n) - the length of nums
//SC: O(k) - for dequeue
jumpGame6(nums = [1,-1,-2,4,-7,3], k = 2); //7 - [1, -1, 4, 3]
//DP = [1, -1, -2, 4, -7, 3]
//queue = [ ]

//i = 1
//[1, -1, -2, 4, -7, 3]
//     ^
//prev = dp[0] = 1
//queue = [ ] -> length is less than 0 -> no pop
//queue = [ ] -> [ 1, ]
//i - k - 1 = 1 - 2 - 1 = -2 -> no shift
//dp[1] += queue[0] = -1 + 1 = 0
//DP = [1, 0, -2, 4, -7, 3]

//i = 2
//[1, 0, -2, 4, -7, 3]
//        ^
//prev = dp[1] = 0
//queue = [ 1, ] -> 1 > 0 ->no pop
//queue = [ 1, ] -> [ 1, 0 ]
//i - k - 1 = 2 - 2 - 1 = -1 -> no shift
//dp[2] += queue[0] -> -2 + 1 = -1
//DP = [1, 0, -1, 4, -7, 3]

//i = 3
//[1, 0, -1, 4, -7, 3]
//           ^
//prev = dp[2] = -1
//queue = [ 1, 0 ] -> queue[1] = 0 > -1 -> no pop
//queue = [ 1, 0, -1 ]
//i - k - 1 = 3 - 2 - 1 = 0  && dp[0] = queue[0] -> shift 1
//queue = [ 0, -1 ]
//dp[3] += queue[0] -> 4 + 0 = 4
//DP = [1, 0, -1, 4, -7, 3]

//i = 4
//[1, 0, -1, 4, -7, 3]
//              ^
//prev = dp[3] = 4
//queue = [ 0, -1 ] -> queue[1] = -1 < 4 -> pop
//queue = [ 0, -1 ] -> [ 0 ]
//queue = [ 0, -1 ] -> [ 0 ] -> queue[0] = 0 < 4 -> pop
//queue = [ 0 ] -> [ ]
//queue = [ 4 ]
//i - k - 1 = 4 - 2 - 1 = 1  && dp[1] != queue[0] -> no shift
//queue = [ 4 ] 
//dp[4] += queue[0] -> -7 + 4 = -3
//DP = [1, 0, -1, 4, -3, 3]

//i = 5
//[1, 0, -1, 4, -3, 3]
//                  ^
//prev = dp[4] = -3
//queue = [ 4 ]  -> queue[0] = 4 > -3 -> no pop
//queue = [ 4 ] -> [ 4, -3 ]
//i - k - 1 = 5 - 2 - 1 = 2  && dp[2] != queue[0] -> no shift
//dp[5] += queue[0] -> 3 + 4 = 7
//[1, 0, -1, 4, -3, 7]

jumpGame6(nums = [10,-5,-2,4,0,3], k = 3); //17 - [10,4,3]

jumpGame6(nums = [1,-5,-20,4,-1,3,-6,-3], k = 2); //0
