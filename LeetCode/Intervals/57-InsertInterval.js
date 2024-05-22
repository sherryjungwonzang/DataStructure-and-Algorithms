//57. Insert Interval
//given an array of non-overlapping intervals 'intervals' - where intervals[i] = [start_i, end_i] and an interval 'newInterval = [start, end]
//representing the start and the end of i-th intervals
//intervals is sorted in ascending order by start_i

//insert newInterval into intervals such that intervals is still sorted in ascending order by start_i
//and intervals still does not have any overlapping intervals

//Approach:
//check there is an overlapping or not
//comparing start values between intervals and new intervals for min value
//comparing end values between intervals and new intervals for max value

//newInterval is working same as 'curr' and intervals as 'prev' in most of interval questions that I have solved
var insertInterval = (intervals, newInterval) => {
    let res = [];
    let i = 0; //to loop through

    const start = 0;
    const end = 1;

    //non-overlapping
    while (i < intervals.length && intervals[i][end] < newInterval[start]) {
        res.push(intervals[i]);
        i++;
    }

    //merging two overlapped
    while(i < intervals.length && intervals[i][start] <= newInterval[end]) {
        newInterval[start] = Math.min(newInterval[start], intervals[i][start]);
        newInterval[end] = Math.max(newInterval[end], intervals[i][end]);
        i++;
    }
    res.push(newInterval);

    //put the rest of array
    while(i < intervals.length) {
        res.push(intervals[i]);
        i++;
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
