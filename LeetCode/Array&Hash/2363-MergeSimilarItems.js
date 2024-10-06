//2363. Merge Similar Items
//given two 2D integer arrays - itmes1 and items2 - representing two sets of itmes
//each array items has the following properties:
//items[i] = [valuei, weighti] where valuei represents the value and weighti represents the weight of the ith item
//the value of each item in items is unique

//return a 2D integer array ret where ret[i] = [valuei, weighti], with weighti being the sum of weights of all items with value valuei

//Appraoch:
//using map
var mergeSimilarItems = (items1, items2) => {
    let map = new Map();
    let items = [...items1, ...items2]; //collecting all items

    //traversing
    for (let [val, weight] of items) {
        if (!map.has(val)) map.set(val, weight); //setting map
        else map.set(val, map.get(val) + weight); //merging weights based on same value
    }

    //making as an array and sorting
    return Array.from(map.entries()).sort((a, b) => a[0] - b[0]);
}
mergeSimilarItems(items1 = [[1,1],[4,5],[3,8]], items2 = [[3,1],[1,5]]); //[[1,6],[3,9],[4,5]]
//items = [ [1,1], [4,5], [3,8], [3,1], [1,5] ]
//            ^
//map = { 
//  1: 1
//}

//items = [ [1,1], [4,5], [3,8], [3,1], [1,5] ]
//                   ^
//map = { 
//  1: 1
//  4: 5,
//}

//items = [ [1,1], [4,5], [3,8], [3,1], [1,5] ]
//                          ^
//map = { 
//  1: 1
//  4: 5,
//  3: 8,
//}

//items = [ [1,1], [4,5], [3,8], [3,1], [1,5] ]
//                                 ^
//map = { 
//  1: 1
//  4: 5,
//  3: 8 -> 9
//}

//items = [ [1,1], [4,5], [3,8], [3,1], [1,5] ]
//                                        ^
//map = { 
//  1: 1 -> 6
//  4: 5,
//  3: 8 -> 9
//}

//making as an array -> [ [[1, 6], [3, 9], [4, 5]] ]

mergeSimilarItems(items1 = [[1,1],[3,2],[2,3]], items2 = [[2,1],[3,2],[1,3]]); //[[1,4],[2,4],[3,4]]
//items = [ [1,1], [3,2], [2,3], [2,1], [3,2], [1,3] ]
//            ^
//map = { 
//  1: 1
//}

//items = [ [1,1], [3,2], [2,3], [2,1], [3,2], [1,3] ]
//            ^
//map = { 
//  1: 1
//  3: 2
//}

//items = [ [1,1], [3,2], [2,3], [2,1], [3,2], [1,3] ]
//            ^
//map = { 
//  1: 1
//  3: 2
//  2: 3
//}

//items = [ [1,1], [3,2], [2,3], [2,1], [3,2], [1,3] ]
//            ^
//map = { 
//  1: 1
//  3: 2
//  2: 3 -> 4
//}

//items = [ [1,1], [3,2], [2,3], [2,1], [3,2], [1,3] ]
//            ^
//map = { 
//  1: 1
//  3: 2 -> 4
//  2: 3 -> 4
//}

//items = [ [1,1], [3,2], [2,3], [2,1], [3,2], [1,3] ]
//            ^
//map = { 
//  1: 1 -> 4
//  3: 2 -> 4
//  2: 3 -> 4
//}

//making as an array -> [ [[1, 4],[2, 4],[3, 4]] ]

mergeSimilarItems(items1 = [[1,3],[2,2]], items2 = [[7,1],[2,2],[1,4]]); //[[1,7],[2,4],[7,1]]
