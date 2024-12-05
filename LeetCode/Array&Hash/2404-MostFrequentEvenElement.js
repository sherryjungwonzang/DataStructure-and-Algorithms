//2404. Most Frequent Even Element
//given an integer array nums
//return the most frequent even element
//if there is a tie, return the smallest one
//if there is no such element, return -1

//Approach:
//using hash map
var mostfrequentEvenElement = (nums) => {
    let map = new Map();
    let max = 0;
    let smallest = Infinity;

    //setting frequency
    for (let num of nums) {
        if (!map.has(num) && num % 2 === 0) map.set(num, 1);
        else if (map.has(num) && num % 2 === 0) map.set(num, map.get(num) + 1);

        //updating max value
        if (map.get(num) > max) max = map.get(num);
    }

    //find the smallest key with max value
    for (let [num, freq] of map) {
        //smallest key
        if (freq === max && num < smallest) smallest = num;
    }

    return smallest === Infinity ? -1 : smallest;
}
mostfrequentEvenElement([0,1,2,2,4,4,1]); //2
//[0, 1, 2, 2, 4, 4, 1]     [0, 1, 2, 2, 4, 4, 1]       [0, 1, 2, 2, 4, 4, 1]       [0, 1, 2, 2, 4, 4, 1]       [0, 1, 2, 2, 4, 4, 1]
// ^                            ^                              ^  ^                              ^  ^                              ^
//0 % 2 = 0 -> even         1 % 2 != 0 -> odd           2 % 2 = 0 -> even            2 % 2 = 0 -> even          1 % 2 != 0 -> odd
//map = {                                               map = {                      map = {                    map = {
//  0: 1                                                  0: 1                         0: 1                        0: 1
//}                                                       2: 1 -> 2                    2: 1 -> 2                   2: 1 -> 2
//                                                      }                              4: 1 -> 2                   4: 1 -> 2
//                                                                                   }                          }
//max = 0 -> 1                                          -> 2                        -> 2                        -> 2

//map = {
//  0: 1
//  2: 2    -> freq = max & num < smallest -> smallest = Infinity -> 2
//  4: 2    -> freq = max & num > smallest -> smallest = Infinity -> 2 -. 2
//}

//smallest = 2 -> return 2

mostfrequentEvenElement([4,4,4,9,2,4]); //4

mostfrequentEvenElement([29,47,21,41,13,37,25,7]); //-1
