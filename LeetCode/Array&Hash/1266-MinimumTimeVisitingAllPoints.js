//1266. Minimum Time Visiting All Points
//on a 2D plane, there are n points with integer coordinates points[i] = [xi, yi]
//return the minimum time in seconds to visit all the points in the order given by points

//you can move according to these rules:
//in 1 second, you can either:
//move vertically by one unit,
//move horizontally by one unit, or
//move diagonally sqrt(2) units (in other words, move one unit vertically then one unit horizontally in 1 second).
//you have to visit the points in the same order as they appear in the array
//you are allowed to pass through points that appear later in the order, but these do not count as visits
var minTimeVisiting = (points) => {
    let m = points.length;
    let res = 0;

    //calculating difference X and Y
    for (let i = 1; i < m; i++) {
        let timeX = Math.abs(points[i][0] - points[i - 1][0]);
        let timeY = Math.abs(points[i][1] - points[i - 1][1]);

        res += Math.max(timeX, timeY);
    }

    return res;
}
//TC: O(n)
//SC: O(1)
minTimeVisiting(points = [[1,1],[3,4],[-1,0]]); //7 - Time from [1,1] to [3,4] = 3 seconds & Time from [3,4] to [-1,0] = 4 seconds
//[ [1, 1], [3, 4], [-1, 0] ]
//             ^
//timeX = [1][0] - [0][0] = 3 - 1 = 2
//timeY = [1][1] - [0][1] = 4 - 1 = 3
//res = 0 -> max(2, 3) = 3

//[ [1, 1], [3, 4], [-1, 0] ]
//                     ^
//timeX = [2][0] - [1][0] = -1 - 3 = |-4| = 4
//timeY = [2][1] - [1][1] = 0 - 4 = |-4| = 4
//res = 0 -> max(2, 3) = 3 -> max(3, 4) = 4

minTimeVisiting(points = [[3,2],[-2,2]]); //5
//[ [3, 2], [-2, 2] ]
//             ^
//timeX = [1][0] - [0][0] = -2 - 3 = |-5| = 5
//timeY = [1][1] - [0][1] = 2 - 2 = 0
//res = 0 -> max(0, 5) = 5
