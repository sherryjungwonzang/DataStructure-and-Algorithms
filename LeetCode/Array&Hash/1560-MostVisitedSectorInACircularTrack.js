//1560. Most Visited Sector In A Circular Track
//given an integer n and an integer array rounds
//we have a circular track which consists of n sectors labeled from 1 to n
//a marathon will be held on this track, the marathon consists of m rounds
//the ith round starts at sector rounds[i - 1] and ends at sector rounds[i]
//for example, round 1 starts at sector rounds[0] and ends at sector rounds[1]
//return an array of the most visited sectors sorted in ascending order
var mostVisitedSector = (n, rounds) => {
    let first = rounds[0];
    let last = rounds[rounds.length - 1];
    let res = [];

    //first round will be duplicated
    if (first <= last) {
        for (let i = last; i >= first; i--) res.unshift(i);
    } else {  //first > last
        //one jump from the end to the beginning
        for (let i = 1; i <= last; i++) res.push(i);
        for (let i = first; i <= n; i++) res.push(i);
    }

    return res;
}
mostVisitedSector(n = 4, rounds = [1,3,1,2]); //[1, 2]
//[1, 3, 1, 2]
// F        L
//first < last -> i = 2 <= 1
//                res = [2] -> [1, 2]

mostVisitedSector(n = 2, rounds = [2,1,2,1,2,1,2,1,2]); //[2]
//[2, 1, 2, 1, 2, 1, 2, 1, 2]
// F                       L
//first = last -> i = 2 <= 2
//                res = [2]

mostVisitedSector(n = 6, rounds = [4,5,1,2,1,2]); //[1,2,4,5,6]
//[4, 5, 1, 2, 1, 2]
// F              L
//first > last -> i = 1 <= 2
//                res = [1, 2]
//             -> i = 4 <= 6
//                res = [1, 2, 4, 5, 6]  
