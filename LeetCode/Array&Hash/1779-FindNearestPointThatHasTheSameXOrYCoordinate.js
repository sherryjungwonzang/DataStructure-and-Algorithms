//1779. Find Nearest Point That Has The Same X Or Y Coordinate
//given two integers, x and y, which represent your current location on a Cartesian grid: (x, y)
//also given an array points where each points[i] = [ai, bi] represents that a point exists at (ai, bi)
//a point is valid if it shares the same x-coordinate or the same y-coordinate as your location
//return the index (0-indexed) of the valid point with the smallest Manhattan distance from your current location
//if there are multiple, return the valid point with the smallest index
//if there are no valid points, return -1
//the Manhattan distance between two points (x1, y1) and (x2, y2) is abs(x1 - x2) + abs(y1 - y2)
var findNearestPoint = (x, y, points) => {
    let min = Infinity;
    let res;

    for (let i = 0; i < points.length; i++) {
        let [currX, currY] = points[i];

        if (currX === x || currY === y) {
            let distance = Math.abs(x - currX) + Math.abs(y - currY);

            if (distance < min) {
                //update
                min = distance;

                res = i;
            }
        }
    }

    //edge case
    if (res === 0) return 0;

    return res ? res : -1;
}
findNearestPoint(x = 3, y = 4, points = [[1,2],[3,1],[2,4],[2,3],[4,4]]); //2
//[ [1,2], [3,1], [2,4], [2,3], [4,4] ]
//    ^
//x != 1, y != 2
//min = Infinity
//res = ''

//[ [1,2], [3,1], [2,4], [2,3], [4,4] ]
//           ^
//x = 3, y != 1 -> currX = 3, currY = 1
//                 distance = (|3 - 3|) + (|1 - 4|) = 3
//min = Infinity -> 3
//res = '' -> 1

//[ [1,2], [3,1], [2,4], [2,3], [4,4] ]
//                  ^
//x != 2, y = 4 -> currX = 2, currY = 4
//                 distance = (|2 - 3|) + (|4 - 4|) = 1
//min = Infinity -> 3 -> 1
//res = '' -> 1 -> 2

//[ [1,2], [3,1], [2,4], [2,3], [4,4] ]
//                         ^
//x != 2, y != 3
//min = Infinity -> 3 -> 1 -> 1
//res = '' -> 1 -> 2 -> 2

//[ [1,2], [3,1], [2,4], [2,3], [4,4] ]
//                                ^
//x != 4, y = 4 -> currX = 4, currY = 4
//                 distance = (|4 - 3|) + (|4 - 4|) = 1
//min = Infinity -> 3 -> 1 -> 1 -> 1
//res = '' -> 1 -> 2 -> 2 -> 2

//2

findNearestPoint(x = 3, y = 4, points = [[3,4]]); //0

findNearestPoint(x = 3, y = 4, points = [[2,3]]); //-1
