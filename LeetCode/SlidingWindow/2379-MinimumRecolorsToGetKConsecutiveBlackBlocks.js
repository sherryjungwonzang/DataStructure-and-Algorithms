//2379. Minimum Recolors To Get K Consecutive Black Blocks
//given 0-indexed string bloacks of length n
//where blocks[i] is either 'W' or 'B' - representing the color of the i_th block
//the characters 'W' and 'B' denote the colors white and black respectively

//also given an integer k, which is the desired number of consecutive black blocks
//in one operation, you can recolor a while block such that it becomes a black block
//return the min number of operations needed such that there is at least one occurrence of k consecutive black blocks

//Approach:
//using sliding windows
var minRecolors = (blocks, k) => {
    let min = Infinity;
    let start = 0;
    let whiteCount = 0;

    for (let end = 0; end < blocks.length; end++) {
        //to find white blocks
        if (blocks[end] === "W") whiteCount++;

        //sliding window
        if (end - start + 1 === k) {
            min = Math.min(whiteCount, min);

            if (blocks[start++] === "W") whiteCount--;
        }
    }

    return min;
}
minRecolors(blocks = "WBBWWBBWBW", k = 7); //3 - One way to achieve 7 consecutive black blocks is to recolor the 0th, 3rd, and 4th blocks
//"W B B W W B B W B W"
// s
// e
//whiteCount = 0 -> 1
//end - start + 1 = 0 - 0 + 1 != 7

//"W B B W W B B W B W"
// s
//   e
//whiteCount = 0 -> 1 -> 1
//end - start + 1 = 1 - 0 + 1 != 7

//"W B B W W B B W B W"
// s
//     e
//whiteCount = 0 -> 1 -> 1 -> 1
//end - start + 1 = 2 - 0 + 1 != 7

//"W B B W W B B W B W"
// s
//       e
//whiteCount = 0 -> 1 -> 1 -> 1 -> 2
//end - start + 1 = 3 - 0 + 1 != 7

//"W B B W W B B W B W"
// s
//         e
//whiteCount = 0 -> 1 -> 1 -> 1 -> 2 -> 3
//end - start + 1 = 4 - 0 + 1 != 7

//"W B B W W B B W B W"
// s
//           e
//whiteCount = 0 -> 1 -> 1 -> 1 -> 2 -> 3 -> 3
//end - start + 1 = 5 - 0 + 1 != 7

//"W B B W W B B W B W"
// s
//             e
//whiteCount = 0 -> 1 -> 1 -> 1 -> 2 -> 3 -> 3 -> 3
//end - start + 1 = 6 - 0 + 1 = 7
//min = min(3, Infinity) = 3
//blocks[1] = "W" -> whiteCount = 3 -> 0
//start = 0 -> 1
//whiteCount = 0 -> 1 -> 1 -> 1 -> 2 -> 3 -> 3 -> 3 -> 2

//"W B B W W B B W B W"
//   s
//               e
//whiteCount = 0 -> 1 -> 1 -> 1 -> 2 -> 3 -> 3 -> 3 -> 2 -> 3
//end - start + 1 = 7 - 1 + 1 = 7
//min = min(3, 3) = 3
//blocks[1] != "W" 
//start = 0 -> 1 -> 2

//"W B B W W B B W B W"
//     s
//                 e
//whiteCount = 0 -> 1 -> 1 -> 1 -> 2 -> 3 -> 3 -> 3 -> 2 -> 3 -> 3
//end - start + 1 = 8 - 2 + 1 = 7
//min = min(3, 3) = 3
//blocks[1] != "W" 
//start = 0 -> 1 -> 2 -> 3

//"W B B W W B B W B W"
//       s
//                   e
//whiteCount = 0 -> 1 -> 1 -> 1 -> 2 -> 3 -> 3 -> 3 -> 2 -> 3 -> 3 -> 4
//end - start + 1 = 9 - 3 + 1 = 7
//min = min(4, 3) = 3
//blocks[1] = "W" -> whiteCount = 4 -> 3
//whiteCount = 0 -> 1 -> 1 -> 1 -> 2 -> 3 -> 3 -> 3 -> 2 -> 3 -> 3 -> 4 -> 3
//start = 0 -> 1 -> 2 -> 3 -> 4

//min = min(4, 3) = 3

minRecolors(blocks = "WBWBBBW", k = 2); //0 - No changes need to be made, since 2 consecutive black blocks already exist
//"W B W B B B W"
// s
// e
//whiteCount = 0 -> 1
//end - start + 1 = 0 - 0 + 1 != 2

//"W B W B B B W"
// s
//   e
//whiteCount = 0 -> 1 -> 1
//end - start + 1 = 1 - 0 + 1 = 2
//min = min(1, Infinity) = 1
//blocks[1] = "W" -> whiteCount = 1 -> 0
//start = 0 -> 1
//whiteCount = 0 -> 1 -> 1 -> 0

//"W B W B B B W"
//   s
//     e
//whiteCount = 0 -> 1 -> 1 -> 0 -> 1
//end - start + 1 = 2 - 1 + 1 = 2
//min = min(1, 1) = 1
//blocks[2] != "W"

//"W B W B B B W"
//     s
//       e
//whiteCount = 0 -> 1 -> 1 -> 0 -> 1 -> 1
//end - start + 1 = 3 - 2 + 1 = 2
//min = min(1, 1) = 1
//blocks[2] = "W"  -> whiteCount = 1 -> 0
//whiteCount = 0 -> 1 -> 1 -> 0 -> 1 -> 1 -> 0

//"W B W B B B W"
//       s
//         e
//whiteCount = 0 -> 1 -> 1 -> 0 -> 1 -> 1 -> 0 -> 0
//end - start + 1 = 4 - 3 + 1 = 2
//min = min(1, 1) = 1
//blocks[3] != "W"

//"W B W B B B W"
//         s
//           e
//whiteCount = 0 -> 1 -> 1 -> 0 -> 1 -> 1 -> 0 -> 0 -> 0
//end - start + 1 = 5 - 4 + 1 = 2
//min = min(0, 1) = 0
//blocks[4] != "W"

//"W B W B B B W"
//         s
//             e
//whiteCount = 0 -> 1 -> 1 -> 0 -> 1 -> 1 -> 0 -> 0 -> 0 -> 1
//end - start + 1 = 6 - 4 + 1 != 2

//min = min(0, 1) = 0
