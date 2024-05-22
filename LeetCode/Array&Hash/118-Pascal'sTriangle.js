//118. Pascal's Triangle
//given an integer 'numRows'
//return the first numRows of Pascal's triangle

//in Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
//         1
//      1   1
//     1   2   1
//   1   3   3   1 
// 1   4   6   4   1

//Approach:
//1) DP solution - each integer is comprised from previous summations
//2) non-DP solution - use loops and two pointer technique

//using non-DP solution this time
var pascalTriangle = (numRows) => {
    //to store the kind of res into some kind of array
    let res = [];

    //base case
    if (numRows >= 1) res.push([1]);
    if (numRows >= 2) res.push([1, 1]);

    //logic for Pascal's Triangle
    for (let i = 2; i < numRows; i++) { //carried out the first and second value & looping through the rows
        //Pascal Triangle starts with 1 and ends with 1
        let first = 1;
        let last = 1;

        //loop through the rest
        //need to check previous array
        let prevArr = res[i - 1];

        //setting for length = 2
        if (prevArr.length === 2) {
            res.push([first, first + last, last]);
        } else { //setting for more than length === 2
            //two pointers
            let left = 0;
            let right = 1;
            let add = []; //temporary array for storing the sum or two pointers position

            while(right < prevArr.length) { //to avoid undefined and error
                add.push(prevArr[left] + prevArr[right]);

                //increment left and right
                left++;
                right++;
            }
            res.push([first, ...add, last]); //spreading function - to include all elements
        }
    }
    return res;
}
//TC: O(n^2) - for loop & while loop: running through each array
//SC: O(n) - adding array
pascalTriangle(5); //[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
//res = [[1, [1, 1] ]

//i = 2 | first = 1 || last = 1
//prevArr = res[2-1] = [1, 1] -> length = 2
//res.push -> first, first+last, last = 1, 2, 1
//res = [[1, [1, 1], [1, 2, 1], ]

//i = 3 || prevArr = res[3-1] = [1, 2, 1] -> length=3
//[1, 2, 1]
// l  r
//add = [1+2, 2+1] = [3, 3]
//res = [[1, [1, 1], [1, 2, 1], [1, 3, 3, 1] ... ]
//...

pascalTriangle(1); //[[1]]
