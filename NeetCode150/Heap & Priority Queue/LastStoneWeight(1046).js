//1. Last stone weight (1046)
//given an array of integers 'stones' - where stones[i] is the weight of the i-th stone

//playing a game with the stones
//on each turn, we choose the heaviest stones and smash them together
//suppose the heaviest two stones have weights x and y with x <= y

//if x == y -> both stones are destroyed
//if x != y -> the stone of weight x is destroyed and the stone of weight y has new weight y - x
//at the end of the game, there is at most one stone left

//return the weight of the last remaining stone
//if there are no stones, return 0

//Approach:
//using Heap and Max prioiry queue
var lastStoneWeight = (stones) => {
  //create a heap with max priority queue
  const heap = new MaxPriorityQueue();

  //adding element into heap
  for (const stone of stones) heap.enqueue(stone);

  while(heap.size() > 1) {
    //calculate difference between the first largest element and the second largest element
    let diff = heap.dequeue().element - heap.dequeue.element;

    if (diff > 0) heap.enqueue(diff); //add it back into heap
  }

  return heap.size() === 0 ? 0 : heap.front().element;
} 
lastStoneWeight([2,7,4,1,8,1]); //1 - combine 7 and 8 to get 1, so the array converts to [2,4,1,1,1]
                                //then we combine 2 and 4 to get 2 so the array converts to [2,1,1,1]
                                //then we combine 2 and 1 to get 1 so the array converts to [1,1,1]
                                //then we combine 1 and 1 to get 0 so the array converts to [1]
                                //then that is the value of the last stone
//       2
//    7     4
//  1  8  1
//convert this into a max heap

//       8
//    7     4
//  1  2  1
//to remove the first largest element = 8 -> 8 & 1 flipped
//and make it to max heap again
//size = 6

//       1
//    7     4
//  1  2  
//convert this into a max heap

//       7
//    2     4
//  1  1 
//to remove the second largest element = 7 -> 7 & 1 flipped
//and make it to max heap again

//       1
//    2     4
//  1   
//convert this into a max heap

//       4
//    2     1
//  1  
//size = 5
//removed elements = 8 & 7
//calculate the difference is 1
//add 1 back into the heap

//       4
//    2     1
//  1   1
//repeat the process

//to remove 4 -> 4 & 1 flipped
//       1
//    2     1
//  1   
//convert this into a max heap
//       2
//    1     1
//  1 
//size = 4

//to remove 2 -> 2 & 1 flipped
//       1
//    1     1
//size = 3
//removed elements = 4 & 2
//calculate the difference is 2
//add 2 back into the heap

//       1
//    1     1
//  2
//...

//    1
//size = 1 -> return the value 
                       
lastStoneWeight([1]); //1
