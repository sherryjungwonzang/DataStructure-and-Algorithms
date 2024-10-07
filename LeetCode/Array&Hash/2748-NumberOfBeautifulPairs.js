//2748. Number Of Beautiful Pairs
//given a 0-indexed integer array nums
//a pair of indices i, j where 0 <= i < j < nums.length is called beautiful 
//if the first digit of nums[i] and the last digit of nums[j] are coprime
//return the total number of beautiful pairs in nums

//two integers x and y are coprime if there is no integer greater than 1 that divides both of them
//in other words, x and y are coprime if gcd(x, y) === 1, where gcd(x, y) is the greatest common divisor of x and y

//Approach:
//using gcd
var beautifulPairs = (nums) => {
    let count = 0;

    //traversing array
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j< nums.length; j++) {
            let firstDigit = nums[i].toString()[0];
            let lastDigit = nums[j] % 10;

            //checking coprime
            if (gcd(firstDigit, lastDigit) === 1) count++;
        }
    }

    //GCD
    function gcd(a, b) {
        a = Math.abs(a);
        b = Math.abs(b);

        //find GCD
        while (b !== 0) {
            let div = a % b; //divisor

            a = b;

            b = div;
        }

        return a;
    }

    return count;
}
beautifulPairs([2,5,1,4]); //5
//[2, 5, 1, 4]
// i  j
//i = 0, j = 1 -> 2 & 5
//fistDigit = 2
//lastDigit = 5
//gcd(2, 5) = 1 -> count = 0 -> 1

//[2, 5, 1, 4]
// i     j
//i = 0, j = 2 -> 2 & 1
//fistDigit = 2
//lastDigit = 1
//gcd(2, 1) = 1 -> count = 0 -> 1 -> 2

//[2, 5, 1, 4]
// i        j
//i = 0, j = 3 -> 2 & 4
//fistDigit = 2
//lastDigit = 4
//gcd(2, 4) != 1 -> count = 0 -> 1 -> 2 -> 2

//[2, 5, 1, 4]
//    i  j
//i = 1, j = 2 -> 5 & 1
//fistDigit = 5
//lastDigit = 1
//gcd(5, 1) = 1 -> count = 0 -> 1 -> 2 -> 2 -> 3

//[2, 5, 1, 4]
//    i     j
//i = 1, j = 3 -> 5 & 4
//fistDigit = 5
//lastDigit = 4
//gcd(5, 4) = 1 -> count = 0 -> 1 -> 2 -> 2 -> 3 -> 4

//[2, 5, 1, 4]
//       i   j
//i = 2, j = 3 -> 1 & 4
//fistDigit = 1
//lastDigit = 4
//gcd(1, 4) = 1 -> count = 0 -> 1 -> 2 -> 2 -> 3 -> 4 -> 5

beautifulPairs([11,21,12]); //2
//[11, 21, 12]
// i    j
//i = 0, j = 1 -> 11 & 21
//fistDigit = [0] = 1
//lastDigit = 21 % 10 = 1
//gcd(1, 1) = 1 -> count = 0 -> 1

//[11, 21, 12]
// i       j
//i = 0, j = 2 -> 11 & 12
//fistDigit = [0] = 1
//lastDigit = 12 % 10 = 2
//gcd(1, 2) = 1 -> count = 0 -> 1 -> 2

//[11, 21, 12]
//      i   j
//i = 1, j = 2 -> 21 & 12
//fistDigit = [0] = 2
//lastDigit = 12 % 10 = 2
//gcd(2, 2) != 1 -> count = 0 -> 1 -> 2 -> 2
