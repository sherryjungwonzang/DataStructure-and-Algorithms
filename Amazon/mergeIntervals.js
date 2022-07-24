/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

//given an array of intervals where intervals[i] = [starti, endi]
//merge all overlapping intervals, and return an array of the non-overlapping intervals
//that cover all the intervals in the input
var merge = (intervals) => {
    if (intervals.length === 0) return [];
    
    intervals.sort((a, b) => a[0] - b[0]);
    let stack = [];
    stack.push(intervals[0]);
    
    for(let i = 1; i < intervals.length; i++) {
        let prev = stack.pop();
        let cur = intervals[i];
        if (prev[1] >= cur[0]) {
            stack.push([prev[0], Math.max(prev[1], cur[1])]);
        } else {
            stack.push(prev, cur);
        }
    }
    return stack;
};
// Time Complexity: O(Nlog(N))
// Space Complexity: O(N)
