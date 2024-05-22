//128. Longest Consecutive Sequence
//given an unsorted array of integers 'nums'
//return the length of the longest consecutive sequnce
//must write O(n) time complextiyy algorithm

//Approach:
//using Set - to remove duplicates in array
//check whether the nums's previous value is in the array or not
//->YES: continue & check the nums' next value is in the array or not
//->NO: add count and move
var longestConsecutiveSequence = (nums) => {
    //to remove duplicates
    let set = new Set(nums);
    //the sequence of consecutive
    let streak = 0;

    for (let num of set) {
        if (set.has(num - 1)) continue;

        //otherwise - find the start of sequence
        let currStreak = 1;

        //when find the new sequence & check consecutive sequence in array
        while(set.has(nums + 1)) {
            currStreak++;
            num++;
        }

        //update streak
        streak = Math.max(streak, currStreak);
    }
    return streak;
}
//TC: O(n)
//even O(n + n) - we loop through the while loop on array and one of the values with each while loop
longestConsecutiveSequence([100, 4, 200, 1, 3, 2]); //4 - the longest consecutive sequence is [1,2,3,4]
//set = [ 100, 4, 200, 1, 3, 2 ]
//streak = 0

//num: 100
//check - if there is 99 -> NO
//currStreak = 1
//check - if there is 101 in the array -> NO
//meaning no consecutive

//num: 4
//check - if there is 3 -> YES
//currStreak = 1
//check - if there is 5 -> NO
//meaing 3 is not the starting point

//num: 200
//check - if there is 199 -> NO
//currStreak = 1
//check - if there is 201 -> NO
//meaning no consecutive

//num: 1
//check - if there is 0 -> NO
//currStreak = 1
//checking the next values-----------
//check - if there is 2 -> YES
//currStreak = 2
//check - if there is 3 -> YES
//currStreak = 3
//check - if there is 4 -> YES
//currStreak = 4
//meaning starting from 1,2,3,4 is the longest consecutive sequence

//update streak = max(0, 4) = 4
//return 4

longestConsecutiveSequence([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]); //9
//set = [ 0, 3, 7, 2, 5, 8, 4, 6, 1 ] - removed duplicates
//streak = 0

//num: 0
//check - if there is -1 -> NO
//currStreak = 1
//check - if there is num+1(1) in the array -> YES
//currStreak = 2
//check - if there is 2 in the array -> YES
//currStreak = 3
//check - if there is 3 in the array -> YES
//currStreak = 4
//check - if there is 4 in the array -> YES
//currStreak = 5
//check - if there is 5 in the array -> YES
//currStreak = 6
//check - if there is 6 in the array -> YES
//currStreak = 7
//check - if there is 7 in the array -> YES
//currStreak = 8
//check - if there is 8 in the array -> YES
//currStreak = 9

//update streak = max(0, 9) = 9
//return 9
