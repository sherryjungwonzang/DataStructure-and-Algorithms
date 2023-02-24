//Find Median from Data Stream (295)
//median - the middle value in an ordered integer list
//if the size of the list is even, there is no middle value and the median is the mean of the two middle values
//ex: arr=[2,3,4] | median is 3
//ex: arr=[2,3] | median is (2+3)/2=2.5

//implement the MedianFinder class
//MedianFinder() - initializes the MedianFinder object
//addNum(num) - adds the integer numm from the data stream to the data structure
//findMedian() - returns the median of all elements so far

//Approach:
//Binary Search
var medianFinder = () => {
  this.arr = [];
}

//addNum
medianFinder.prototype.addNum = function(num) {
  //using two pointers - left and right
  let left = 0;
  let right = this.arr.length - 1;

  while(left <= right) {
    let mid = Math.floor((right + left) / 2);

    if (this.arr[mid] < num) {
      left = mid + 1;
    } else { //this is not going to be in the right side of the array
      right = mid - 1;
    }
  }
  //splice():
  //first parameter - the index
  //second parameter - how many items we need to remove
  //third parameter - what we are inserting
  this.arr.splice(left, 0, num);
};

medianFinder.prototype.findMedian = function() {
  //even
  if (this.arr.length % 2 === 0) {
    let mid = this.arr.length / 2;
    
    return (this.arr[mid] + this.arr[mid - 1]) / 2; //can have more than one mid value
  } else  { //odd 
    let mid = Math.floor(this.arr.length / 2);

    return this.arr[mid]; //only have one mid val 
  }
}

