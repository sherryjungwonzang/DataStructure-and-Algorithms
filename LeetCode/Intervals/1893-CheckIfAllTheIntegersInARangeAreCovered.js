//1893. Check If All The Integers In A Range Are Covered
//given a 2D integer array ranges and two integers left and right
//each ranges[i] = [start_i, end_i] represents an inclusive interval between start_i and end_i
//return true if each integer in the inclusive range [left, right] is covered by at least one interval in ranges
//return false otherwise
//an integer x is covered by an interval ranges[i] = [start_i, end_i] if start_i <= x <= end_i

//Approach:
//using set
var coveredRange = (ranges, left, right) => {
    let covered = new Set();

    //checking covered or not
    for (let i = left; i <= right; i++) {
        for (let [x, y] of ranges) { //checking all ranges
            if (i >= x && i <= y) covered.add(i); //satisfying the condition
        }

        if (!covered.has(i)) return false;
    }

    return true;
}
coveredRange(ranges = [[1,2],[3,4],[5,6]], left = 2, right = 5); //true
//[[1, 2], [3, 4], [5, 6]]
//   ^
//i = 2
//2 >= 1 && 2 <= 2 -> True
//covered = { 2, }

//2 >= 3 && 2 <= 4 -> False
//2 >= 5 && 2 <= 6 -> False
//covered has "2" -> true

//i = 3
//3 >= 1 && 3 <= 2 -> False

//3 >= 3 && 3 <= 4 -> True
//covered = { 2, 3 }

//3 >= 5 && 3 <= 6 -> False
//covered has "3" -> true

//i = 4
//4 >= 1 && 4 <= 2 -> False

//4 >= 3 && 4 <= 4 -> True
//covered = { 2, 3, 4 }

//4 >= 5 && 4 <= 6 -> False
//covered has "4" -> true

//i = 5
//5 >= 1 && 5 <= 2 -> False
//5 >= 3 && 5 <= 4 -> False

//5 >= 5 && 5 <= 6 -> True
//covered = { 2, 3, 4, 5 }
//covered has "5" -> true

coveredRange(ranges = [[1,10],[10,20]], left = 21, right = 21); //false
