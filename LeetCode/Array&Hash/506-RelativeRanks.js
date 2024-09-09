//506. Relative Ranks
//given an integer array score of size n, where score[i] is the score of the i_th athlete in a competition
//all the scores are guaranteed to be unique
//the atheletes are placed based on their scores, where the 1st place athlete has the highest score,
//the 2nd place athelete has the 2nd highest score, and so on
//the placement of each athele determines their rank:

//1st place: "Gold Medal"
//2nd place: "Silver Medal"
//3rd place: "Bronze Medal"
//for the 4th place to the n_th place athelete, their rank is their placement number
//return an array answer of size n where anwer[i] is the rank of the i_th athelete

//Approach:
//using sorting and indexOf()
var relativeRanks = (score) => {
    let rank = score.slice(0).sort((a, b) => b - a);

    return score.map((num, i) => {
        if (num === rank[0]) return 'Gold Medal'; //1st
        else if (num === rank[1]) return 'Silver Medal'; //2nd
        else if (num === rank[2]) return 'Bronze Medal'; //3rd
        else return (rank.indexOf(num) + 1).toString();
    });
}
relativeRanks([5,4,3,2,1]); //["Gold Medal","Silver Medal","Bronze Medal","4","5"]
//The placements are [1st, 2nd, 3rd, 4th, 5th]

//rank = [ 5,  4,  3,  2,  1 ]
//        1st 2nd 3rd 4th 5th

//[5, 4, 3, 2, 1]
// ^ = 1st
//mapping: [ "Gold Medal", ]

//[5, 4, 3, 2, 1]
//    ^ = 2nd
//mapping: [ "Gold Medal", "silver Medal", ]

//[5, 4, 3, 2, 1]
//       ^ = 3rd
//mapping: [ "Gold Medal", "silver Medal", "Bronze Medal", ]

//[5, 4, 3, 2, 1]
//          ^ = 4th
//mapping: [ "Gold Medal", "silver Medal", "Bronze Medal", "4" ]

//[5, 4, 3, 2, 1]
//             ^ = 5th
//mapping: [ "Gold Medal", "silver Medal", "Bronze Medal", "4", "5" ]

relativeRanks([10,3,8,9,4]); //["Gold Medal","5","Bronze Medal","Silver Medal","4"]
//The placements are [1st, 5th, 3rd, 2nd, 4th]

//rank = [ 10, 9,  8,  4,  3 ]
//        1st 2nd 3rd 4th 5th

//score = [10, 3, 8, 9, 4]
//         ^ = 1st
//mapping: [ "Gold Medal", ]

//score = [10, 3, 8, 9, 4]
//             ^ = 5th
//mapping: [ "Gold Medal", "5" ]

//score = [10, 3, 8, 9, 4]
//                ^ = 3rd
//mapping: [ "Gold Medal", "5", "Bronze Medal" ]

//score = [10, 3, 8, 9, 4]
//                   ^ = 2nd
//mapping: [ "Gold Medal", "5", "Bronze Medal", "Silver Medal" ]

//score = [10, 3, 8, 9, 4]
//                      ^ = 4th
//mapping: [ "Gold Medal", "5", "Bronze Medal", "Silver Medal", "4" ]
