//378. Kth Smallest Element in a Sorted Matrix
//given an n x n matrix - where each of the rows and columns is sorted in ascending order
//return the k-th smallest element in the matrix

//k-th smallest element in the sorted order, not the k-th distinct element

//must find a solution with a memory complexity better than O(n^2)

//Approach:
//using Heap | MaxHeap - for Kth Smallest element
//looping through the matrix and extract each value -> .forEach()
var kthSmallest = (matrix, k) => {
    //set max heap
    let maxHeap = new MaxPriorityQueue();

    //loop through matrix
    matrix.forEach((row) => {
        //loop through the row
        row.forEach((element) => {
            //add to max heap
            maxHeap.enqueue(element);

            if (maxHeap.size() > k) {
                //remove from max heap
                maxHeap.dequeue().element;
            }
        });
    });
    return maxHeap.front().element;
}
kthSmallest([[1,5,9],[10,11,13],[12,13,15]], 8); //13 - the elements in the matrix are [1,5,9,10,11,12,13,13,15], and the 8th smallest number is 13
//1  5  9                                     1
//10 11 13 -----> making to heap          5       9
//12 13 15                            10    11  13  12
//                                  13  15

//making to max heap - size: 9
//            15
//       13       12
//    13    9    5  11
//  1   10

//to remove 15 -> flip with last value(10) - size: 8
//            10
//       13       12
//    13    9    5  11
//  1   

//convert it back to max heap -> flip 13 & 10 and 13 % 10 again
//            13 -> .front().element is the answer
//       13       12
//    10    9    5  11
//  1   

kthSmallest([[-5]], 1); //-5
// -5
