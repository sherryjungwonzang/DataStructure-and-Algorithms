//42. Trappinng Rain Water
//given 'n' non-negative integers representing an elevation map where the width og each bar is 1
//compute how much water it can trap after raining

//Approach: 
//using two pointers to check which side is trapped
var trappingRainWater = (height) => {
    //two pointers
    let left = 0;
    let right = height.length - 1;
    
    let leftMax = 0;
    let rightMax = 0;
    let trappedWater = 0;

    while(left < right) {
        //update leftMax by max value between leftMax and current left pointer
        leftMax = Math.max(leftMax, height[left]);
        rightMax = Math.max(rightMax, height[right]);

        if (height[left] < height[right]) { //left is trapped
            //need to check left pointer part
            //add it to trappedWater since we can trap the water
            trappedWater += leftMax - height[left];
            left++;
        } else { //right is trapped
            trappedWater += rightMax - height[right];
            right--;
        }
    }
    return trappedWater;
}
trappingRainWater([0,1,0,2,1,0,1,3,2,1,2,1]); //6 - The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
//[ 0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1 ]
//  L                                R
//leftMax = 0
//rightMax = 0
//trappedWater = 0

//L=0 < R=1 -> trappedWater = 0-0=0
//leftMax is still 0
//L++
//leftMax = 0
//rightMax = 1
//trappedWater = 0

//[ 0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1 ]
//     L                             R
//update leftMax to 1
//L=1 = R=1 -> trappedWater = 1-1=0
//R--;
//leftMax = 1
//rightMax = 1
//trappedWater = 0

//[ 0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1 ]
//     L                          R
//update rightMax to 2
//L=1 < R=2-> trappedWater = 1-1=0
//L++
//leftMax = 1
//rightMax = 2
//trappedWater = 0

//[ 0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1 ]
//        L                       R
//L=0 < R=2 -> trappedWater = 1-0 = 1
//update trappedWater to 1
//L++
//leftMax = 1
//rightMax = 2
//trappedWater = 1

//[ 0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1 ]
//           L                    R
//updateleftMax to 2
//L=2 = R=2 -> trappedWater = 2-2=0
//R--
//leftMax = 2
//rightMax = 2
//trappedWater = 1

//[ 0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1 ]
//           L                 R
//L=2 > R=1 -> trappedWater = 2-1 = 1
//add trappedWater 1 as total 2
//R--
//leftMax = 2
//rightMax = 2
//trappedWater = 2

//[ 0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1 ]
//           L              R
//L=2 = R=2 -> trappedWater = 2-2=0
//R--
//leftMax = 2
//rightMax = 2
//trappedWater = 2

//[ 0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1 ]
//           L           R
//update rightMax to 3
//L=2 < R=3 -> trappedWater 2-2=0
//L++
//leftMax = 2
//rightMax = 3
//trappedWater = 2

//[ 0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1 ]
//              L        R
//L=1 < R=3 -> trappedWater = 2-1 = 1
//add trappedWater 1 as total 3
//L++
//leftMax = 2
//rightMax = 3
//trappedWater = 3

//[ 0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1 ]
//                 L     R
//L=0 < R=3 -> trappedWater = 2 - 0 = 2
//add trappedWater 2 as total 5
//L++
//leftMax = 2
//rightMax = 3
//trappedWater = 5

//[ 0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1 ]
//                    L  R
//L=1 < R=3 -> trappedWater = 2 - 1 = 1
//add trappedWater 1 as total 6
//L++
//leftMax = 2
//rightMax = 3
//trappedWater = 6

//[ 0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1 ]
//                       LR
//done

trappingRainWater([4,2,0,3,2,5]); //9
