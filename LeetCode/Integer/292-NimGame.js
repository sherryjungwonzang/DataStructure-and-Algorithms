//292. Nim Game
//you are playing the following Nim Gam with your friend:
//initially, there is a heap of stones on the table
//you and your friend will alternate taking turns, and you go first
//on each turn, the person whose turn it is will remove 1 to 3 stones from the heap
//the one who removes the last stone is the winner

//given n, the number of stones in the heap
//return true is you can win the game assuming both you and your friend play optionally
//otherwise, return false
var nimGame = (n) => {
    if (n % 4 === 0) return false; //I lose
    else return true; //I win
}
nimGame(4); //false
//These are the possible outcomes:
//1. You remove 1 stone. Your friend removes 3 stones, including the last stone. Your friend wins.
//2. You remove 2 stones. Your friend removes 2 stones, including the last stone. Your friend wins.
//3. You remove 3 stones. Your friend removes the last stone. Your friend wins.
//In all outcomes, your friend wins

nimGame(1); //true

nimGame(2); //true
