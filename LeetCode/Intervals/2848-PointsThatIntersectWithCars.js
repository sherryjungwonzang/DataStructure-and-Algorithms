//2848. Points That Intersect With Cars
//given a 0-indexed 2D integer array nums
//representing the coordinates of the cars parking on a number line
//for any index i, nums[i] = [start_i, end_i] where start_i is the starting point of the i_th car 
//and end_i is the ending point of the i_th car
//return the num of integer points on the line that are covered with any part of a car
var intersectCarsPoints = (nums) => {
    let res = [];

    for (let i = 0; i < nums.length; i++) {
        for (j = nums[i][0]; j <= nums[i][1]; j++) {
            //collecting elements within each range
            if (!res.includes(j)) res.push(j);
        }
    }

    return res.length;
}
intersectCarsPoints([[3,6],[1,5],[4,7]]); //7
//[[3, 6], [1, 5], [4, 7]]
//   ^
//collecting all elements from 3 to 6
//res = [ 3, 4, 5, 6 ||  ]

//[[3, 6], [1, 5], [4, 7]]
//           ^
//collecting all elements from 1 to 5
//res = [ 3, 4, 5, 6 || 1, 2,  ]

//[[3, 6], [1, 5], [4, 7]]
//                    ^
//collecting all elements from 4 to 7
//res = [ 3, 4, 5, 6 || 1, 2 || 7 ]
//res.length = 7

intersectCarsPoints([[1,3],[5,8]]); //7 - Points intersecting at least one car are 1, 2, 3, 5, 6, 7, 8
//[[1, 3], [5, 8]]
//   ^
//collecting all elements from 1 to 3
//res = [ 1, 2, 3 ||  ]

//[[1, 3], [5, 8]]
//            ^
//collecting all elements from 5 to 8
//res = [ 1, 2, 3 || 5, 6, 7, 8 ]
//res.length = 7
