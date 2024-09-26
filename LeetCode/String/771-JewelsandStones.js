//771. Jewels and Stones
//given strings 'jewels' representing the types of stones that are jewels
//and 'stones' representing the stones you have
//each character in stones is a type of stone you have
//you want to know how many of the stones you have are also jewels
//letters are case sensitive, so "a" is considered a different type of stone from "A"

//Approach:
//using hash map
var jewelsAndStones = (jewels, stones) => {
    let map = new Map(); //hash map
    let count = 0;

    //filling hash map
    for (let i = 0; i < stones.length; i++) {
        if (map.has(stones[i])) map.set(stones[i], map.get(stones[i]) + 1);
        else map.set(stones[i], 1);
    }

    //checking with jewels
    for (let i = 0; i < jewels.length; i++) {
        if (map.has(jewels[i])) count += map.get(jewels[i]);
    }

    return count;
}
jewelsAndStones("aA", "aAABBB"); //3
//map = {
//  a: 1,
//  A: 2,
//  B: 4,
//}

// a A
// ^
//count = 0 -> 1

// a A
//   ^
//count = 0 -> 1 -> 3

jewelsAndStones("z", "ZZ"); //0
//map = {
//  Z: 2,
//}

// z
// ^
//count = 0
