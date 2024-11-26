//3024. Type Of Triangle
//given a 0-indexed integer array nums of size 3 which can form the sides of a triangle
//a triangle is called equilateral if it has all sides of equal length
//a triangle is called isosceles if it has exactly two sides of equal length
//a triangle is called scalene if all its sides are of different lengths
//return a string representing the type of triangle that can be formed or "none" if it cannot form a triangle

//Approach:
//using set
var typeOfTriangle = (nums) => {
    let set = new Set(nums).size;

    //base case - triangle formation
    if ((nums[0] + nums[1] <= nums[2]) || (nums[0] + nums[2] <= nums[1]) || (nums[1] + nums[2] <= nums[0])) return "none";

    if (set === 1) return "equilateral";
    else if (set === 2) return "isosceles";
    else if (set === nums.length) return "scalene";
}
typeOfTriangle([3,3,3]); //"equilateral"
//set = [3].size = 1
//"equilateral"

typeOfTriangle([3,4,5]); //"scalene"
//set = [3, 4, 5].size = 3 === nums.size
//"scalene"
