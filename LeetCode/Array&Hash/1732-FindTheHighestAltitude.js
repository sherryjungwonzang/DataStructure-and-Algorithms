//1732. Find The Highest Altitude
//there is a biker going on a road trip
//the road trip consists of n + 1 points at different altitudes
//the biker starts his trip on point 0 with altitude equal 0

//given an integer array gain of length n where gain[i] is the net gain in altitude between points i and i + 1 for all
//return the highest altitude of a point
var highestAltitude = (gain) => {
    let prev = 0;
    let highest = 0;

    for (let i = 0; i < gain.length; i++) {
        //curr altitude
        prev += gain[i];

        //updating
        if (prev > highest) highest = prev;
    } 

    return highest;
}
highestAltitude([-5,1,5,0,-7]); //1 - The altitudes are [0,-5,-4,1,1,-6]
//[-5, 1, 5, 0, -7]
// ^
//prev = 0 -> -5
//highest > prev
//highest = 0

//[-5, 1, 5, 0, -7]
//     ^
//prev = 0 -> -5 -> -4
//highest > prev
//highest = 0


//[-5, 1, 5, 0, -7]
//        ^
//prev = 0 -> -5 -> -4 -> 1
//highest < prev
//highest = 0 -> 1

//[-5, 1, 5, 0, -7]
//           ^
//prev = 0 -> -5 -> -4 -> 1 -> 1
//highest = prev
//highest = 0 -> 1

//[-5, 1, 5, 0, -7]
//              ^
//prev = 0 -> -5 -> -4 -> 1 -> 1 -> -6
//highest > prev
//highest = 0 -> 1

highestAltitude([-4,-3,-2,-1,4,3,2]); //0 - The altitudes are [0,-4,-7,-9,-10,-6,-3,-1]
//[-4, -3, -2, -1, 4, 3, 2]
// ^
//prev = 0 -> -4
//highest > prev
//highest = 0

//[-4, -3, -2, -1, 4, 3, 2]
//     ^
//prev = 0 -> -4 -> -7
//highest > prev
//highest = 0

//[-4, -3, -2, -1, 4, 3, 2]
//         ^
//prev = 0 -> -4 -> -7 -> -9
//highest > prev
//highest = 0

//[-4, -3, -2, -1, 4, 3, 2]
//              ^
//prev = 0 -> -4 -> -7 -> -9 -> -10
//highest > prev
//highest = 0

//[-4, -3, -2, -1, 4, 3, 2]
//                 ^
//prev = 0 -> -4 -> -7 -> -9 -> -10 -> -6
//highest > prev
//highest = 0

//[-4, -3, -2, -1, 4, 3, 2]
//                    ^
//prev = 0 -> -4 -> -7 -> -9 -> -10 -> -6 -> -3
//highest > prev
//highest = 0

//[-4, -3, -2, -1, 4, 3, 2]
//                       ^
//prev = 0 -> -4 -> -7 -> -9 -> -10 -> -6 -> -3 -> -1
//highest > prev
//highest = 0
