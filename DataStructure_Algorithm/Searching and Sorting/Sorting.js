//Sorting
//locate items in a sorted array thatn in an unsorted array

//1. Bubble Sort
//the simplest sorting algorithm
//iterates over the entire array and swaps elements if one is bigger than the other
function swap(array, index1, index2) {
    var temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}

function bubbleSort(array) {
    for (var i = 0, arrayLength = array.length; i < arrayLength; i++) {
        for (var j = 0; j <= i; j++) {
            if (array[i] < array[j]) swap(array, i, j);
        }
    }
    return array;
}
console.log(bubbleSort([6,1,2,3,4,5])); //[ 1, 2, 3, 4, 5, 6 ]
//Time Complexity: O(n^2)
//Space Complexity: O(1)


//2. Selection Sort
//scanning the elements for the smallest element
//inserting it into the current position of the array
function selectionSort(items) {
    var len = items.length;
    var min;

    for (var i = 0; i < len; i++) {
        //set minimum to this position
        min = i;

        //check the rest of the array to see if anything is smaller
        for (j = i + 1; j < len; j++) {
            if (items[j] < items[min]) {
                min = j;
            }
        }

        //if the minimum isn't in the position, swap it
        if (i != min) {
            swap(items, i, min);
        }
    }
    return items;
}
console.log(selectionSort([6,1,23,4,2,3])); //[ 1, 2, 3, 4, 6, 23 ]
//Time Complexity: O(n^2)
//Space Complexity: O(1)


//3. Insertion Sort
//searching the array sequentially 
//moving the unsorted items into a sorted sublist on the left side of the array
function insertionSort(items) {
    var len = items.length; //number of items in the array
    var value; //the value currently being compared
    var i; //index into unsorted section
    var j; //index into sorted section

    for (i = 0; i < len; i++) {
        //store the current value because it may shift later
        value = items[i];

        //whenever the value in the sorted section is greater than the value
        //in the unsorted section, shift all items in the sorted section over by one
        //it creates space in which to insert the value
        for (j = i - 1; j > - 1 && items[j] > value; j--) {
            items[j+1] = items[j];
        }
        items[j+1] = value;
    }
    return items;
}
console.log(insertionSort([6,1,23,4,2,3])); //[ 1, 2, 3, 4, 6, 23 ]
//Time Complexity: O(n^2)
//Space Complexity: O(1)


//4. Quick Sort
//when the average performance should be optimal
//obtaining the pivot
//partitioning the array around it: bigger elements on one side and smaller elements on the other side
function quickSort(items) {
    return quickSortHelper(items, 0, items.length-1);
}

function quickSortHelper(items, left, right) {
    var index;

    if(items.length > 1) {
        index = partition(items, left, right);

        if (left < index - 1) {
            quickSortHelper(items, left, index-1);
        }
        
        if(index < right) {
            quickSortHelper(items, index, right);
        }
    }
    return items;
}

function partition (array, left, right) {
    var pivot = array[Math.floor((right+left)/2)];

    while(left <= right) {
        while(pivot > array[left]) {
            left++;
        }

        while(pivot < array[right]) {
            right--;
        }

        if(left <= right) {
            var temp = array[left];
            array[left] = array[right];
            array[right] = temp;
            left++;
            right--;
        }
    }
    return left;
}
console.log(quickSort([6,1,23,4,2,3])); //[ 1, 2, 3, 4, 6, 23 ]
//Time Complexity: O(nlog2(n)) on average, O(n^2) for worst case
//Space Complexity: O(log2(n))


//5. Quick Select
//to find the Kth smallest element in an unordered list
//same approach to quick sort
var array = [1,3,3,-2,3,14,7,8,1,2,2];
//sorted form: [-2,1,1,2,2,3,3,3,7,8,14]

function quickSelectInPlace(A, l, h, k) {
    var p = partition(A, l, h);

    if (p == (k-1)) {
        return A[p];
    } else if (p > (k-1)) {
        return quickSelectInPlace(A, l, p-1, k);
    } else {
        return quickSelectInPlace(A, p+1, h, k);
    }
}

function medianQuickselect(array) {
    return quickSelectInPlace(array, 0, array.length-1, Math.floor(array.length/2));
}
console.log(quickSelectInPlace(array, 0, array.length-1, 5)); //2: because it is the fifth smallest element
console.log(quickSelectInPlace(array, 0, array.length-1, 10)); //7: because it is the fifth smallest element
//Time Complexity: O(n)


//6. Merge Sort
//dividing the array into subarrays until each array has one element
//then, each subarray is concatenated in a sorted order

//merge function: add all the elements from both arrays in sorted order in a result array
function merge(leftA, rightA) {
    var results = [];
    var leftIndex = 0;
    var rightIndex = 0;

    while(leftIndex < leftA.length && rightIndex < rightA.length) {
        if (leftA[leftIndex] < rightA[rightIndex]) {
            results.push(leftA[leftIndex++]);
        } else {
            results.push(rightA[rightIndex++]);
        }
    }

    var leftRemains = leftA.slice(leftIndex);
    var rightRemains = rightA.slice(rightIndex);

    //add remaining to resultant array
    return results.concat(leftRemains).concat(rightRemains);
}

function mergeSort(array) {
    if (array.length < 2) {
        return array;
    }

    var midpoint = Math.floor((array.length)/2);
    var leftArray = array.slice(0, midpoint);
    var rightArray = array.slice(midpoint);

    return merge(mergeSort(leftArray), mergeSort(rightArray));
}
console.log(mergeSort([6,1,23,4,2,3])); //[ 1, 2, 3, 4, 6, 23 ]
//Time Complexity: O(nlog2(n))
//Space Complexity: O(n)



//7. Count Sort
//when sorting integers with a limited range
//works only for numbers and given a certain range
//once occurences of each element are counted, the new array can be created using those occurences
function countSort(array) {
    var hash = {};
    var countArr = [];
    for (var i = 0; i < array.length; i++) {
        if (!hash[array[i]]) {
            hash[array[i]] = 1;
        } else {
            hash[array[i]]++;
        }
    }

    for (var key in hash) {
        //for any number of _ element, add it to array
        for (var i = 0; i < hash[key]; i++) {
            countArr.push(parseInt(key));
        }
    }
    return countArr;
}
console.log(countSort([6,1,23,2,3,2,1,2,2,3,3,1,23,23,4,2,3])); //[ 1, 2, 3, 4, 6, 23 ]
//Time Complexity: O(k+n)
//Space Complexity: O(k)


//8. JavaScript's Built-in Sort
//sort(): for an array object, sorts elements bu ascending order
var array = [12,3,4,2,1,34,23];
array.sort(); //array: [1,12,2,23,3,34,4]

//ascending order
function comparatorNumber(a, b) {
    return a-b;
}
console.log(array.sort(comparatorNumber)); //[1,  2,  3, 4, 12, 23, 34]

//descending order
function comparatorNumber(a, b) {
    return b-a;
}
console.log(array.sort(comparatorNumber)); //[34, 23, 12, 4, 3,  2,  1]

