//950. Reveal Cards In Increasing Order
//given an integer array deck
//there is a deck of cards where every card has a unique integer
//the integer on the ith card is deck[i]

//you can order the deck in any order you want
//initially, all the cards start face down (unrevealed) in one deck

//you will do the following steps repeatedly until all cards are revealed:
//take the top card of the deck, reveal it, and take it out of the deck
//if there are still cards in the deck then put the next top card of the deck at the bottom of the deck
//if there are still unrevealed cards, go back to step 1. Otherwise, stop

//return an ordering of the deck that would reveal the cards in increasing order
//note that the first entry in the answer is considered to be the top of the deck

//Approach:
//using sorting and dequeue()
var revealCards = (deck) => {
    let m = deck.length;
    let revealed = [];

    //sorting
    deck.sort((a,  b) => a - b);

    //adding the last value to revealed as initial one
    revealed.unshift(deck[m - 1]);

    for (let i  = m - 2; i >= 0; i--) {
        //adding in front
        revealed.unshift(revealed.pop()); //for sorting

        //adding
        revealed.unshift(deck[i]);
    }

    return revealed;
}
//TC: O(n logn)
//SC: O(n logn)
revealCards(deck = [17,13,11,2,3,5,7]); //[2,13,3,11,5,17,7]
//sorting: [2, 3, 5, 7, 11, 13, 17]
//revealed = [ 17 ]

//sorting: [2, 3, 5, 7, 11, 13, 17]
//                          ^
//unshift the last one from revealed and add it in front ot it
//revealed = [ 17 ] -> [ ] -> [ 17 ]
//adding curr: [ 13, 17 ]

//sorting: [2, 3, 5, 7, 11, 13, 17]
//                       ^
//unshift the last one from revealed and add it in front ot it
//revealed = [ 13, 17 ] -> [ 13 ] -> [ 17, 13 ]
//adding curr: [ 11, 17, 13 ]

//sorting: [2, 3, 5, 7, 11, 13, 17]
//                       ^
//unshift the last one from revealed and add it in front ot it
//revealed = [ 13, 17 ] -> [ 13 ] -> [ 17, 13 ]
//adding curr: [ 11, 17, 13 ]

//sorting: [2, 3, 5, 7, 11, 13, 17]
//                   ^
//unshift the last one from revealed and add it in front ot it
//revealed = [ 11, 17, 13 ] -> [ 11, 17 ] -> [ 13, 11, 17 ]
//adding curr: [ 7, 13, 11, 17 ]

//sorting: [2, 3, 5, 7, 11, 13, 17]
//                ^
//unshift the last one from revealed and add it in front ot it
//revealed = [ 7, 13, 11, 17 ] -> [ 7, 13, 11 ] -> [ 17, 7, 13, 11 ]
//adding curr: [ 5, 17, 7, 13, 11 ]

//sorting: [2, 3, 5, 7, 11, 13, 17]
//             ^
//unshift the last one from revealed and add it in front ot it
//revealed = [ 5, 17, 7, 13, 11 ] -> [ 5, 17, 7, 13 ] -> [ 11, 5, 17, 7, 13 ]
//adding curr: [ 3, 11, 5, 17, 7, 13 ]

//sorting: [2, 3, 5, 7, 11, 13, 17]
//          ^
//unshift the last one from revealed and add it in front ot it
//revealed = [ 3, 11, 5, 17, 7, 13 ] -> [ 3, 11, 5, 17, 7 ] -> [ 13, 3, 11, 5, 17, 7 ]
//adding curr: [ 2, 13, 3, 11, 5, 17, 7 ]

//[ 2, 13, 3, 11, 5, 17, 7 ]

revealCards([1,1000]); //[1,1000]
