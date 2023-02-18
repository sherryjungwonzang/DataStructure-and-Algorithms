//Merge Interval (57)
//given an array of intervals - where[i] = [start, end]
//merge all overlapping intervals
//and return an array of the non-overlapping intervals that cover all the intervals in the input
var mergeInterval = (intervals, newInterval) => {
  const start = 0;
  const end = 1;

  //need to sort in ascending order
  intervals = intervals.sort((a, b) => a[start] - b[start]);

  //setting the first array as 'previous'
  let previous = intervals[0]; 
  let res = [previous]; //adding the first array in the res and then start looping

  //looping
  for (let current of intervals) {
    //if there is an overlapping
    if (current[start] <= previous[end]) {
      previous[end] = Math.max(previous[end], current[end]);
    } else { //if there is no overlapping
      res.push(current);
      previous = current; //need to update previous to current - so can move to the next array
    }
  }
  return res;
}
mergeInterval([[1,3], [2,6]], [8,10], [15,18]); //[[1,6], [8,10], [15,18]]
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
