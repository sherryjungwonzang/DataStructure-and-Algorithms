//435. Non-overlapping Intervals
//given an array of intervals 'intervals' - where intervals[i] = [start_i, end_i]
//return the min num of intervals you need to remove to make the rest of the intervals non-overlapping

//Approach:
//sorting the array based on the end element
//checking whether there is an overlapping or not
//using prev and curr pointers - setting the first array as previous and the next array as current
var nonOverlappingIntervals = (intervals) => {
    //sorting based on [1] index
    intervals.sort((a, b) => a[1] - b[1]);

    let count = 0;
    let prev = 0;

    for (let i = 1; i < intervals.length; i++) {
        let curr = intervals[i]; //next to prev

        //overlapping
        if (curr[0] < intervals[prev][1]) {
            count++;
        } else { //non-overlapping
            prev = i; //move prev to curr position
        }
    }
    return count;
}
//TC: O(nlog(n))
//SC: O(1)
nonOverlappingIntervals([[1,2], [2,3], [3,4], [1,3]]); //1 - [1,3] can be removed and the rest of the intervals are non-overlapping
//sort: [1,2], [2,3], [1,3], [3,4]
//       prev   curr
//count = 0
//curr[start]=2 = prev[end]=2 -> no overlapping

//              prev   curr
//curr[start]=1  < prev[end]=3 -> overlapping
//count = 1

//                     prev   curr
//curr[start]=3 = prev[end]=3 -> no overlapping
//count = 1

nonOverlappingIntervals([[1,2], [1,2], [1,2]]); //2 - two [1,2] can be removed and the rest of the intervals are non-overlapping
//sorted: [1,2], [1,2], [1,2]
//        prev    curr
//count = 0
//curr[start] = 2 > prev[0][end] = 1 -> overlapping
//count = 1
//               prev    curr
//curr[start] = 2 > prev[0][end] = 1 -> overlapping
//count = 2

nonOverlappingIntervals([[1,2], [2,3]]); //0 - dont need to remove any of the intervals since they are already non-overlapping
//sorted: [1,2], [2,3]
//        prev    curr
//count = 0
//curr[start] = 2 = prev[0][end] = 2 -> no overlapping
//count = 0
