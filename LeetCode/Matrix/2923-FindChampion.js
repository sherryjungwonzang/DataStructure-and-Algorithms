//2923. Find Champion
//there are n teams numbered from 0 to n - 1 in a tournament
//given a 0-indexed 2D booleab matrix grid of size n * n
//for all i, j that 0 <= i, j <= n - 1 and i != j team ,
//team i is stronger than team j if grid[i][j] = 1,
//otherwise, team j is stronger than team i

//team a will be champion of the tournament if there is no team b that is stronger than team a
//return the team that will be the champion of the tournament
var findChampion = (grid) => {
    let m = grid.length;
    let champion = 0;

    for (let team of grid) {
        //counting player = 1
        let count = 0;

        //checking 1
        for (let player of team) {
            if (player === 1) count++;
        }

        //find champion
        if (count === m - 1) return champion;

        //changing champion team
        champion++;
    }

    return -1;
}
findChampion([[0,1],[0,0]]); //0 - grid[0][1] == 1 means that team 0 is stronger than team 1. So team 0 will be the champion
//  0 1
//  0 0
//m = 2
//champion = 0

//starting with team = [0, 1]
//[0, 1]
// p        -> player = 0
//count = 0 -> 0

//[0, 1]
//    p     -> player = 1
//count = 0 -> 0 -> 1
//count = n - 1 = 1 -> find champion
//champion = 0

findChampion(grid = [[0,0,1],[1,0,1],[0,0,0]]); //1
//grid[1][0] == 1 means that team 1 is stronger than team 0
//grid[1][2] == 1 means that team 1 is stronger than team 2

//  0 0 1
//  1 0 1
//  0 0 0
//m = 2
//champion = 0

//starting with team = [0, 0, 1]
//[0, 0, 1]
// p        -> player = 0
//count = 0 -> 0

//[0, 0, 1]
//    p     -> player = 0
//count = 0 -> 0 -> 0

//[0, 0, 1]
//       p  -> player = 
//count = 0 -> 0 -> 0 -> 1
//count = n - 1 != 2 -> 0 is not champion
//champion = 0 -> 1

//team = [1, 0, 1]
//        p        -> player = 1
//count = 0 -> 1

//team = [1, 0, 1]
//           p     -> player = 0
//count = 0 -> 1 -> 1

//team = [1, 0, 1]
//              p  -> player = 1
//count = 0 -> 1 -> 1 -> 2
//count = n - 1 = 2 -> find champion
//champion = 1
