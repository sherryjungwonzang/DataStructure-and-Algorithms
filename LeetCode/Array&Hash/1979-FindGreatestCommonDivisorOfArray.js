//1979. Find Greatest Common Divisor Of Array
//given an integer array 'nums'
//return the greatest common divisor of the smallest number and largest number in nums
//the gcd of two numbers is the largest positive integer that evenly divides both numbers
var findGCD = (nums) => {
    let min = Math.min(...nums);
    let max = Math.max(...nums);
    
    //find GCD
    while (max !== 0) {
        let div = min % max; //divisor
    
        min = max;
                
        max = div;
    }
    
    return min;
}
findGCD([2,5,6,9,10]); //2 - GCD between 2 and 10 is 2
//min = 2 -> 10 -> 2
//max = 10 -> 2 -> 0
//div = 2 % 10 = 2 || 10 % 2 = 0
//2

findGCD([7,5,6,8,3]); //1 - GCD between 3 and 8 is 1
//min = 3 -> 8 -> 3 -> 2 -> 1
//max = 8 -> 3 -> 2 -> 1 -> 0
//div = 3 % 8 = 3 || 8 % 3 = 2 || 3 % 2 = 1 || 2 % 1 = 0
//1

findGCD([3,3]); //3 - GCD between 3 and 3 is 3
//min = 3 -> 3
//max = 3 -> 0
//div = 3 % 3 = 0 
//3
