//1394. Find Lucky Integer In Array
//given an array of integers arr
//a lucky integer is an integer that has a frequency in the array equal to its value
//return the largest lucky integer in the array - if there is no lucky integer return -1

//Appraoch:
//using hash map
var luckyInteger = (arr) => {
    let map = new Map();
    let max = -1;

    //frequency
    for (let i = 0; i < arr.length; i++) {
        if (!map.has(arr[i])) map.set(arr[i], 0);
        
        map.set(arr[i], map.get(arr[i]) + 1);
    }

    //checking lucky number or not
    for (let val of map.entries()) {
        if (val[0] === val[1]) max = Math.max(max, val[0]);
    }

    return max;
}
luckyInteger([2,2,3,4]); //2 - 2 has frequency 2
//map = {
//  2: 1 -> 2, 
//  3: 1,
//  4: 1
//}

//val[0]: 2 = val[1]: 2 -> max = -1 -> (-1, 2) = 2
//val[0]: 3 = val[1]: 1 -> max = -1 -> (-1, 2) = 2 -> (2, 1) = 2
//val[0]: 4 = val[1]: 1 -> max = -1 -> (-1, 2) = 2 -> (2, 1) = 2 -> (2, 1) = 2

//2

luckyInteger([1,2,2,3,3,3]); //3
//map = {
//  1: 1, 
//  2: 1 -> 2,
//  3: 1 -> 2 -> 3
//}

//val[0]: 1 = val[1]: 1 -> max = -1 -> (-1, 1) = 1
//val[0]: 2 = val[1]: 2 -> max = -1 -> (-1, 1) = 1 -> (1, 2) = 2
//val[0]: 3 = val[1]: 3 -> max = -1 -> (-1, 1) = 1 -> (1, 2) = 2 -> (2, 3) = 3

//3

luckyInteger([2,2,2,3,3]); //-1
