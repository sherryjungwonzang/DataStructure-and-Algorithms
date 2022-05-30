//1. Keep track of median in stream of numbers
//have one min-heap and one max-heap
//retrieving the median takes only O(1)

//having a stream of integers: 12,2,23,4,13

//Mdeian
//ex: when 12 is inserted, the median is 12 cause there is no other element
//when 12 and 2 is inserted, the median is ((12+2)/2) = 7

function MedianHeap() {
    this.minHeap = new MinHeap();
    this.maxHeap = new MaxHeap();
}
function MinHeap() {
    this.items = [];
}
function MaxHeap() {
    this.items = [];
}

MedianHeap.prototype.push = (value) => {
    if (value > this.median()) {
        this.minHeap.add(value);
    } else {
        this.maxHeap.add(value);
    }

    //re-balancing
    if (this.minHeap.size() - this.maxHeap.size() > 1) {
        this.maxHeap.push(this.minHeap.poll());
    }
    if (this.maxHeap.size() - this.minHeap.size() > 1) {
        this.minHeap.push(this.maxHeap.poll());
    }
}

MedianHeap.prototype.median = () => {
    if (this.minHeap.size() == 0 && this.maxHeap.size() == 0) {
        return Number.NEGATIVE_INFINITY;
    } else if (this.minHeap.size() == this.maxHeap.size()) {
        return (this.minHeap.peek() + this.maxHeap.peek()) / 2;
    } else if (this.minHeap.size() > this.maxHeap.size()) {
        return this.minHeap.peek();
    } else {
        return this.maxHeap.peek();
    }
}


var medianH = new MedianHeap();
medianH.push(12);
console.log(medianH.median()); //12

medianH.push(2);
console.log(medianH.median()); // ((12+2)/2) = 7

medianH.push(23);
console.log(medianH.median()); // ((12+2+23)/3) = 12

medianH.push(13);
console.log(medianH.median()); // ((12+2+23+13)/4) = 12.5


//2. Find the Kth smallest value in an array
//simply add the elements into a heap and pop it Kth times
//by definition of min-heaps, it returns the Kth smallest value in the array
var array1 = [12, 3, 13, 4, 2, 40, 23];

function getKthSmallestElement (array, k) {
    var minH = new MinHeap();

    for (var i = 0, arrayLength = array.length; i < arrayLength; i++) {
        minH.add(array[i]);
    }

    for (var i = 1; i < k; i++) {
        minH.poll();
    }
    return minH.poll();
}
getKthSmallestElement(array1, 2); //3
getKthSmallestElement(array1, 1); //2
getKthSmallestElement(array1, 7); //40


//3. Find the Kth largest value in an array
//with max-heap
var array1 = [12, 3, 13, 4, 2, 40, 23];

function getKthBiggestElement (array, k) {
    var maxH = new MaxHeap();

    for (var i = 0, arrayLength = array.length; i < arrayLength; i++) {
        maxH.push(array[i]);
    }

    for (var i = 1; i < k; i++) {
        maxH.pop();
    }
    return maxH.pop();
}
getKthBiggestElement(array1, 2); //23
getKthBiggestElement(array1, 1); //40
getKthBiggestElement(array1, 7); //2
//Time Complexity: O(klog2(n))
//n is the size of the array
//.pop() costs O(log2(n)) and it has to be done k times

//Space Complexity: O(n)
//to store the heap array
