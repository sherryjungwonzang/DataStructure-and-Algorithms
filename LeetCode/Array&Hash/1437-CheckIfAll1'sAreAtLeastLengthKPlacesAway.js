//1437. Check If All 1's Are At Least Length K Places Away
//given an binary array nums and an integer k
//return true if all 1's are at least k places away from each other, otherwise return false
var kLengthAway = (nums, k) => {
    //initial setting
    let currLen = k;

    for (let num of nums) {
        if (num === 0) {
            //increasing 0 length
            currLen++;

            continue;
        }

        //if num is not 0
        if (currLen < k) return false;

        //resetting
        currLen = 0;
    }

    return true;
}
kLengthAway(nums = [1,0,0,0,1,0,0,1], k = 2); //true
//[1, 0, 0, 0, 1, 0, 0, 1]
// ^
//num = 1
//curr = 2 = k: valid -> true
//curr = 2 -> 0

//[1, 0, 0, 0, 1, 0, 0, 1]      [1, 0, 0, 0, 1, 0, 0, 1]        [1, 0, 0, 0, 1, 0, 0, 1]
//    ^                                ^                                  ^
//num = 0                       num = 0                         num = 0
//curr = 2 -> 0 -> 1            curr = 2 -> 0 -> 1 -> 2         curr = 2 -> 0 -> 1 -> 2 -> 3

//[1, 0, 0, 0, 1, 0, 0, 1]
//             ^ 
//num = 1
//curr = 3 > k: valid -> true
//curr = 2 -> 0 -> 1 -> 2 -> 3 -> 0

//[1, 0, 0, 0, 1, 0, 0, 1]                      [1, 0, 0, 0, 1, 0, 0, 1]
//                ^                                                ^
//num = 0                                       num = 0
//curr = 2 -> 0 -> 1 -> 2 -> 3 -> 0 -> 1        curr = 2 -> 0 -> 1 -> 2 -> 3 -> 0 -> 1 -> 2

//[1, 0, 0, 0, 1, 0, 0, 1]
//                      ^ 
//num = 1
//curr = 2 = k: valid -> true
//curr = 2 -> 0 -> 1 -> 2 -> 3 -> 0 -> 1 -> 2 -> 0

//true

kLengthAway(nums = [1,0,0,1,0,1], k = 2); //false
//[1, 0, 0, 1, 0, 1]
// ^
//num = 1
//curr = 2 = k: valid -> true
//curr = 2 -> 0

//[1, 0, 0, 1, 0, 1]      [1, 0, 0, 1, 0, 1]  
//    ^                          ^              
//num = 0                  num = 0                
//curr = 2 -> 0 -> 1       urr = 2 -> 0 -> 1 -> 2    

//[1, 0, 0, 1, 0, 1]
//          ^
//num = 1
//curr = 2 = k: valid -> true
//curr = 2 -> 0 -> 1 -> 2 -> 0

//[1, 0, 0, 1, 0, 1]
//             ^
//num = 0
//curr = 2 -> 0 -> 1 -> 2 -> 0 -> 1

//[1, 0, 0, 1, 0, 1]
//                ^ 
//num = 1
//curr = 1 < k: invalid -> false
//curr = 2 -> 0 -> 1 -> 2 -> 0 -> 1 -> 0

//false

