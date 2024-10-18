//1232. Check If It Is A Straight Line
//given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point
//check if these points make a straight line in the XY plane
var checkStraightLine = (coordinates) => {
    let m = coordinates.length;

    //base case
    if (m <= 2) return true;

    let [x1, y1] = coordinates[0];
    let [x2, y2] = coordinates[1];

    for (let i = 2; i < m; i++) {
        let [x, y] = coordinates[i];

        if (collinear(x1, y1, x2, y2, x, y) !== 0) return false;
    }

    function collinear (x1, y1, x2, y2, x, y) {
        //cross production calculation of slope
        return ((y2 - y1) * (x - x1)) - ((y - y1) * (x2 - x1));
    }

    return true;
}
//TC: O(n)
//SC: O(n)
checkStraightLine([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]); //true
//[ [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7] ]
//                    ^
//  x1 x2   y1 y2    x  y
//collinear = (3 - 2) * (3 - 1) - (4 - 2) * (2 - 1) = 0 -> straight line

//[ [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7] ]
//                             ^
//  x1 x2   y1 y2            x  y
//collinear = (3 - 2) * (4 - 1) - (5 - 2) * (2 - 1) = 0 -> straight line

//[ [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7] ]
//                                    ^
//  x1 x2   y1 y2                    x  y
//collinear = (3 - 2) * (5 - 1) - (6 - 2) * (2 - 1) = 0 -> straight line

//[ [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7] ]
//                                            ^
//  x1 x2   y1 y2                            x  y
//collinear = (3 - 2) * (6 - 1) - (7 - 2) * (2 - 1) = 0 -> straight line

//true

checkStraightLine([[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]); //false
//[ [1, 1], [2, 2], [3, 4], [4, 5], [5, 6], [7, 7] ]
//                    ^
//  x1 y1   x2 y2    x  y
//collinear = (2 - 1) * (3 - 1) - (4 - 1) * (2 - 1) = -1 -> not straight line
