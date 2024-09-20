//599. Minimum Index Sum Of Two Lists
//given two arrays of strings list1 and list2
//find the common strings with the least index sum

//a common string is a string that appeared in both list1 and list2
//a common string with the least index sum is a common string such that if it appeared at list1[i] and list2[j]
//then i + j should be the minimum value among all the other common strings
//return all the commom strings with the least index sum
//return the answer in any order

//Approach:
//using hash map
var minIndexSumTwoLists = (list1, list2) => {
    let res = [];
    let map = new Map(); //hash map
    let min = Infinity;

    //collecting information with index from list1
    for (let i = 0; i < list1.length; i++) map.set(list1[i], i);

    //comparing with list2
    for (let i = 0; i < list2.length; i++) {
        //find matching with list1
        if (map.has(list2[i])) {
            let list1Index = map.get(list2[i]);
            let list2Index = i;

            res.push({ val: list2[i], index: list1Index + list2Index });

            //updating min value
            min = Math.min(min, list1Index + list2Index);
        }
    }

    return res.filter(item => item.index === min).map(item => item.val);
}
minIndexSumTwoLists(list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Shogun","Burger King"]); //["shogun"] - The common string with the least index sum is "Shogun" with index sum = (0 + 1) = 1
//map = {
//    Shogun: 0
//    Tapioca Express: 1
//    Burger King: 2
//    KFC: 3
//}
//res = [ ]
//min = Infinity

//list2 = ["KFC", "Shogun", "Burger King"]
//           ^
//KFC -> list1Index: 3
//       list2Index: 0
//res = [{ val: KFC, index: 3 },  ]
//min = Infinity -> 3

//list2 = ["KFC", "Shogun", "Burger King"]
//                   ^
//Shogun -> list1Index: 0
//       list2Index: 1
//res = [{ val: KFC, index: 3 }, { val: Shogun, index: 1 },  ]
//min = Infinity -> 3 -> 1

//list2 = ["KFC", "Shogun", "Burger King"]
//                                 ^
//Burger King -> list1Index: 2
//       list2Index: 2
//res = [{ val: KFC, index: 3 }, { val: Shogun, index: 1 }, { val: Burger King, index: 4 }]
//min = Infinity -> 3 -> 1 -> 1

//1: Shogun

minIndexSumTwoLists(list1 = ["happy","sad","good"], list2 = ["sad","happy","good"]); //["sad","happy"]
//map = {
//    happy: 0
//    sad: 1
//    good: 2
//}
//res = [ ]
//min = Infinity

//list2 = ["sad", "happy", "good"]
//           ^
//sad -> list1Index: 1
//       list2Index: 0
//res = [{ val: sad, index: 1 },  ]
//min = Infinity -> 1

//list2 = ["sad", "happy", "good"]
//                  ^
//happy -> list1Index: 0
//       list2Index: 1
//res = [{ val: sad, index: 1 }, { val: happy, index: 1 },  ]
//min = Infinity -> 1 -> 1

//list2 = ["sad", "happy", "good"]
//                           ^
//happy -> list1Index: 2
//       list2Index: 2
//res = [{ val: sad, index: 1 }, { val: happy, index: 1 }, { val: good, index: 4 },  ]
//min = Infinity -> 1 -> 1 -> 1

//1: sad, happy

minIndexSumTwoLists(list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]); //["shogun"] - The only common string is "Shogun"
