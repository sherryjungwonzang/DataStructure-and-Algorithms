//ex1. Square Root funtion for an integer without using any math libraries
//first solution: trying every possibility from 1 to the number
//linearly check one by one the value for the suare root
function sqrtIntNaive(num) {
    if (num == 0 || num == 1) {
        return num;
    }

    var index = 1;
    var square = 1;

    while(square < num) {
        if (square == num) return square;

        index++;

    square = index * index;
    }
    return index;
}
console.log(sqrtIntNaive(9)); //3
//Time Complexity: O(n)

//second solution: binary search
//partition the range into upper half and lower half between 1 and the given number
function sqrtInt(num) {
    if (num == 0 || num == 1) return num;

    var start = 1;
    var end = num;
    var ans;

    while(start <= end) {
        let mid = parseInt((start+end)/2);

        if (mid * mid == num) return mid;

        if (mid * mid < num) {
            start = mid + 1; //use the upper section
            ans = mid;
        } else {
            end = mid - 1; //use the lower section
        }
    }
    return ans;
}
console.log(sqrtInt(9)); //3
//Time Complexity: O(n)


//ex2. Find a square root of a float
//using threshold value to calculate accuracy 
//because the square root of a double will have decimals
function sqrtDouble(num) {
    var threshold = 0.1;
    var upper = num;
    var lower = 0;
    var middle;

    while(upper - lower > threshold) {
        middle = (upper+lower)/2;
        if(middle * middle>num) {
            upper = middle;
        } else {
            lower = middle;
        }
    }
    return middle;
}
console.log(sqrtDouble(9)); //3.0234375
//Time Complexity: O(n)



//ex3. Find two elements of an array add up to a given number
//first solution: simple approach to check every other element for each element in the array
function findTwoSum(array, sum) {
    for (var i = 0, arrayLength = array.length; i < arrayLength; i++) {
        for (var j = i+1; j < arrayLength; j++) {
            if (array[j] + array[i] == sum) {
                return true;
            }
        }
    }
    return false;
}
//Time Complexity: O(n^2)
//there are a lot of checking, hence it takes quadratic time
//Space Complexity: O(1)


//second solution: to store the already visited numbers and check against them
//it can be done in linear time
function findTwoSum(array, sum) {
    var store = {};

    for (var i = 0, arrayLength = array.length; i < arrayLength; i++) {
        if (store[array[i]]) {
            return true;
        } else {
            store[sum - array[i]] = array[i];
        }
    }
    return false;
}
//Time Complexity: O(n)
//Space Complexity: O(n)
//to store items into the 'store' object


//ex4. Find an element within an array that appears only once
//given a sorted array in which all elements appear twice(one after one) and one element appears only once
//to find that element in O(log2(n)) complexity
//by modifying the binary search algorithm and checking the addition indices
function findOnlyOnce(arr, low, high) {
    if (low > high) return null;

    if (low == high) return arr[low];

    var mid = Math.floor((high+low)/2);

    if (mid % 2 == 0) {
        if (arr[mid] == arr[mid + 1]) {
            return findOnlyOnce(arr, mid+2, high);
        } else {
            return findOnlyOnce(arr, low, mid);
        }
    } else {
        if (arr[mid] == arr[mid - 1]) {
            return findOnlyOnce(arr, mid+1, high);
        } else {
            return findOnlyOnce(arr, low, mid-1);
        }
    }
}

function findOnlyOnceHelper(arr) {
    return findOnlyOnce(arr, 0, arr.length);
}

arr = [1,1,3,3,4,5,5,7,7,8,8];
console.log(findOnlyOnceHelper(arr)); //4

arr1 = [1,1,2,4,4,5,5,6,6];
console.log(findOnlyOnceHelper(arr1)); //2
//Time Complexity: O(log2(n))
//Space Complexity: O(1)



//ex5. Create a JavaScript sort comparator function that would sort string length
var mythical = ['dragon', 'slayer', 'magic', 'wizard of oz', 'ned stark'];

//if it is an array of strings, strings all have a property of length, which can be used to sort the array
function sortComparator(a, b) {
    return a.length - b.length;
}
//console.log(mythical.sort(sortComparator)); //[ 'magic', 'dragon', 'slayer', 'ned stark', 'wizard of oz' ]

//sort srting elements, putting strings with 'a' first
function sortComparator(a, b) {
    return a.indexOf("a") - b.indexOf("a");
}
console.log(mythical.sort(sortComparator)); //[ 'magic', 'dragon', 'slayer', 'wizard of oz', 'ned stark' ]


//sort object elements by the number of properties
var mythical1 = [{ prop1: "", prop2: "" }, { prop1: "", prop2: "", prop3: ""}, { prop1: "", prop2: "" }];

function sortComparator(a, b) {
    return Object.keys(a).length - Object.keys(b).length;
}
console.log(mythical1.sort(sortComparator));
//[
//    { prop1: '', prop2: '' },
//    { prop1: '', prop2: '' },
//    { prop1: '', prop2: '', prop3: '' }
//  ]


//ex6. Implement a word counter list
//to generate an object of words as keys and the number of times the words occur in a string ordered by highest to lowest occurences
function wordCount (sentence) {
    //period with nothing, so it doesnt count as word
    var wordsArray = sentence.replace(/[.]/g, "").split(" ");
    var occurenceList = {};
    var answerList = {};

    for (var i = 0, wordsLength = wordsArray.length; i < wordsLength; i++) {
        var currentWord = wordsArray[i];

        //doesn't exist, set as first occurence
        if (!occurenceList[currentWord]) {
            occurenceList[currentWord] = 1;
        } else {
            occurenceList[currentWord]++; //add occurences
        }

    }

    var arrayTemp = [];

    //push the value and key as fixed array
    for (var prop in occurenceList) {
        arrayTemp.push([occurenceList[prop], prop]);
    }

    function sortcomp(a, b) {
        return b[0] - a[0]; //compare the first element of the array
    }
    arrayTemp.sort(sortcomp); //sort

    for (var i = 0, arrlength = arrayTemp.length; i < arrlength; i++) {
        var current = arrayTemp[i];
        answerList[current[1]] = current[0]; //key-value pairs
    }
    return answerList;
}
console.log(wordCount("practice makes perfect. Get perfect by practice. Just practice"));
//{ practice: 3, perfect: 2, makes: 1, Get: 1, by: 1, Just: 1 }

//Time Complexity: O(nlog2(n))
//Space Complexity: O(n)
