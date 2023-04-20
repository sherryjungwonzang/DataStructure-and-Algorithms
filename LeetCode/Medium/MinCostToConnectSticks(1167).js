//1167. Minimum Cost to Connect Sticks
//have some number of sticks with positive integer lengths
//these lengths are given as an array 'sticks' - where sticks[i] is the length of the i_th stick

//can connect any two sticks of lengths 'x' and 'y' into one stick
//by paying a cost of x + y
//must connect all the sticks until there is only one stick remaining

//return the minimum cost of connecting all the given sticks into one stick in this wa

//Approach:
//using Greedy and Min Heap
var minCostConnectSticks = (sticks) => {
  //creating minHeap by MinPriorityQueue
  let heap = new MinPriorityQueue();
  //to store total and keep track of it
  let total = 0;

  //populate priority of Heap
  for (let stick of sticks) {
    heap.enqueue(stick);
  }

  while(heap.size() > 1) {
    //diff is with the first and second smallest values
    let minValues = heap.dequeue().element + heap.dequeue().element;
    //update total
    total += minValues;
    //add back to the heap
    heap.enqueue(minValues);
  }
  return total;
}
minCostConnectSticks([2,4,3]); //14 - can start with sticks = [2,4,3] 
//1. Combine sticks 2 and 3 for a cost of 2 + 3 = 5. Now have sticks = [5,4]
//2. Combine sticks 5 and 4 for a cost of 5 + 4 = 9. Now having sticks [9]
//There is only one stick left, it is done. The total cost is 5 + 9 = 14

//   2
// 4  3   size = 3
//total = 0


//   2
// 4  3   size = 3

//flip with the bottom most right value to remove 2
//   3                      3
// 4  2   remove 2 --->   4

//flip with the bottom most right value to remove 3
//   4                      4
// 3     remove 3 --->   

//removed 2 and 3 -> 2+3 = 5
//total = 5
//add 5 back to heap

//   4                
// 5     

//flip with the bottom most right value to remove 4
//   5                    5
// 4     remove 4 | size = 1

//removed 4 and previous total 5 = 9
//total = 9
//add 9 back to heap

//   5  
// 9 

//flip with the bottom most right value to remove 4
//   9                9
// 5  remove 5 --->    szie = 1

//removed 5 and previous total 9 = 14
//return 14


minCostConnectSticks([1,8,3,5]); //30 - you start with sticks=[1,8,3,5]
//1. Combine sticks 1 and 3 for a cost of 1 + 3 = 4. Now having sticks = [4,8,5]
//2. Combine sticks 4 and 5 for a cost of 4 + 5 = 9. Now having sticks = [9, 8]
//3. Combine sticks 9 and 8 for a cost of 9 + 8 = 17. Now having sticks = [17]
//there is only one stick left, done. The total cost is 4+9+17 = 30
