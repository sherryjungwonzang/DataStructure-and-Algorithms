//657. Robot Return to Origin
//there is a robot starting at the position (0, 0), the origin, on a 2D plane
//given a sequence of its moves, judege if this robot ends up at (0, 0) after it completes its move

//you are given a string 'moves' - represents the move sequence of the robot where moves[i] represents its i_th move
//valid moves are 'R' -right, 'L' - left, 'U' - up, 'D' - down

//return true if the robot returns to the origin after it finishes all of its moves or false otherwise

//the way that the robot is facing is irrelevant
//'R' will always make the robot move to the right once
//'L' will always make it move left
//also assume that the magnitude of the robot's movement is the same for each move

//Approach:
//using switch statement - setting start point (0, 0) as x, y
//checking whether x and y is in 0, 0 or not
var robotReturn = (moves) => {
    let x = 0;
    let y = 0;

    //looping
    for (let move of moves) {
        switch(move) {
            case 'U': y++; break;
            case 'D': y--; break;
            case 'L': x--; break;
            case 'R': x++; break;
        }
    }
    
    return x === 0 && y === 0;
}
robotReturn("UD"); //true
//The robot moves up once, and then down once. All moves have the same magnitude, so it ended up at the origin where it started. Therefore, we return true.

robotReturn("LL"); //false
//The robot moves left twice. It ends up two "moves" to the left of the origin. We return false because it is not at the origin at the end of its moves.
