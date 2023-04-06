//118. Pascal's Triangle
//given an integer 'numRows'
//return the first numRows of Pascal's triangle

//in Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
//         1
//      1   1
//     1   2   1
//   1   3   3   1 
// 1   4   6   4   1
var pascalTriangle = (numRows) => {
  //to store the kind of results into some kind fo array
  let res = [];

  //the first row and the second row are not using any kind of logic at all
  if (numRows >= 1) res.push([1]);
  if (numRows >= 2) res.push([1, 1]);

  //logic for Pascal's Triangle
  for (let i = 2; i < numRows; i++) { //carried out the first and second value & looping through the rows
    //Pascal Triangle starts with 1 and ends with 1 
    let first = 1;
    let last = 1;

    //loop through the rest
    //need to check previous array first
    let prevArr = res[i - 1];

    //push in the left value or the first value with the first + last and then the last value
    if (prevArr.length === 2) {
      res.push([first, first + last, last]);
    } else {
      //loop through the array & take the first two values and then the second two values
      let left = 0;
      let right = 1;
      let add = [];

      while(right < prevArr.length) { //to avoid undefinded and error
        add.push(prevArr[left] + prevArr[right]);
        //to increment left and right
        left++;
        right++;
      }
      res.push([first, ...add, last]); //spreading - include all elements
    }
  }
  return res;
}
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

pascalTriangle(1); //[[1]]//
