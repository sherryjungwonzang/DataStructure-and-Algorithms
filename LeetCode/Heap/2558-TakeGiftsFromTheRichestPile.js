//2558. Take Gifts From The Richest Pile
//given an integer array gifts denoting the number of gitfs in various piles
//every second, you do the following:
//choose the pile with the max number of gifts
//if there is more than one pile with the max number of gifts, choose any
//leave behind the floor of the square root of the number of gifts in the pile, take the rest of the gifts
//return the number of gifts remaining after k seconds

//Approach:
//using max priority queue
var richestPileGift = (gifts, k) => {
    //max priority queue
    let queue = new MaxPriorityQueue();
    let sum = 0;

    //filling max priority queue
    for (let gift of gifts) queue.enqueue(gift);

    while (k--) {
        let curr = queue.dequeue().element; //popping the max val first
        let square = Math.floor(Math.sqrt(curr));

        //pushing it back to queue
        queue.enqueue(square);
    }

    //calculating the sum
    while (!queue.isEmpty()) {
        sum += queue.dequeue().element;
    }

    return sum;
}
richestPileGift(gifts = [25,64,9,4,100], k = 4); //29
//queue = [4, 9, 25, 64, 100]

//[4, 9, 25, 64, 100]
//                ^
//k = 4
//curr = 100 -> square = 10
//enqueue and sorting as max priority: [4, 9, 10, 25, 64]

//[4, 9, 10, 25, 64]
//                ^
//k = 3
//curr = 64 -> square = 8
//enqueue and sorting as max priority: [4, 8, 9, 10, 25]

//[4, 8, 9, 10, 25]
//              ^
//k = 2
//curr = 25 -> square = 5
//enqueue and sorting as max priority: [4, 5, 8, 9, 10]

//[4, 5, 8, 9, 10]
//              ^
//k = 1
//curr = 10 -> square = 3
//enqueue and sorting as max priority: [3, 4, 5, 8, 9]

//[3, 4, 5, 8, 9] -> sum = 0 -> 3 -> 7 -> 12 -> 20 -> 29

richestPileGift(gifts = [1,1,1,1], k = 4); //4
