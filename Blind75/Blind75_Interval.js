//Blind75 - Interval
//1. Insert Interval (57)
//given an array of non-overlapping intervals 'intervals' - where intervals[i] = [start_i, end_i] and an interval 'newInterval = [start, end]
//representing the start and the end of i-th intervals
//intervals is sorted in ascending order by start_i

//insert newInterval into intervals such that intervals is still sorted in ascending order by start_i
//and intervals still does not have any overlapping intervals
function insertInterval(intervals, newInterval) {
  let res = [];
  let i = 0;

  const start = 0;
  const end = 1;

  //non overlapping intervals
  while(i < intervals.length && intervals[i][end] < newInterval[start]) {
    res.push(intervals[i]);
    i++;
  }

  //merging the two overlapped
  while(i < intervals.length && intervals[i][start] <= newInterval[end]) {
    newInterval[start] = Math.min(newInterval[start], intervals[i][start]);
    newInterval[end] = Math.max(newInterval[end], intervals[i][end]);
    i++;
  }

  res.push(newInterval);

  while(i < intervals.length) {
    res.push(intervals[i]);
    i++
  }
  return res;
}
//TC: O(n)
//SC: O(1)

insertInterval([[1,3], [6,9]], newInterval = [2,5]); //[[1,5], [6,9]] - 1,3 and 2,5 is overlapping
//res = []

//                i = 0
//check: intervals[0][1]=3 > newInterval[0]=2 -> the first while pass!
//check: intervals[0][0]=1 <= newInterval[0]=2
//newInterval[0] = Math.min(2, 1) = 1
//newInterval[1] = Math.max(5, 3) = 5
//res = [ [1,5], [6,9] ]


insertInterval([[1,2], [3,5], [6,7], [8,10], [12,16]], newInterval = [4,8]); //[[1,2], [3,10], [12, 16]]] - because [4,8] overlaps with [3,5], [6,7], [8,10]
//                i    = 0
//check: intervals[0][1]=2 < newInterval[0]=4 -> NO OVERLAP
//res = [ [1,2], ]

//                       i   = 1
//check: intervals[1][1]=5 > newInterval[0]=4 -> the first while pass
//check: intervals[1][0]=3 < newInterval[1]=8 -> start merging
//newInterval[0] = Math.min(4, 3) = 3
//newInterval[1] = Math.max(8, 5) = 8
//newInterval = [3, 8]
//res = [ [1,2], [3,8] ]

//                               i   = 2
//check: intervals[2][1]=7 > newInterval[0]=3 -> first while pass
//check: intervals[2][0]=6 < newInterval[1]=8 -> start merging
//newInterval[0] = Math.min(3, 6) = 3
//newIntervals[1] = Math.max(8, 7) = 8
//newInterval = [3, 8]
//res = [ [1,2], [3,8] ]

//                                        i   = 3
//check: intervals[3][1]=10 > newInterval[0]=4 -> the first while pass
//check: intervals[3][0]=8 = newInterval[1]=8 -> start merging
//newInterval[0] = Math.min(3, 8) = 4
//newInterval[1] = Math.max(8, 10) = 10
//newInterval = [3, 10]
//res = [ [1,2], [3,10] ]

//                                                 i   = 4
//check: intervals[4][1]=16 > newInterval[0]=3 -> the first while pass
//check: intervals[4][0]=12 > newInterval[1]=10 -> out of range
//res = [ [1,2], [3,10], [12,16] ]


//2. Merge Interval (57)
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
