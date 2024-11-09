//365. Water And Jug Problem
//given two jugs with capacities x liters and y liters
//you have an infinite water supply
//return whether the total amount of water in both jugs may reach target using the following operations:
//fill either jug completely with water
//completely empty either jug
//pour water from one jug into another until the receiving jug is full, or the transferring jug is empty

//Approach:
//using DFS
var waterAndJug = (x, y, target) => {
    //base case
    if (target > x + y) return false;

    let visited = new Set();

    //DFS
    function dfs(currX, currY) {
        if (currX === target || currY === target || currX + currY === target) return true;

        let currState = `${currX}, ${currY}`;

        if (visited.has(currState)) return false;
        
        visited.add(currState);

        return (
            dfs(x, currY) ||  //fill x
            dfs(currX, y) ||  //fill y
            dfs(currX, 0) ||  //fill all x to jug
            dfs(0, currY) ||  //fill all y to jug
            dfs(Math.max(0, currX - (y - currY)), Math.min(y, currX + currY)) || //to fill jug from x to y
            dfs(Math.min(x, currX + currY), Math.max(0, currY - (x - currX))) //to fill jug from y to x
        );
    }

    return dfs(0, 0);
}
waterAndJug(x = 3, y = 5, target = 4); //true
//starting with dfs(0, 0)
//dfs(0, 0) -> '0, 0'
//visited = { '0, 0',  }    
//-> dfs(3, 0) || dfs(0, 0) || dfs(max(0, 0 - (5 - 0)), min(5, 0 + 0)) = (5, 0)
//   dfs(0, 5) || dfs(0, 0) || dfs(max(0, 0 - (3 - 0)), min(3, 0 + 0)) = (0, 0)
//-> dfs(3, 0) | dfs(0, 5) || dfs(5, 0) available

//dfs(3, 0) -> '3, 0'               
//visited = { '0, 0', '3, 0' } 
//-> dfs(3, 0) || dfs(3, 0) || dfs(max(0, 3 - (5 - 0)), min(5, 3 + 0)) = (0, 3)
//   dfs(3, 5) || dfs(0, 0) || dfs(max(0, 0 - (3 - 3)), min(3, 3 + 0)) = (0, 3)
//-> dfs(3, 5) | dfs(0, 3) available

//dfs(3, 5) -> '3, 5'               
//visited = { '0, 0', '3, 0', '3, 5' } 
//-> dfs(3, 5) || dfs(3, 0) || dfs(max(0, 3 - (5 - 5)), min(5, 3 + 5)) = (3, 5)
//   dfs(3, 5) || dfs(0, 5) || dfs(max(0, 5 - (3 - 3)), min(3, 3 + 5)) = (5, 3)
//-> dfs(0, 5) | dfs(3, 3) || dfs(5, 3) available

//dfs(0, 5) -> '0, 5'               
//visited = { '0, 0', '3, 0', '3, 5', '0, 5' } 
//-> dfs(3, 5) || dfs(0, 0) || dfs(max(0, 0 - (5 - 5)), min(5, 0 + 5)) = (0, 5)
//   dfs(0, 5) || dfs(0, 5) || dfs(max(0, 5 - (3 - 0)), min(3, 0 + 5)) = (2, 3)
//-> dfs(2, 3) available

//dfs(2, 3) -> '2, 3'               
//visited = { '0, 0', '3, 0', '3, 5', '0, 5', '2, 3',  } 
//-> dfs(3, 3) || dfs(2, 0) || dfs(max(0, 2 - (5 - 3)), min(5, 2 + 3)) = (0, 5)
//   dfs(2, 5) || dfs(0, 3) || dfs(max(0, 3 - (3 - 2)), min(3, 2 + 3)) = (2, 3)
//-> dfs(3, 3) || dfs(2, 5) || dfs(2, 0)  available

//dfs(3, 3) -> '3, 3'               
//visited = { '0, 0', '3, 0', '3, 5', '0, 5', '2, 3', '3, 3', } 
//-> dfs(3, 3) || dfs(3, 0) || dfs(max(0, 3 - (5 - 3)), min(5, 3 + 3)) = (1, 5)
//   dfs(3, 5) || dfs(0, 3) || dfs(max(0, 3 - (3 - 3)), min(3, 3 + 3)) = (3, 3)
//-> dfs(0, 3) || dfs(1, 5) available

//dfs(0, 3) -> '0, 3'               
//visited = { '0, 0', '3, 0', '3, 5', '0, 5', '2, 3', '3, 3', '0, 3', } 
//-> dfs(3, 3) || dfs(0, 0) || dfs(max(0, 0 - (5 - 3)), min(5, 0 + 3)) = (2, 3)
//   dfs(0, 5) || dfs(0, 3) || dfs(max(0, 3 - (3 - 0)), min(3, 0 + 3)) = (0, 3)
//-> nothing available from this recursive calls

//dfs(1, 5) -> '1, 5'
//visited = { '0, 0', '3, 0', '3, 5', '0, 5', '2, 3', '3, 3', '0, 3', '1, 5', } 
//-> dfs(3, 5) || dfs(1, 0) || dfs(max(0, 1 - (5 - 5)), min(5, 1 + 5)) = (2, 3)
//   dfs(1, 5) || dfs(0, 5) || dfs(max(0, 5 - (3 - 1)), min(3, 1 + 5)) = (0, 3)
//-> dfs(1, 0) available

//dfs(1, 0) -> '1, 0'
//visited = { '0, 0', '3, 0', '3, 5', '0, 5', '2, 3', '3, 3', '0, 3', '1, 5', '1, 0', } 
//-> dfs(3, 0) || dfs(1, 0) || dfs(max(0, 1 - (5 - 0)), min(5, 1 + 0)) = (0, 1)
//   dfs(1, 5) || dfs(0, 0) || dfs(max(0, 0 - (3 - 1)), min(3, 1 + 0)) = (0, 1)
//-> dfs(0, 1) available

//dfs(0, 1) -> '0, 1'
//visited = { '0, 0', '3, 0', '3, 5', '0, 5', '2, 3', '3, 3', '0, 3', '1, 5', '1, 0', '0, 1', } 
//-> dfs(3, 0) || dfs(0, 0) || dfs(max(0, 0 - (5 - 1)), min(5, 0 + 1)) = (0, 1)
//   dfs(1, 5) || dfs(0, 1) || dfs(max(0, 1 - (3 - 0)), min(3, 0 + 1)) = (0, 1)
//-> nothing available from this recursive calls

//true

waterAndJug(x = 2, y = 6, target = 5); //false

waterAndJug(x = 1, y = 2, target = 3); //true
