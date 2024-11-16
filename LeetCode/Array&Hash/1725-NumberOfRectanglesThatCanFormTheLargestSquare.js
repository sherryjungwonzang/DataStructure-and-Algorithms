//1725. Number Of Rectangles That Can Form The Largest Square
//given an array rectangles where rectangles[i] = [li, wi] represents the ith rectangle of length li and width wi
//you can cut the ith rectangle to form a square with a side length of k if both k <= li and k <= wi
//for example, if you have a rectangle [4,6], you can cut it to get a square with a side length of at most 4
//let maxLen be the side length of the largest square you can obtain from any of the given rectangles
//return the number of rectangles that can make a square with a side length of maxLen
var goodRectangles = (rectangles) => {
    let max = 0;
    let count = 0;

    for (let i = 0; i < rectangles.length; i++) {
        let sideLen = Math.min(rectangles[i][0], rectangles[i][1]);

        //resetting for largest square
        if (sideLen > max) {
            //resetting
            count = 0;

            max = sideLen;
        }

        //good rectangles
        if (sideLen === max) count++;
    }

    return count;
}
goodRectangles([[5,8],[3,9],[5,12],[16,5]]); //3
//[ [5,8], [3,9], [5,12], [16,5] ]
//    ^
//sideLen = min(5, 8) = 5
//sideLen > max -> resetting
//max = 0 -> 5
//sideLen = max -> count
//count = 0 -> 0 -> 1

//[ [5,8], [3,9], [5,12], [16,5] ]
//           ^
//sideLen = min(3, 9) = 3
//sideLen < max -> continue
//max = 0 -> 5 -> 5
//sideLen != max
//count = 0 -> 0 -> 1 -> 1

//[ [5,8], [3,9], [5,12], [16,5] ]
//                   ^
//sideLen = min(5, 12) = 5
//sideLen = max -> count
//max = 0 -> 5 -> 5
//count = 0 -> 0 -> 1 -> 1 -> 2

//[ [5,8], [3,9], [5,12], [16,5] ]
//                          ^
//sideLen = min(16, 5) = 5
//sideLen = max -> count
//max = 0 -> 5 -> 5
//count = 0 -> 0 -> 1 -> 1 -> 2 -> 3

goodRectangles([[2,3],[3,7],[4,3],[3,7]]); //3
//[ [2,3], [3,7], [4,3], [3,7] ]
//    ^
//sideLen = min(2, 3) = 2
//sideLen > max -> resetting
//max = 0 -> 2
//sideLen = max -> count
//count = 0 -> 0 -> 1

//[ [2,3], [3,7], [4,3], [3,7] ]
//          ^
//sideLen = min(3, 7) = 3
//sideLen > max -> resetting & count resetting 
//max = 0 -> 2 -> 3
//sideLen = max -> count
//count = 0 -> 0 -> 1 -> 0 -> 1

//[ [2,3], [3,7], [4,3], [3,7] ]
//                  ^
//sideLen = min(4, 3) = 3
//sideLen = max -> count
//max = 0 -> 2 -> 3
//count = 0 -> 0 -> 1 -> 0 -> 1 -> 2

//[ [2,3], [3,7], [4,3], [3,7] ]
//                         ^
//sideLen = min(3, 7) = 3
//sideLen = max -> count
//max = 0 -> 2 -> 3
//count = 0 -> 0 -> 1 -> 0 -> 1 -> 2 -> 3
