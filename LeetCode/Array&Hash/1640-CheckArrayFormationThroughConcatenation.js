//1640. Check Array Formation Through Concatenation
//given an array of distinct integers arr and an array of integer arrays pieces, where the integers in pieces are distinct
//your goal is to form arr by concatenating the arrays in pieces in any order
//however, you are not allowed to reorder the integers in each array pieces[i]
//return true if it is possible to form the array arr from pieces - otherwise, return false

//Approach:
//using hash map
var arrayFormationConcatenation = (arr, pieces) => {
    let map = new Map();

    //mapping each pieces
    pieces.forEach(piece => map.set(piece[0], piece));

    //traversing
    for (let i = 0; i < arr.length;) {
        //base case
        if (!map.has(arr[i])) return false;

        let piece = map.get(arr[i]);
        let index = 0; //index in piece array

        while (index < piece.length) {
            //mismatching
            if (piece[index] !== arr[i]) return false;

            index++;

            i++;
        }
    }

    return true;
}
//TC: O(n)
//SC: O(n)
arrayFormationConcatenation(arr = [91,4,64,78], pieces = [[78],[4,64],[91]]); //true - [91], then [4, 64], [78]
//pieces = [[78],[4,64],[91]]
//            ^                  -> map = {
//                                      78: [78],
//                                         }

//pieces = [[78],[4,64],[91]]
//                   ^          -> map = {
//                                      78: [78],
//                                      4: [4, 64],
//                                       }

//pieces = [[78],[4,64],[91]]
//                        ^     -> map = {
//                                      78: [78],
//                                      4: [4, 64],
//                                      91: [91],
//                                       }

//i = 0
//arr = [91, 4, 64, 78]
//       ^
//curr = 91 -> in map
//piece = [91] || index = 0
//piece[0] = 91 = arr[0] = 91 -> true
//i = 1 || index = 1

//i = 1
//arr = [91, 4, 64, 78]
//           ^
//curr = 4 -> in map
//piece = [4, 64] || index = 0
//piece[0] = 4 = arr[1] = 4 -> true
//i = 2 || index = 1

//i = 2
//arr = [91, 4, 64, 78]
//              ^
//curr = 64 -> in map
//piece = [4, 64] || index = 1
//piece[1] = 64 = arr[2] = 64 -> true
//i = 3 || index = 2

//i = 3
//arr = [91, 4, 64, 78]
//                  ^
//curr = 78 -> in map
//piece = [78] || index = 0
//piece[0] = 78 = arr[3] = 78 -> true
//i = 4 || index = 1

//true

arrayFormationConcatenation(arr = [49,18,16], pieces = [[16,18,49]]); //false - cannot reorder pieces[0]
//pieces = [[16, 18, 49]]
//            ^           -> map = {
//                                 16: [16, 18, 49],
//                                  }

//i = 0
//arr = [49,18,16]
//       ^
//curr = 49 -> not in map
//false

arrayFormationConcatenation(arr = [15,88], pieces = [[88],[15]]); //true - [15] and [88]
//pieces = [[88], [15]]
//            ^           -> map = {
//                                 88: [88],
//                                  }

//pieces = [[88], [15]]
//                        -> map = {
//                                 88: [88],
//                                 15: [15],
//                                  }

//i = 0
//arr = [15, 88]
//       ^
//curr = 15 -> in map
//piece = [15] || index = 0
//piece[0] = 15 = arr[0] = 15 -> true
//i = 1 || index = 1

//i = 1
//arr = [15, 88]
//            ^
//curr = 88 -> in map
//piece = [88] || index = 0
//piece[0] = 88 = arr[1] = 88 -> true
//i = 2 || index = 1

//true
