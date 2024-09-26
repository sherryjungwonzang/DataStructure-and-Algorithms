//1025. Divisor Game
//Alice and Bob take turns playing a game, with Alice starting first
//initially, there is a number n on the chalkboard

//on each player's turn, that player makes a move consisting of:
//choosing any x with 0 < x < n and n % x === 0
//replacing the number n on the chalkboard with n - x
//also, if a plater cannot make a move, they lose the game

//return true if and only if Alice wins the game, assuming both players play optimally

//Approach:
//using DP
var divisorGame = (n) => {
    let dp = new Array(n + 1).fill(false);

    //base setting
    //dp[1] = false; Alice cannot make a move with n = 1

    //DP
    for (let i = 2; i <=n; i++) {
        for (let x = 1; x < i; x++) {
            //valid divisors of n
            if (i % x === 0 && dp[i - x] === false) { //Alice can force B to lose the game
                dp[i] = true;

                break;
            }
        }
    }

    return dp[n];
}
divisorGame(2); //true - Alice chooses 1, and Bob has no more moves
//DP = [F, F, F]

//i = 2, x = 1
//2 % 1 = 0 && dp[2 - 1] = F -> True : Alice wins
//DP = [F, F, T]

divisorGame(3); //false - Alice chooses 1, Bob chooses 1, and Alice has no more moves
//DP = [F, F, F, F]

//i = 2, x = 1
//2 % 1 = 0 && dp[2 - 1] = F -> True : Alice wins
//DP = [F, F, T, F]

//i = 3, x = 1
//3 % 1 = 0 && dp[3 - 1] = F -> False : Bob wins
//3 % 2 = 0 && dp[3 - 2] = F -> False : Bob wins
//DP = [F, F, T, F]

