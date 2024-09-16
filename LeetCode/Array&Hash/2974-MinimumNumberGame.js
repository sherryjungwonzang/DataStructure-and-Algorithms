//2974. Minimum Number Game
//given a 0-indexed integer array nums of even length and there is also an empty array arr
//alice and bob decided to play a gam where in every round Alice and Vov will do one move

//the rules of the game are as follows:
//every round, first alice will remove the min element from nums, and then bob does the same
//now, first bob will append the removed element in the array arr, and then Alice does the same
//the game continues until nums becomes empty

//return the resulting array arr

//Approach:
//using sorting and swapping
var minNumGame = (nums) => {
    //sorting
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i += 2) {
        //swapping
        if (i + 1 < nums.length) [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
    }

    return nums;
}
minNumGame([5,4,2,3]);  //[3,2,5,4]
//In round one, first Alice removes 2 and then Bob removes 3. Then in arr firstly Bob appends 3 and then Alice appends 2. So arr = [3,2]
//At the begining of round two, nums = [5,4]. Now, first Alice removes 4 and then Bob removes 5. Then both append in arr which becomes [3,2,5,4]

//sorting: [2, 3, 4, 5]
//          ^
//swapping: [2, 3] -> [3, 2]

//sorting: [3, 2, 4, 5]
//                ^
//swapping: [4, 5] -> [5, 4]

//[3, 2, 5, 4]

minNumGame([2,5]); //[5,2]
//In round one, first Alice removes 2 and then Bob removes 5. Then in arr firstly Bob appends and then Alice appends

//sorting: [2, 5]
//          ^
//swapping: [2, 5] -> [5, 2]

//[5, 2]
