//3206. Alternating Groups
//there is a circle of red and vblue tiles
//given an array of integers colors
//the color of tile i is represented by colors[i]
//colors[i] === 0 means tile i is red
//colors[i] === 1 means tile i is blue

//every 3 contiguous tiles in the circle with alternating colors
//in the middle tile has a different color from its left and right tiles is called an alternating group
//return the number of alternating groups
var alternatingGroups = (colors) => {
    let n = colors.length;
    let res = 0;

    //base case
    if (n < 3) return 0;

    //checking within array
    for (let i = 0; i < n - 2; i++) {
        //laternating group
        if (colors[i] === colors[i + 2] && colors[i] !== colors[i + 1]) res++;
    }

    //circular range
    if (colors[0] === colors[n - 2] && colors[0] !== colors[n - 1]) res++;
    if (colors[1] === colors[n - 1] && colors[1] !== colors[0]) res++;

    return res;
}
//TC: O(n)
//SC: O(1)
alternatingGroups([0,1,0,0,1]); //3
//within the array -> i = 0, 1, 2
//i = 0
//[0, 1, 0, 0, 1]
// ^
//[0] = [2] & [0] != [1] -> true
//res = 0 -> 1

//i = 1
//[0, 1, 0, 0, 1]
//    ^
//[1] != [3] & [1] != [2] -> false
//res = 0 -> 1 -> 1

//i = 2
//[0, 1, 0, 0, 1]
//       ^
//[2] != [4] & [2] = [3] -> false
//res = 0 -> 1 -> 1 -> 1

//circular checking
//[0] = [3] & [0] != [4] -> true
//res = 0 -> 1 -> 1 -> 1 -> 2

//circular checking
//[1] = [4] & [1] != [0] -> true
//res = 0 -> 1 -> 1 -> 1 -> 2 -> 3

alternatingGroups([0,1,0,1,0,1,0]); //5
//within the array -> i = 0, 1, 2, 3, 4
//i = 0
//[0, 1, 0, 1, 0, 1, 0]
// ^
//[0] = [2] & [0] != [1] -> true
//res = 0 -> 1

//i = 1
//[0, 1, 0, 1, 0, 1, 0]
//    ^
//[1] = [3] & [1] != [2] -> true
//res = 0 -> 1 -> 2

//i = 2
//[0, 1, 0, 1, 0, 1, 0]
//       ^
//[2] = [4] & [2] != [3] -> true
//res = 0 -> 1 -> 2 -> 3

//i = 3
//[0, 1, 0, 1, 0, 1, 0]
//          ^
//[3] = [5] & [3] != [4] -> true
//res = 0 -> 1 -> 2 -> 3 -> 4

//i = 4
//[0, 1, 0, 1, 0, 1, 0]
//             ^
//[4] = [6] & [4] != [5] -> true
//res = 0 -> 1 -> 2 -> 3 -> 4 -> 5

//circular checking
//[0] != [5] & [0] = [6] -> false
//res = 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 5

//circular checking
//[1] != [6] & [1] != [0] -> false
//res = 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 5 -> 5

alternatingGroups([1,1,1]); //0
