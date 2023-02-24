//Non-overlapping Intervals (435)
//given an array of intervals 'intervals' - where intervals[i] = [start_i, end_i]
//return the min num of intervals you need to remove to make the rest of the intervals non-overlapping
var nonOverlappingIntervals = (intervals) => {

  //sorting based on the [1] element
  intervals.sort((a,b) => a[1] - b[1]);

  let count = 0; //to update when we find an overlap
  let prev = 0;

  for (let i = 1; i < intervals.length; i++) {
    let current = intervals[i]; //current is indicating the next value of array

    if (current[0] < intervals[prev][1]) { //meaning it is overlapping
      count++; //update the count
    } else {
      prev = i; //make current to previous and move current to the next
    }
  }
  return count;
}
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
nonOverlappingIntervals([[1,2], [2,3]]); //0 - dont need to remove any of the intervals since they are already non-overlapping
