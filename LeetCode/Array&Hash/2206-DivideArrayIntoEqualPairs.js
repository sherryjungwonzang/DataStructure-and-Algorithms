//2206. Divide Array Into Equal Pairs
//given an integer array 'nums' consisting of 2 * n integers
//you need to divide nums into n pairs such that:
//each element belongs to exactly one pair
//the elements present in a pair are equal
//return true if nums can be divided into n pairs, otherwise return false

//Approach:
//using set
var divideEqualPairs = (nums) => {
    let set = new Set();

    for (let num of nums) {
        if (set.has(num)) set.delete(num);
        else set.add(num);
    }

    return set.size === 0; //meaning there is an equal pair
}
divideEqualPairs([3,2,3,2,2,2]); //true - (2, 2), (3, 3), and (2, 2)
//set = {}

//[3, 2, 3, 2, 2, 2]
// ^
//set = { 3, }

//[3, 2, 3, 2, 2, 2]
//    ^
//set = { 3, 2, }

//[3, 2, 3, 2, 2, 2]
//       ^
//set = { 2, }

//[3, 2, 3, 2, 2, 2]
//          ^
//set = {  }

//[3, 2, 3, 2, 2, 2]
//             ^
//set = { 2,  }

//[3, 2, 3, 2, 2, 2]
//                ^
//set = {  } -> meaning there is equal pairs

divideEqualPairs([1,2,3,4]); //false
//set = {}
//[1, 2, 3, 4]
// ^
//set = { 1, }

//[1, 2, 3, 4]
//    ^
//set = { 1, 2,  }

//[1, 2, 3, 4]
//       ^
//set = { 1, 2, 3,  }

//[1, 2, 3, 4]
//          ^
//set = { 1, 2, 3, 4 } -> meaning there is no equal pairs
