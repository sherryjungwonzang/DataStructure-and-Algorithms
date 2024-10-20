//491. Non Decreasing Subsequences
//given an integer array nums
//return all the different possible non-decreasing subsequences of the given array with at least two elements
//you may return the answer in any order

//Approach:
//using recursion
var nonDecreasingSubsequence = (nums) => {
    let m = nums.length;
    let res = [];

    //recursion
    function recurse(i, subset) {
        let set = new Set(); 

        for (let j = i; j < m; j++) {
            if (set.has(nums[j]) || subset.length > 0 && subset[subset.length - 1] > nums[j]) continue;

            set.add(nums[j]);
            subset.push(nums[j]);

            //at least two elements
            if (subset.length >= 2) res.push([...subset]);

            //recursive calls
            recurse(j + 1, subset);

            subset.pop();
        }
    }

    recurse(0, []);

    return res;
}
nonDecreasingSubsequence([4,6,7,7]); //[[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]]
//j = 0, subset = []
//set = { 4 }
//subset = [ 4, ]
//res = []
//recursion: recurse(1, [4])

//j = 1, subset = [4]                                                   j = 1, subset = []                                      
//set = { 6 }                                                           set = { 4, 6 }
//subset = [ 4, 6 ]                                                     subset = [6]
//res = [ [4, 6] ]                                                      res = [ [4, 6], [4, 6, 7], [4, 6, 7, 7], [4, 7], [4, 7, 7], ]
//recursion: recurse(2, [4, 6])                                         recursion: recurse(2, [6])

//j = 2, subset = [4, 6]                                                j = 2, subset = [6]                                                                             j = 2, subset = []
//set = { 7 }                                                           set = { 7 }                                                                                     set = { 4, 6, 7 }
//subset = [ 4, 6, 7 ]                                                  subset = [ 6, 7 ]                                                                               subset = [ 7 ]
//res = [ [4, 6], [4, 6, 7],  ]                                         res = [ [4, 6], [4, 6, 7], [4, 6, 7, 7], [4, 7], [4, 7, 7], [6, 7], ]                           res = [ [4, 6], [4, 6, 7], [4, 6, 7, 7], [4, 7], [4, 7, 7], [6, 7], [6, 7, 7], ]
//recursion: recurse(3, [4, 6, 7])                                      recursion: recurse(3, [6, 7])                                                                   recursion: recurse(3, [7])

//j = 3, subset = [4, 6, 7]                                             j = 3, subset = [6, 7]                                                                          j = 3, subset = [7]           
//set = { 7 }                                                           set = { 7 }                                                                                     set = { 7 }
//subset = [ 4, 6, 7, 7 ]                                               subset = [ 6, 7, 7 ]                                                                            subset = [ 7, 7 ]
//res = [ [4, 6], [4, 6, 7], [4, 6, 7, 7], ]                            res = [ [4, 6], [4, 6, 7], [4, 6, 7, 7], [4, 7], [4, 7, 7], [6, 7], [6, 7, 7], ]                res = [ [4, 6], [4, 6, 7], [4, 6, 7, 7], [4, 7], [4, 7, 7], [6, 7], [6, 7, 7], [7, 7], ]

//backtracking                                                          backtracking                                                                                    backtracking
//subset = [ 4, 6, 7, 7 ] -> [ 4, 6, 7 ] -> [ 4, 6 ] -> [4]             subset = [ 6, 7, 7 ] -> [ 6, 7 ] -> [ 6 ] -> []                                                 subset = [ 7, 7 ] -> [7] -> []
//j = 2, subset = [4]
// set = { 6, 7 }
//subset = [ 4, 7 ]
//res = [ [4, 6], [4, 6, 7], [4, 6, 7, 7], [4, 7], ]

//j = 3, subset = [4, 7]
// set = { 7 }
//subset = [ 4, 7, 7 ]
//res = [ [4, 6], [4, 6, 7], [4, 6, 7, 7], [4, 7], [4, 7, 7], ]

//backtracking
//subset = [ 4, 7, 7 ] -> [ 4, 7 ] -> [4] -> []

//[[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]]

nonDecreasingSubsequence([4,4,3,2,1]); //[[4,4]]
