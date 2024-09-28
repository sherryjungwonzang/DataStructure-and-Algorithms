//3222. Find The Winning Player In Coin Game
//given two positive integers x and y
//denoting the number of coins with values 75 and 10 respectively

//alice and bob are playing a game
//each turn, starting with Alice, the player must pick up coins with a total value 115
//if the player is unable to to do, they lose the game
//return the name of the player who wins the game if both players optimally
var winnerCoinGame = (x, y) => {
    let turn = 0;

    while (true) {
        //checking 115 value
        if (x >= 1 && y >= 4) {
            x -= 1;
            y -= 4;
        } else {
            return turn % 2 === 0 ? "Bob" : "Alice";
        }

        turn++;
    }
} 
winnerCoinGame(x = 2, y = 7); //"Alice" - Alice picks 1 coin with a value of 75 and 4 coins with a value of 10
//x = 2 -> 1
//y = 7 -> 3
//turn = 0 -> 1

//already 115 value
//turn % 2 != 0 -> Alice wins

winnerCoinGame(x = 4, y = 11); //"Bob" 
//Alice picks 1 coin with a value of 75 and 4 coins with a value of 10
//Bob picks 1 coin with a value of 75 and 4 coins with a value of 10

//x = 4 -> 3 -> 2
//y = 11 -> 7 -> 3
//turn = 0 -> 1 -> 2

//already 115 value
//turn % 2 = 0 -> Bob wins
