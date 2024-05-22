//1046. Last Stone Weight
//given an array of integers 'stones' where stones[i] is the weight of the i-th stone
//playing a game with the stones
//on each turn, we choose the heaviest two stones and smash them together
//suppose the heaviest two stones have weights x and y - x <= y
//the resulf of this smash is:
//if x == y, both stones are destroyed
//if x !== y, the stone of weight x is destryoed, and the stone of weight y has new weight y - x
//at the end of the game, there is at most one stone left
//return the weight of the last remaining stone
//if there are no stones left, return 0
var lastStoneWeight = (stones) => {
    //creating a heap
    const heap = new MaxPriorityQueue();

    //creating Max Heap
    for (const stone of stones) heap.enqueue(stone);

    while(heap.size() > 1) {
        //removing the first largest value - the second removed largest value
        let diff = heap.dequeue().element - heap.dequeue().element;
        //adding difference back into the heap
        if (diff > 0) heap.enqueue(diff);
    }

    //heap.front() - to return the first element in the heap
    return heap.size() === 0 ? 0 : heap.front().element;
}
lastStoneWeight([2, 7, 4, 1, 8, 1]); //1
//we combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] 
//then, we combine 2 and 4 to get 2 so the array converts to [2,1,1,1]
//then, we combine 2 and 1 to get 1 so the array converts to [1,1,1]
//then, we combine 1 and 1 to get 0 so the array converts to [1]
//then that is the value of the last stone

lastStoneWeight([1]); 
