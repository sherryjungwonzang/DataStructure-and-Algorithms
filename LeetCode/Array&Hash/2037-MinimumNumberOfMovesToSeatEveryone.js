//2037. Minimum Number Of Moves To Seat Everyone
//there are n available seats and n students standing in a room
//given an array seats of length n - where seats[i] is the position of the ith seat
//also given the array students of length n, where students[j] is the position of the jth student

//may perform the following move any number of times:
//increase or decrease the position of the ith student by 1 - x to x + 1 or x - 1
//return the min number of moves required to move each student to a seat such that no two students are in the same seat

//Approach:
//using sorting
var minNumMoveSeats = (seats, students) => {
    let move = 0;

    //sorting - ascending
    seats = seats.sort((a, b) => b - a);
    students = students.sort((a, b) => b - a);

    //calculating moves
    seats.forEach((seat, index) => move += Math.abs(seat - students[index]));

    return move;
}
minNumMoveSeats(seats = [3,1,5], students = [2,7,4]); //4
//sorting: seats = [5, 3, 1], students = [7, 4, 2]

//seats = [5, 3, 1], students = [7, 4, 2]
//         ^                     ^
//student moves |5 - 7| = 2
//move = 0 -> 2

//seats = [5, 3, 1], students = [7, 4, 2]
//            ^                     ^
//student moves |3 - 4| = 1
//move = 0 -> 2 -> 3

//seats = [5, 3, 1], students = [7, 4, 2]
//               ^                     ^
//student moves |1 - 2| = 1
//move = 0 -> 2 -> 3 -> 4

minNumMoveSeats(seats = [4,1,5,9], students = [1,3,2,6]); //7
//sorting: seats = [9, 5, 4, 1], students = [6, 3, 2, 1]

//seats = [9, 5, 4, 1], students = [6, 3, 2, 1]
//         ^                        ^
//student moves |9 - 6| = 3
//move = 0 -> 3

//seats = [9, 5, 4, 1], students = [6, 3, 2, 1]
//            ^                        ^
//student moves |5 - 3| = 2
//move = 0 -> 3 -> 5

//seats = [9, 5, 4, 1], students = [6, 3, 2, 1]
//               ^                        ^
//student moves |4 - 2| = 2
//move = 0 -> 3 -> 5 -> 7

//seats = [9, 5, 4, 1], students = [6, 3, 2, 1]
//                  ^                        ^
//student moves |1 - 1| = 0
//move = 0 -> 3 -> 5 -> 7 -> 7

minNumMoveSeats(seats = [2,2,6,6], students = [1,3,2,6]); //4
