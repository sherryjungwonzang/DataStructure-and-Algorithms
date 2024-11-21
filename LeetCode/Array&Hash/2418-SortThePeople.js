//2418. Sort The People
//given an array of strings names, and an array heights that consists of distinct positive integers
//both arrays are of length n
//for each index i, names[i] and heights[i] denote the name and height of the ith person
//return names sorted in descending order by the people's heights

//Approach:
//using hash map
var sortThePeople = (names, heights) => {
    let m = names.length;
    let map = new Map();
    let res = [];

    //mapping with height and name
    for (let i = 0; i < m; i++) map.set(heights[i], names[i]);

    //sorting
    heights.sort((a, b) => b - a);

    //res
    for (let height of heights) res.push(map.get(height));

    return res;
}
//TC: O(n * logn)
sortThePeople(names = ["Mary","John","Emma"], heights = [180,165,170]); //["Mary","Emma","John"]
//names = ["Mary", "John", "Emma"], heights = [180, 165, 170]
//           ^                                  ^
//map = {                       {
//  180: Mary                       180: Mary
//  165: John       -> sorting:     170: Emma
//  170: Emma                       165: John
//}                              }

//res = [ Mary, Emma, John ]

sortThePeople(names = ["Alice","Bob","Bob"], heights = [155,185,150]); //["Bob","Alice","Bob"]
//names = ["Alice", "Bob", "Bob"], heights = [155, 185, 150]
//           ^                                  ^
//map = {                       {
//  155: Alice                     185: Bob
//  185: Bob       -> sorting:     155: Alice
//  150: Bob                       150: Bob
//}                              }

//res = [ Bob, Alice, Bob ]
