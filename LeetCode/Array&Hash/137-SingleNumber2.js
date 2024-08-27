//137. Single Number2
//given an integer array 'nums' - where every element appears three times except for one, which appears exactly one
//find the single element and return it

//Approach:
//using map
var singleNumber2 = (nums) => {
    let map = new Map(); //to collect frequency

    //filling map with frequency
    for (let num of nums) map.set(num, (map.get(num) || 0) + 1);

    for (let [num, count] of map.entries()) {
        if (count === 1) return num;
    }

    return 0;
}
singleNumber2([2,2,3,2]); //3
//[2, 2, 3, 2]
//map = { 2: 1 -> 2 -> 3
//        3: 1
//}

//count = 1 -> 3

singleNumber2([0,1,0,1,0,1,99]); //99
//[0, 1, 0, 1, 0, 1, 99]
//map = { 0: 1 -> 2 -> 3
//        1: 1 -> 2 -> 3
//        99: 1
//}

//count = 1 -> 99
