//295. Find Median from Data Stream
//median - the middle value in an ordered integer list
//if the size of the list is even, there is no middle value and the median is the mean of the two middle values
//ex: arr = [2,3,4] | median is 3
//ex: arr = [2,3] | median is (2+3)/2=2.5

//implement the MedianFinder class
//MedianFinder() - initializes the MedianFinder object
//addNum(num) - adds the integer numm from the data stream to the data structure
//findMedian() - returns the median of all elements so far

//Approach:
//Binary Search - to find a position in order to add a value
var medianFinder = () => {
    this.arr = [];
}

//addNum
//using two pointers - left and right pointer to find mid
//using splice() - to add
medianFinder.prototype.addNum = function(num) {
    let left = 0;
    let right = this.Array.length - 1;

    while(left <= right) {
        let mid = Math.floor((right - left) / 2);

        if (this.arr[mid] < num) {
            left = mid + 1;
        } else { //not going to be in the right side of the array
            right = mid - 1;
        }
    }
    //splice(index, how many items we need to remove - 0: just add, 1: replace 1 item, what we are inserting
    this.arr.splice(left, 0, num); 
}


medianFinder.prototype.findMedian = function() {
    //even
    if (this.arr.length % 2 === 0) {
        let mid = this.arr.length / 2;

        return (this.arr[mid] + this.arr[mid - 1]) / 2;
    } else {
        //odd
        let mid = Math.floor(this.arr.length / 2);

        return this.arr[mid]; //only have one mid val
    }
}
//TC: O(1)
let medianFinder = new medianFinder();
medianFinder.addNum(1); //arr = [1]
medianFinder.addNum(2); //arr = [1, 2]
medianFinder.findMedian(); //1.5
medianFinder.addNum(3); //arr = [1, 2, 3]
medianFinder.findMedian(); //2.0
