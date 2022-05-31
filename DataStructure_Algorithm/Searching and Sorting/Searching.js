//Searching
//1. Linear Search
//on unsorted data
//go through each element of the array one index after another sequentially
//iterates through the entire array of numbers
function linearSearch(array, n) {
    //iterate through the array and find
    for (var i = 0; i < array.length; i++) {
        if (array[i] == n) return true;
    }
    return false;
}
console.log(linearSearch([1,2,3,4,5,6,7,8,9], 6)); //true
console.log(linearSearch([1,2,3,4,5,6,7,8,9], 10)); //false
//Time Complextiy: O(n)


//2. Binary Search
//on sorted data
//check the middle value to see whether the desired value is greater or smaller than it
//if the desired value is smaller, the algorithm can search through the smaller parts
//if the desired value is bigger, the algorithm can search through the bigger parts
function binarySearch(array, n) {
    var lowIndex = 0;
    var highIndex = array.length - 1;

    while(lowIndex <= highIndex) {
        var midIndex = Math.floor((highIndex + lowIndex) / 2);
        if (array[midIndex] == n) {
            return midIndex;
        } else if(n > array[midIndex]) {
            lowIndex = midIndex;
        } else {
            highIndex = midIndex;
        }
    }
    return -1;
}
console.log(binarySearch([1,2,3,4], 4)); //true
console.log(binarySearch([1,2,3,4], 5)); //-1
