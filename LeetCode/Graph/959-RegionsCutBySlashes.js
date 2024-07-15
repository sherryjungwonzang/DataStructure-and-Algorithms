//959. Regions Cut By Slashes
//an n x n grid is composed of 1 x 1 squares where each 1 x 1 square consists of a '/', '\' or ' '
//these characters divide the square into contiguous regions
//given the grid 'grid' represented as a string array
//return the num of regions
//backslash characters are escapted, so a '\' is represented as '\\'

//Approach:
//using Graph & DFS
var regionsCutSlashes = (grid) => {
    let n = grid.length;
    let graph = Array(n * 3).fill('').map(() => new Array(n * 3).fill(0));
    let size = graph.length;
    let res = 0;

    //graph based on grid
    for (let row = 0; row < n; row++) {
        for (let col = 0; col < n; col++) {
            let pos = grid[row][col];

            if (pos === '/') {
                graph[row * 3][col * 3 + 2] = 1;
                graph[row * 3 + 1][col * 3 + 1] = 1;
                graph[row * 3 + 2][col * 3] = 1;
            } else if (pos === '\\') {
                graph[row * 3][col * 3] = 1;
                graph[row * 3 + 1][col * 3 + 1] = 1;
                graph[row * 3 + 2][col * 3 + 2] = 1;
            }
        }
    }

    //DFS
    function dfs(row, col) {
        //bound checking
        if (row < 0 || col < 0 || row >= size || col >= size || graph[row][col] !== 0) return;

        graph[row][col] = 1;
        //checking adjacents
        dfs(row + 1, col);
        dfs(row - 1, col);
        dfs(row, col + 1);
        dfs(row, col - 1);
    }

    //dfs checking
    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            if (graph[row][col] !== 0) continue;
            dfs(row, col);
            res += 1;
        }
    }

    return res;
}
regionsCutSlashes(grid = [" /","/ "]); //2
//      /
//     /
//    /
//   /
//  /
// /

regionsCutSlashes(grid = [" /"," "]); //1
//      /
//     /
//    /
//   
//  
// 

regionsCutSlashes(grid = ["/\\","\\/"]); //5 - Recall that because \ characters are escaped, "\\/" refers to \/, and "/\\" refers to /\
//      /\
//     /  \
//    /    \
//    \    /
//     \  /
//      \/
