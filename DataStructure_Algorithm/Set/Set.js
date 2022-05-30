//Set
//for performing uniqueness checks

//Insertion
var exampleSet = new Set();
console.log(exampleSet.add(1)); //Set(1) { 1 }
console.log(exampleSet.add(1)); //Set(1) { 1 }
console.log(exampleSet.add(2)); //Set(2) { 1, 2 }
//Time Complexity: O(1)

//Deletion
var exampleSet = new Set();
console.log(exampleSet.add(1)); //Set(1) { 1 }
console.log(exampleSet.delete(1)); //true
console.log(exampleSet.add(2)); //Set(1) { 2 }
//Time Complexity: O(1)

//Contains
//set.has()-> does a quick O(1) to check whether the element exists within the set
var exampleSet = new Set();
console.log(exampleSet.add(1)); //Set(1) { 1 }
console.log(exampleSet.has(1)); //true
console.log(exampleSet.has(2)); //false
console.log(exampleSet.add(2)); //Set(2) { 1, 2 }
console.log(exampleSet.has(2)); //true

//Intersection
//two sets consists of the common elements between those two sets
function intersectSets (setA, setB) {
    var intersection = new Set();
    for (var elem of setB) {
        if (setA.has(elem)) intersection.add(elem);
    }
    return intersection;
}
var setA = new Set([1,2,3,4]);
var setB = new Set([2,3]);
console.log(intersectSets(setA, setB)); //Set(2) { 2, 3 }


//isSuperSet
//set is a superset of another set if it contains all the elements of the other set
//checks whether a set is a superset of another
function isSuperSet(setA, subset) {
    for (var elem of subset) {
        if (!setA.has(elem)) return false;
    }
    return true;
}
var setA = new Set([1,2,3,4]);
var setB = new Set([2,3]);
var setC = new Set([5]);
console.log(isSuperSet(setA, setB)); //true
//because setA has all elements that setB has

console.log(isSuperSet(setA, setC)); //false
//because setA does not contain 5 which setC has


//Union
//union of two sets combines the elements from both sets
//return a new set with both elements without duplicates
function unionSet(setA, setB) {
    var union = new Set(setA);
    for(var elem of setB) {
        union.add(elem);
    }
    return union;
}
var setA = new Set([1,2,3,4]);
var setB = new Set([2,3]);
var setC = new Set([5]);
console.log(unionSet(setA, setB)); //Set{1,2,3,4}
console.log(unionSet(setA, setC));  //Set{1,2,3,4,5}


//Difference
//the difference of setA from setB is all of the elements in setA that are not in setB
function differenceSet(setA, setB) {
    var difference = new Set(setA);
    for (var elem of setB) {
        difference.delete(elem);
    }
    return difference;
}
var setA = new Set([1,2,3,4]);
var setB = new Set([2,3]);
console.log(differenceSet(setA, setB)); //Set(2) { 1, 4 }
