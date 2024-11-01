//1796. Second Largest Digit In A String
//given an alphanumeric string s
//return the second largest numerical digit that appears in s, or -1 if it does not exist
//an alphanumeric string is a string consisting of lowercase English letters and digits

//Approach:
//using hash set and sorting
var secondLargest = (s) => {
    let set = new Set();

    //checking only nums
    for (let val of s) {
        if (!isNaN(val)) set.add(parseInt(val));
    }

    //sorting - ascending order
    let sorted = Array.from(set).sort((a, b) => b - a);

    //checking the second element
    return sorted.length <= 1 ? -1 : sorted[1];
}
secondLargest("dfa12321afd"); //2 - [1, 2, 3]
//d f a 1 2 3 2 1 a f d
//^ ^ ^
//set = { }

//d f a 1 2 3 2 1 a f d
//      ^ ^ ^
//set = { 1, 2, 3 }

//d f a 1 2 3 2 1 a f d
//            ^ ^  -> already in set
//set = { 1, 2, 3 }

//d f a 1 2 3 2 1 a f d
//                ^ ^ ^
//set = { 1, 2, 3 }

//sorted = [3, 2, 1]
//             ^
//2

secondLargest("abc1111"); //-1
//a b c 1 1 1 1
//^ ^ ^
//set = { }

//a b c 1 1 1 1
//      ^ 
//set = { 1 }

//a b c 1 1 1 1
//        ^ ^ ^ -> already in set 
//set = { 1 }

//sorted = [1] -> no second largest elements
