//2347. Best Poker Hand
//given an integer array ranks and a character array suits
//you have 5 cards where the ith card has a rank of ranks[i] and a suit of suits[i]
//the following are the types of poker hands you can make from best to worst:
//"Flush": Five cards of the same suit
//"Three of a Kind": Three cards of the same rank
//"Pair": Two cards of the same rank
//"High Card": Any single card
//return a string representing the best type of poker hand you can make with the given cards

//Approach:
//using hash table
var bestPokerHand = (ranks, suits) => {
    let rank = new Array(14).fill(0);
    let res = 0;
    let i = 1;

    for (; i < suits.length; i++) {
        if (suits[i - 1] !== suits[i]) break;
    }

    //base case
    if (suits.length === i) return "Flush";
    
    //filling rank array
    for (let i = 0; i < ranks.length; i++) rank[ranks[i]]++;

    for (let i = 0; i < rank.length; i++) res = Math.max(res, rank[i]);

    //poker hands
    if (res >= 3) return "Three of a Kind";
    else if (res === 2) return "Pair";
    
    return "High Card";
}
//TC: O(n)
//SC: O(1)
bestPokerHand(ranks = [13,2,3,1,9], suits = ["a","a","a","a","a"]); //"Flush"
//                                                ^
//i - 1 === i -> i = 5
//i = suits.length -> Flush

bestPokerHand(ranks = [4,4,2,4,4], suits = ["d","a","a","b","c"]); //"Three of a Kind"
//                                               ^
//d != a -> break

//ranks = [4, 4, 2, 4, 4]
//         ^
//rank = [ 0, 0, 1, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]

//rank = [ 0, 0, 1, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]           rank = [ 0, 0, 1, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
//               ^                                                                   ^
//res = 0 -> (0, 1) = 1 -> (1, 4) = 4

//res = 4 >= 3 -> Three of a Kind

bestPokerHand(ranks = [10,10,2,12,9], suits = ["a","b","c","a","d"]); //"Pair"


