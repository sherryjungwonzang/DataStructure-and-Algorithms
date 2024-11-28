//2011. Final Value Of Variable After Performing Operations
//there is a programming language with only four operations and one variable X:
//++X and X++ increments the value of the variable X by 1
//--X and X-- decrements the value of the variable X by 1
//initially, the value of X is 0

//given an array of strings operations containing a list of operations
//return the final value of X after performing all the operations
var finalValue = (operations) => {
    let count = 0;

    for (let operation of operations) {
        if (operation === 'X++' || operation === '++X') count++;
        else count--;
    }

    return count;
}
finalValue(["--X","X++","X++"]); //1
//["--X", "X++", "X++"]
//   ^
//count = 0 -> -1

//["--X", "X++", "X++"]
//          ^
//count = 0 -> -1 -> 0

//["--X", "X++", "X++"]
//                 ^
//count = 0 -> -1 -> 0 -> 1

finalValue(["++X","++X","X++"]); //3

finalValue(["X++","++X","--X","X--"]); //0
