//45. Jump Game2
//given a 0-indexed array of integers 'nums' length of 'n'
//you are initially positioned at nums[0]
//each element nums[i] represents the max length of a forward jump from index i
//in other words, if you are at nums[i], you can jump to any nums[i + j] 
//where 0 <= j <= nums[i] and i + j < n
//return the min number of jumps to reach nums[n - 1]
//the test cases are generated such that you can reach nums[n - 1]

//Approach:
//using Greedy algorithms - to maximize reach within the array in the min number of jumps
//the max reach is calculated by comparing the curr max and the sum of the curr index and jump length from that index
//each jump is made at the most strategic point, extending the reach as far as possible within the min num of jumps
var jumpGame2_Greedy = (nums) => {
    //base case
    if (nums.length === 1) return 0;

    let prev = 0; //the furthest position from prev jumps
    let max = 0;
    let jump = 0;

    //looping
    for (let i = 0; i < nums.length; i++) {
        max = Math.max(max, 1 + nums[i]);

        //indicating a new jump must be made to go further
        if (i === prev) {
            jump++;
            prev = max;
        }
    }

    return jump;
}
//TC: O(n)
//SC: O(1)
jumpGame2([2,3,1,1,4]); //2 - the min number of jumps to reach the last index is 2

jumpGame2([2,3,0,1,4]); //2
