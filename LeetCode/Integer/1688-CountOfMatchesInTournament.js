//1688. Count Of Matches In Tournament
//given an integer n
//the number of teams in a tournament that has strange rules:
//if the current number of teams is even, each team gets paired with another team
//a total of n / 2 matches are played, and n / 2 teams advance to the next round

//if the current number of teams is odd, one team randomly advances in the tournament, and the rest gets paired
//a total of (n - 1) / 2 matches are played, and (n - 1) / 2 + 1 teams advance to the next round
//return the number of matches played in the tournament until a winner is decided

//Approach:
//using recursion
var countMatches = (n) => {
    //base case
    if (n === 1) return 0;

    if (n % 2 === 0) return n / 2 + countMatches(n / 2); //even
    else return (n - 1) / 2 + countMatches((n - 1) / 2 + 1); //odd
}
countMatches(7); //6
//- 1st Round: Teams = 7, Matches = 3, and 4 teams advance
//- 2nd Round: Teams = 4, Matches = 2, and 2 teams advance
//- 3rd Round: Teams = 2, Matches = 1, and 1 team is declared the winner

countMatches(14); //13
//- 1st Round: Teams = 14, Matches = 7, and 7 teams advance
//- 2nd Round: Teams = 7, Matches = 3, and 4 teams advance
//- 3rd Round: Teams = 4, Matches = 2, and 2 teams advance
//- 4th Round: Teams = 2, Matches = 1, and 1 team is declared the winner

//n = 14 -> 14 % 2  = 0: even
//14 / 2 + recurse(14 / 2 = 7) = 7 + recurse(7) -----------> 7 + 6 = 13

//recurse(7) -> 7 % 2 != 0: odd
//7 / 2 + recurse(7 / 2 + 1) = 3 + recurse(4)   -----------> 3 + 3 = 6

//recurse(4) -> 4 % 2  = 0: even
//4 / 2 + recurse(4 / 2 = 2) = 2 + recurse(2)   -----------> 2 + 1 = 3

//recurse(2) -> 2 % 2  = 0: even
//2 / 2 + recurse(2 / 2 = 1) = 1 + recurse(1)   -----------> 1 + 0 = 1
//as n = 1 -> 0
