//976. Largest Perimeter Triangle
//given an integer array nums
//return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths
//if it is impossible to form any triangle of a non-zero area, return 0

//Approach:
//using sorting
var largestPerimeterTriangle = (nums) => {
    nums.sort((a, b) => b - a);

    for (let i = 0; i < nums.length; i++) {
        //three sides of triangle
        let x = nums[i];
        let y = nums[i + 1];
        let z = nums[i + 2];

        //valid triangle
        if (x < y + z) return x + y + z;
    }

    return 0; //invalid triangle
}
largestPerimeterTriangle([2,1,2]); //5
//sorting: [2,2,1]
//x = 2 || y = 2 || z = 1
//2 < 2 + 1 -> valid triangle 

largestPerimeterTriangle([1,2,1,10]); //0
//sorting: [10,2,1,1]
//x = 10, y = 2, z = 1
//10 > 3 + 1 -> invalid triangle

//x = 2, y = 1, z = 1
//2 = 1 + 1 -> invalid triangle
