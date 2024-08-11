//473. Matchsticks To Square
//given an integer array matchsticks where matchsticks[i] is the length of the i_th matchstick
//you want to use all the matchsticks to make one square
//you should not break any stick but you can link them up, and each matchstick must be used exactly one time
//return true if you can make this square and false otherwise

//Approach:
//using DFS
var matchsticksSquare = (matchsticks) => {
    let n = matchsticks.length;
    let square = new Array(4).fill(0);
    let perimeter = matchsticks.reduce((a, b) => a + b, 0); //to grab all the num of matchsticks
    let sideLen = perimeter / 4; //required side length for each side

    //sorting - desceding order
    matchsticks.sort((a, b) => b - a);

    //DFS
    function dfs(index) {
        //base case
        //if all side have the same length - square is formed
        //.every(): check it passes the test or not
        if (index === n) return square.every(square => square === sideLen); 

        //looping
        for (let i = 0; i < 4; i++) {
            //base case
            if (square[i] + matchsticks[index] > sideLen) continue;

            //updating the curr length of side
            square[i] += matchsticks[index];

            //recursive call
            if (dfs(index + 1)) { //square is formed
                return true;
            } else { //backtracking
                square[i] -= matchsticks[index]; //reset the curr side length
            }
        }

        return false;
    }

    return dfs(0);
}
//TC: O(4^n)
//SC: O(n)
matchsticksSquare([1,1,2,2,2]); //true
//n = 5
//perimeter = 8
//sideLen = 2
//square = [0, 0, 0, 0]

//sorting -> [2, 2, 2, 1, 1]
//            ^
//index = 0, i = 0
//square[0] + matchsticks[0] > 2 -> NO
//square[0] += matchsticks[0] = 2
//square = [2, 0, 0, 0]

//[2, 2, 2, 1, 1]
//    ^
//index = 1, i = 1
//square[1] + matchsticks[1] > 2 -> NO
//square[1] += matchsticks[1] = 2
//square = [2, 2, 0, 0]

//[2, 2, 2, 1, 1]
//       ^
//index = 2, i = 2
//square[2] + matchsticks[2] > 2 -> NO
//square[2] += matchsticks[2] = 2
//square = [2, 2, 2, 0]

//[2, 2, 2, 1, 1]
//          ^
//index = 3, i = 3
//square[3] + matchsticks[3] > 2 -> NO
//square[3] += matchsticks[3] = 1
//square = [2, 2, 2, 1]

//[2, 2, 2, 1, 1]
//             ^
//index = 4, i = 3
//square[3] + matchsticks[4] > 2 -> NO
//square[3] += matchsticks[4] = 1
//square = [2, 2, 2, 2]

//index = 5
//5 = 5 -> checking square = sideLen or not
//True

matchsticksSquare([3,3,3,3,4]); //false
