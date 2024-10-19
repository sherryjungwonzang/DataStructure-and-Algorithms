//1037. Valid Boomerang
//given an array points wgere points[i] = [xi, yi] represents a point on the X-Y plane, return true if these points are a boomerang
//a boomerang is a set of three points that are all distinct and not in a straight line
var validBoomerang = (points) => {
    let [x1, y1] = points[0];
    let [x2, y2] = points[1];
    let [x3, y3] = points[2];

    return ((y2 - y1) * (x3 - x1)) - ((y3 - y1) * (x2 - x1)) !== 0;
}
validBoomerang(points = [[1,1],[2,3],[3,2]]); //true
//[ [1, 1], [2, 3], [3, 2] ]
//  x1 y1    x2 y2   x3 y3

//(3 - 1) * (3 - 1) - (2 - 1) * (2 - 1) = 4 - 1 = 3
//3 != 0 -> boomerang
//true

validBoomerang(points = [[1,1],[2,2],[3,3]]); //false
//[ [1, 1], [2, 2], [3, 3] ]
//  x1 y1    x2 y2   x3 y3
//(2 - 1) * (3 - 1) - (3 - 1) * (2 - 1) = 2 - 2 = 0
//0 = 0 -> straight line
//false
