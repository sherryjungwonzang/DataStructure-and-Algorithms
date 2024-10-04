//1018. Binary Prefix Divisible By 5
//given a binary array nums - 0-indexed
//we define xi as the number whose binary representation is the subarray nums[0..i] (from most-significant-bit to least-significant-bit)

//for example, if nums = [1,0,1], then x0 = 1, x1 = 2, and x2 = 5
//return an array of booleans answer where answer[i] is true if xi is divisible by 5
var divisibleBy5 = (nums) => {
    let base = 0;

    return nums.map((num) => {
        base = base * 2 + num;

        //checking divisible by 5
        base %= 5;

        return base === 0;
    });
}
divisibleBy5([0,1,1]); //[T, F, F]
//[0, 1, 1]
// ^
//base = 0 -> 0 * 2 + 0 = 0
//0 % 5 = 0 -> divisible
//[ True, 

//[0, 1, 1]
//    ^
//base = 0 -> 0 * 2 + 0 = 0 -> 0 * 2 + 1 = 1
//1 % 5 != 0 -> not divisible
//[ True, False, 

//[0, 1, 1]
//       ^
//base = 0 -> 0 * 2 + 0 = 0 -> 0 * 2 + 1 = 1 -> 1 * 2 + 1 = 3
//3 % 5 != 0 -> not divisible
//[ True, False, False]

divisibleBy5([1,1,1]); //[F, F, F]
//[1, 1, 1]
// ^
//base = 0 -> 0 * 2 + 1 = 1
//1 % 5 = 0 -> not divisible
//[ False, 

//[1, 1, 1]
//    ^
//base = 0 -> 0 * 2 + 1 = 1 -> 1 * 2 + 1 = 3
//3 % 5 != 0 -> not divisible
//[ False, False, 

//[1, 1, 1]
//       ^
//base = 0 -> 0 * 2 + 1 = 1 -> 1 * 2 + 1 = 3 -> 3 * 2 + 1 = 7
//7 % 5 != 0 -> not divisible
//[ False, False, False ]
