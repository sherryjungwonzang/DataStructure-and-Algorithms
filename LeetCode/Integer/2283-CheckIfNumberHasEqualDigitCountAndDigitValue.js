//2283. Check If Number Has Equal Digit Count And Digit Value
//given a 0-indexed string num of length n consisting of digits
//return true if for every index i in the range 0 <= i < n, the digit i occurs num[i] times in num, otherwise return false
var equalDigitCountValue = (nums) => {
    //creating separate arr for tracking frequency
    let arr = Array(nums.length).fill(0);

    //filling frequency
    for (let num of nums) arr[num]++;

    //checking equal
    return arr.join('') === nums;
}
equalDigitCountValue("1210"); //true
//1 2 1 0
//^ ^ ^ ^
//arr = [0, 0, 0, 0] -> [0, 1, 0, 0] -> [0, 1, 1, 0] -> [0, 2, 1, 0] -> [1, 2, 1, 0] 

//'1210' === nums
//true

equalDigitCountValue("030"); //false
//0 3 0
//^ ^ ^
//arr = [0, 0, 0] -> [1, 0, 0] -> [1, 0, 0] -> [2, 0, 0]

//'200' != nums
//false
