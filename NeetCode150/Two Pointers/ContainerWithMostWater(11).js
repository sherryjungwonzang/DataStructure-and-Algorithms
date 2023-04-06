//Container with most water (11)
//given an integer array 'height' of length 'n'
//there are n vertical lines drawn such that the two endpoints of the i_th line are (i, 0) and (i, height)

//find two lines that together with the x-axis form a container
//such that the container contains the most water
//return the max amount of water a container can store

//Approach:
//using the left and right pointer
//area formula = height * width
//check the area with the smallest value of heights
//move pointers to inwards based on the smallest value
var containerWithMaxWater = (height) => {
  //two pointers
  let left = 0;
  let right = height.length - 1;
  let max = 0;

  while(left < right) {
    let width = (right - left);

    let maxArea = Math.min(height[left], height[right]) * width;

    max = Math.max(max, maxArea);

    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
}
containerWithMaxWater([1,8,6,2,5,4,8,3,7]); //49
//max = 0
//[1, 8, 6, 2, 5, 4, 8, 3, 7]
// l                       r

//width: (9-1) * height: 1 = 8
//max = 0 -> 8

//    l                    r
//width: (9-2) * height: 7 = 49
//max = 0 -> 8 -> 49

//    l                  r
//    l                    r
//width: (8-2) * height: 3 = 18
//max = 0 -> 8 -> 49
//...


containerWithMaxWater([1,1]); //1
//max = 0
//width: (2-1) * height: 1 = 1
//max = 0 -> 1
