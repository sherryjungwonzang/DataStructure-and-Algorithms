//56. Merge Interval
//given an array of intervals - where[i] = [start, end]
//merge all overlapping intervals
//and return an array of the non-overlapping intervals that cover all the intervals in the input

//Approach:
//sorting the array based on the first element
//prev and curr pointers - setting the first array as previous and the next array as current
//keep comparing previous and current to figure out the overlapping intervals
var mergeInterval = (intervals) => {
    //setting the start and end point of interval
    const start = 0;
    const end = 1;

    //sorting in ascending order
    intervals = intervals.sort((a, b) => a[start] - b[start]);

    //setting the first array as prev
    let prev = intervals[0];
    let res = [prev]; //adding the first array and start looping

    //looping
    for (let curr of intervals) {
        //if there is an overlapping
        if (curr[start] <= prev[end]) {
            //need to merge
            prev[end] = Math.max(prev[end], curr[end]);
        } else { //no overlapping
            res.push(curr);
            prev = curr; //update prev and curr position to the next
        }
    }
    return res;
}
//TC: O(n) - length of input
//SC: O(1)
//             prev    curr
//res = [ [1,3], ]
//curr:2 <= previous:3 -> previous[end] = Math.max(prev[end]) = 6
//combination = [1,6]
//res = [ [1,6], ]
//         prev                 curr
//no overlapping -> add to res
//res = [ [1,6], [8, 10], ]
//                              prev      curr
//no overlapping -> add to res
//res = [ [1,6], [8, 10], [15, 18] ]


mergeInterval([[1,4], [4,5]]); //[[1,5]
//             prev    curr
//res = [ [1,4], ]
//curr:4 <= previous:4 -> previous[end] = Math.max(curr[end]) = 5
//combination = [1,5]
//res = [ [1,5] ]
