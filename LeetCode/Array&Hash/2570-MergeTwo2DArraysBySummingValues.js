//2570. Merge Two 2D Arrays By Summing Values
//given two 2D integer arrays nums1 and nums2
//nums1[i] = [idi, vali] indicate that the number with the id idi has a value equal to vali
//nums2[i] = [idi, vali] indicate that the number with the id idi has a value equal to vali
//each array contains unique ids and is sorted in ascending order by id

//merge the two arrays into one array that is sorted in ascending order by id, respecting the following conditions:
//only ids that appear in at least one of the two arrays should be included in the resulting array
//each id should be included only once and its value should be the sum of the values of this id in the two arrays
//if the id does not exist in one of the two arrays then its value in that array is considered to be 0

//return the resulting array - the returned array must be sorted in ascending order by id

//Approach:
//using map
var mergeTwo2DArrays = (nums1, nums2) => {
    let map = {};
    let res = [];

    //checking nums1 array
    for (let [key, val] of nums1) {
        if (map[key] === undefined) map[key] = 0;

        //setting
        map[key] += val;
    }

    //checking nums2 array
    for (let [key, val] of nums2) {
        if (map[key] === undefined) map[key] = 0;

        //setting
        map[key] += val;
    }

    for (let key in map) {
        res.push([Number(key), map[key]]);
    }

    return res;
}
mergeTwo2DArrays(nums1 = [[1,2],[2,3],[4,5]], nums2 = [[1,4],[3,2],[4,1]]); //[[1,6],[2,3],[3,2],[4,6]]
//[ [1, 2], [2, 3], [4, 5] ]                [ [1, 4], [3, 2], [4, 1] ]
//   ^       ^       ^                         ^       ^       ^
//map = {
//  1: 2 -> 6
//  2: 3,
//  4: 5 -> 6,
//  3: 2
//}

//looping based on key
//res = [ [1, 6], [2, 3], [3, 2], [4, 6] ]

mergeTwo2DArrays(nums1 = [[2,4],[3,6],[5,5]], nums2 = [[1,3],[4,3]]); //[[1,3],[2,4],[3,6],[4,3],[5,5]]
//[ [2, 4], [3, 6], [5, 5] ]                [ [1, 3], [4, 3] ]
//   ^       ^       ^                         ^       ^    
//map = {
//  2: 4,
//  3: 6,
//  5: 5,
//  1: 3,
//  4: 3
//}

//looping based on key
//res = [ [1, 3], [2, 4], [3, 6], [4, 3], [5, 5] ]
