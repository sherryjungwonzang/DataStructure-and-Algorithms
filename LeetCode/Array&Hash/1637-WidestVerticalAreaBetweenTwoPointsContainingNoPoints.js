//1637. Widest Vertical Area Between Two Points Containing No Points
//given n points on a 2D plane where points[i] = [xi, yi]
//return the widest vertical area between two points such that no points are inside the area

//a vertical area is an area of fixed-width extending infinitely along the y-axis (i.e., infinite height)
//the widest vertical area is the one with the maximum width
//Note that points on the edge of a vertical area are not considered included in the area

//Approach:
//using sorting
var widestVerticalArea = (points) => {
    //sorting
    points.sort((a, b) => a[0] - b[0]);

    let diff = 0;

    for (let i = 1; i < points.length; i++) {
        //updating max diff
        diff = Math.max(diff, points[i][0] - points[i - 1][0]);
    }

    return diff;
} 
widestVerticalArea([[8,7],[9,9],[7,4],[9,7]]); //1
//sorting: [ [7, 4], [8, 7], [9, 9], [9, 7] ]
//                      ^
//width = 8 - 7 = 1
//diff = 0 -> 1

//sorting: [ [7, 4], [8, 7], [9, 9], [9, 7] ]
//                             ^
//width = 9 - 8 = 1
//diff = 0 -> 1 -> 1

//sorting: [ [7, 4], [8, 7], [9, 9], [9, 7] ]
//                                     ^
//width = 9 - 9 = 0
//diff = 0 -> 1 -> 1 -> 1


widestVerticalArea([[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]]); //3
//sorting:  [ [1, 0], [1, 4], [3, 1], [5, 3], [8, 8], [9, 0] ]
//                      ^
//width = 1 - 1 = 0
//diff = 0 -> 0

//sorting:  [ [1, 0], [1, 4], [3, 1], [5, 3], [8, 8], [9, 0] ]
//                               ^
//width = 3 - 1 = 2
//diff = 0 -> 0 -> 2

//sorting:  [ [1, 0], [1, 4], [3, 1], [5, 3], [8, 8], [9, 0] ]
//                                       ^
//width = 5 - 3 = 2
//diff = 0 -> 0 -> 2 -> 2

//sorting:  [ [1, 0], [1, 4], [3, 1], [5, 3], [8, 8], [9, 0] ]
//                                              ^
//width = 8 - 5 = 3
//diff = 0 -> 0 -> 2 -> 2 -> 3

//sorting:  [ [1, 0], [1, 4], [3, 1], [5, 3], [8, 8], [9, 0] ]
//                                                       ^
//width = 9 - 8 = 1
//diff = 0 -> 0 -> 2 -> 2 -> 3 -> 3
