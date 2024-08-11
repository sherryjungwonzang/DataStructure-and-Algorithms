//877. Stone Game
//alice and bob play a game with piles of stones
//there are an even number of piles arranged in a row, and each pile has a positive integer number of stones piles[i]
//the objective of the game is to end with the most stones
//the total number of stones across all the piles is odd, so there are no ties

//alice and bob takes turns with alice starting first
//each turn, a player takes the entire pile of stones either from the beginning or from the end of the row
//this continues until there are no more piles left, at which point the person with the most stones wins
//assuming alice and bob play optionally, return true is alice wins the game, or false if bob wins

//Approach:
//using Greedy algorithms
var stoneGame = (piles) => {
    //to take the max number when start the game
    piles.sort((a, b) => b - a);

    let aliceScore = 0;
    let bobScore = 0;
    let gameCount = 0;

    while (piles.length) {
        if (gameCount % 2 === 0) aliceScore += piles.shift();
        else bobScore += piles.shift();
        gameCount++;
    }

    return aliceScore > bobScore;
}
stoneGame([5,3,4,5]); //true
//Alice starts first, and can only take the first 5 or the last 5.
//Say she takes the first 5, so that the row becomes [3, 4, 5].
//If Bob takes 3, then the board is [4, 5], and Alice takes 5 to win with 10 points.
//If Bob takes the last 5, then the board is [3, 4], and Alice takes 4 to win with 9 points.
//This demonstrated that taking the first 5 was a winning move for Alice, so we return true

stoneGame([3,7,2,3]); //true
