//1496. Path Crossing
//given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively
//you start at the origin (0, 0) on a 2D plane and walk on the path specified by path
//return true if the path crosses itself at any point, that is, if at any time you are on a location you have previously visited
//return false otherwise

//Approach:
//using set
var pathCrossing = (path) => {
    let x = 0;
    let y = 0;
    let visited = new Set();

    //base setting
    visited.add("0, 0");

    //traversing
    for (let direction of path) {
        //checking N, E, W, S
        if (direction === "E") x++;
        else if (direction === "W") x--;
        else if (direction === "N") y++;
        else if (direction === "S") y--;

        //setting current position
        let curr = `${x}, ${y}`;

        //path crossing point
        if (visited.has(curr)) return true;

        visited.add(curr);
    }

    return false;
}
//TC: O(n)
//SC: O(n)
pathCrossing("NES"); //false
//starting with 0, 0
//visited = { "0, 0", }

// N E S
// ^
//N -> y++ : curr = 0, 1
//visited = { "0, 0", "0, 1", }

// N E S
//   ^
//E -> x++ : curr = 1, 1
//visited = { "0, 0", "0, 1", "1, 1", }

// N E S
//     ^
//S -> y-- : curr = 1, 0
//visited = { "0, 0", "0, 1", "1, 1", "1, 0" }

//no duplicate position in visited

pathCrossing("NESWW"); //true
//starting with 0, 0
//visited = { "0, 0", }

// N E S W W
// ^
//N -> y++ : curr = 0, 1
//visited = { "0, 0", "0, 1", }

// N E S W W
//   ^
//E -> x++ : curr = 1, 1
//visited = { "0, 0", "0, 1", "1, 1", }

// N E S W W
//     ^
//S -> y-- : curr = 1, 0
//visited = { "0, 0", "0, 1", "1, 1", "1, 0",  }

// N E S W W
//       ^
//W -> x-- : curr = 0, 0
//visited = { "0, 0", "0, 1", "1, 1", "1, 0", }
//0, 0 is in visited -> path crossing
