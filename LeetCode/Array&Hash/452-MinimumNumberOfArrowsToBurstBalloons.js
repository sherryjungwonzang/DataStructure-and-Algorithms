//452. Minimum Number Of Arrows To Burst Balloons
//there are some spherical balloons taped onto a flat wall that represents the XY-plane
//the balloons are represented as a 2D integer array points
//where points[i] = [x_start, x_end] denotes a balloon whose horizontal diameter stretches between x-start and x_end
//you do not know the exact y-coordinates of the balloons

//arrows can be shot up directly vertically - in the positive ydirection from different points along the x-axis
//a baloon with x_start and x_end is burst by an arrow shot at x if x_start <= x <= x_end
//there is no limit to the number of arrows that can be shot
//a shot arrow keeps travelling up infinitely, brusting any balloons in its path

//given the array points
//return the min number of arrows that must be shot to burst all balloons
var minArrowsToBalloons = (points) => {
    //sorting - starting with coordinate of balloon
    points.sort((a, b) => a[0] - b[0]); 

    let arrows = 1;
    let end = points[0][1];

    for (let i = 1; i < points.length; i++) {
        //curr baloon is not overlapping with prev & requires new arrow
        if (points[i][0] > end) {
            arrows++;

            end = points[i][1];
        } else { //curr balloon and prev is overlapping
            end = Math.min(end, points[i][1]);
        }
    }

    return arrows;
}
minArrowsToBalloons([[10,16],[2,8],[1,6],[7,12]]); //2
//Shoot an arrow at x = 6, bursting the balloons [2,8] and [1,6]
//Shoot an arrow at x = 11, bursting the balloons [10,16] and [7,12]

//end = 6
//arrows = 1

//sorting: [ [1, 6], [2, 8], [7, 12], [10, 16] ]
//                    ^
//2 < 6 -> overlapping
//end = 6 -> min(6, 8) = 6
//arrows = 1

//sorting: [ [1, 6], [2, 8], [7, 12], [10, 16] ]
//                              ^
//7 > 6 -> non overlapping
//end = 6 -> min(6, 8) = 6 -> 12
//arrows = 1 -> 2

//sorting: [ [1, 6], [2, 8], [7, 12], [10, 16] ]
//                                        ^
//10 < 12 -> overlapping
//end = 6 -> min(6, 8) = 6 -> 12 -> (12, 16) = 12
//arrows = 1 -> 2

minArrowsToBalloons([[1,2],[3,4],[5,6],[7,8]]); //4 - One arrow needs to be shot for each balloon for a total of 4 arrows
//end = 2
//arrows = 1

//sorting: [ [1,2], [3,4], [5,6], [7,8] ]
//                    ^
//3 > 2 -> non overlapping
//end = 2 -> 4
//arrows = 1 -> 2

//sorting: [ [1,2], [3,4], [5,6], [7,8] ]
//                           ^
//5 > 4 -> non overlapping
//end = 2 -> 4 -> 6
//arrows = 1 -> 2 -> 3

//sorting: [ [1,2], [3,4], [5,6], [7,8] ]
//                                  ^
//7 > 6 -> non overlapping
//end = 2 -> 4 -> 6 -> 8
//arrows = 1 -> 2 -> 3 -> 4

minArrowsToBalloons([[1,2],[2,3],[3,4],[4,5]]); //2
//Shoot an arrow at x = 2, bursting the balloons [1,2] and [2,3]
//Shoot an arrow at x = 4, bursting the balloons [3,4] and [4,5]
