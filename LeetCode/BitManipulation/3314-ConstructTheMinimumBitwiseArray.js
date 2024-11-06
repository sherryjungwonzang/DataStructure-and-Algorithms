//3314. Construct The Minimum Bitwise Array
//given an array nums consisting of n prime integers
//you need to construct an array ans of length n, such that, for each index i, 
//the bitwise OR of ans[i] and ans[i] + 1 is equal to nums[i], i.e. ans[i] OR (ans[i] + 1) == nums[i]
//additionally, you must minimize each value of ans[i] in the resulting array
//if it is not possible to find such a value for ans[i] that satisfies the condition, then set ans[i] = -1

//Approach:
//using bitwise OR operation
var minBitwiseArr = (nums) => {
    let res = [];

    //iterating array
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let found = false;

        for (let curr = 0; curr < num; curr++) {
            //bitwise OR operation
            if ((curr | (curr + 1)) === num) { //still prime
                res.push(curr);

                //changing valid
                found = true;

                break;
            }
        }

        //not valid
        if (!found) res.push(-1);
    }

    return res;
}
//TC: O(n)
//SC: O(n)
minBitwiseArr(nums = [2,3,5,7]); //[-1, 1, 4, 3]
//[2, 3, 5, 7]
// ^
//num = 2 | found = false
//curr = 0 | curr + 1 = 1 = 1           curr = 1 | curr + 1 = 2 = 3
//not equal with 2                      not equal with 2       
//res = [-1, ]            

//[2, 3, 5, 7]
//    ^
//num = 3 | found = false               
//curr = 0 | curr + 1 = 1 = 1           curr = 1 | curr + 1 = 2 = 3
//not equal with 3                      equal with 3                        
//                                      found = false -> true
//                                      res = [-1, 1, ] 

//[2, 3, 5, 7]
//       ^
//num = 5 | found = false               
//curr = 0 | curr + 1 = 1 = 1           curr = 1 | curr + 1 = 2 = 3         curr = 2 | curr + 1 = 3 = 3         curr = 3 | curr + 1 = 4 = 7         curr = 4 | curr + 1 = 5 = 5
//not equal with 5                      not equal with 5                    not equal with 5                    not equal with 5                    equal with 5 
//                                                                                                                                                  found = false -> true
//                                                                                                                                                  res = [-1, 1, 4, ] 

//[2, 3, 5, 7]
//          ^
//num = 7 | found = false               
//curr = 0 | curr + 1 = 1 = 1           curr = 1 | curr + 1 = 2 = 3         curr = 2 | curr + 1 = 3 = 3         curr = 3 | curr + 1 = 4 = 7  
//not equal with 7                      not equal with 7                    not equal with 7                    equal with 7           
//                                                                                                              found = false -> true
//                                                                                                              res = [-1, 1, 4, 3] 

//res = [-1, 1, 4, 3] 

minBitwiseArr(nums = [11,13,31]); //[9, 12, 15]
