//703. Kth Largest Element In Stream
//you are part of a university admissions office and need to keep track of the kth highest test score from applicants in real-time
//this helps to determine cut-off marks for interviews and admissions dynamically as new applicants submit their scores

//you are asked to implement a class which, for a given integer k, maintains a stream of test scores
//and continuously returns the kth highest test score after a new score has been submitted
//more specifically, we are looking for the kth highest score in the sorted list of all scores

//implement the KthLargest class:
//KthLargest(int k, int[] nums) initializes the object with the integer k and the stream of test scores nums
//int add(int val) adds a new test score val to the stream and returns the element representing the kth largest element in the pool of test scores so far
var KthLargest = (k, nums) => {
    this.k = k;
    this.minHeap = new MinPriorityQueue();

    for (let num of nums) this.add(num);
}

KthLargest.prototype.add = (val) => {
    if (this.minHeap.size() < this.k) this.minHeap.enqueue(val); //adding value
    else if (val > this.minHeap.front().element) { //if the heap is full
        this.minHeap.dequeue();
        this.minHeap.enqueue(val);
    }

    return this.minHeap.front().element;
}
//Input: ["KthLargest", "add", "add", "add", "add", "add"]
//[[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
//Output: [null, 4, 5, 5, 8, 8]

//Input: ["KthLargest", "add", "add", "add", "add"]
//[[4, [7, 7, 7, 7, 8, 3]], [2], [10], [9], [9]]
//Output: [null, 7, 7, 7, 8]
