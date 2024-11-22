//1646. Get Maximum In Generated Array
//given an integer n
//a 0-indexed integer array nums of length n + 1 is generated in the following way:
//nums[0] = 0
//nums[1] = 1
//nums[2 * i] = nums[i] when 2 <= 2 * i <= n
//nums[2 * i + 1] = nums[i] + nums[i + 1] when 2 <= 2 * i + 1 <= n
//return the maximum integer in the array nums​​
var getMaximum = (n) => {
    //base case
    if (n <= 1) return n;

    let arr = [0, 1];

    for (let i = 2; i <= n; i++) {
        arr.push(i % 2 === 0 ? arr[i / 2] : arr[(i - 1) / 2] + arr[(i - 1) / 2 + 1]);
    }

    return Math.max(...arr)
}
getMaximum(7); //3
//arr = [0, 1]

//i = 2 -> 2 % 2 = 0
//arr[2 / 2 = 1] = 1
//arr = [0, 1, 1]

//i = 3 -> 3 % 2 != 0
//arr[(3 - 1) / 2 = 1] + arr[(3 - 1) / 2 + 1 = 2] = 1 + 1 = 2
//arr = [0, 1, 1, 2]

//i = 4 -> 4 % 2 = 0
//arr[4 / 2 = 2] = 1
//arr = [0, 1, 1, 2, 1]

//i = 5 -> 5 % 2 != 0
//arr[(5 - 1) / 2 = 2] + arr[(5 - 1) / 2 + 1 = 3] = 1 + 2 = 3
//arr = [0, 1, 1, 2, 1, 3]

//i = 6 -> 6 % 2 = 0
//arr[6 / 2 = 3] = 2
//arr = [0, 1, 1, 2, 1, 3, 2]

//i = 7 -> 7 % 2 != 0
//arr[(7 - 1) / 2 = 3] + arr[(7 - 1) / 2 + 1 = 4] = 2 + 1 = 3
//arr = [0, 1, 1, 2, 1, 3, 2, 3]

//max from arr = 3

getMaximum(2); //1

getMaximum(3); //2
