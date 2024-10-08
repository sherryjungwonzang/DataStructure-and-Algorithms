//944. Delete Columns To Make Sorted
//given an array of n strings strs, all of the same length
//the strings can be arranged such that there is one on each line, making a grid

//for example, strs = ["abc", "bce", "cae"] can be arranged as follows:
//abc
//bce
//cae
//you want to delete the columns that are not sorted lexicographically
//in the above example (0-indexed), columns 0 ('a', 'b', 'c') and 2 ('c', 'e', 'e') are sorted, 
//while column 1 ('b', 'c', 'a') is not, so you would delete column 1
//return the number of columns that you will delete
var deleteColumns = (strs) => {
    let m = strs.length; //row
    let n = strs[0].length; //col
    let count = 0;

    //traversing
    for (j = 0; j < n; j++) { //col
        for (let i = 0; i < m - 1; i++) { //row
            //not lexicographical order
            if (strs[i][j] > strs[i + 1][j]) { //[row][col] > [row + 1][col]
                count++;

                break; //to move to next column
            }
        }
    }

    return count;
}
deleteColumns(strs = ["zyx","wvu","tsr"]); //3 - All 3 columns are not sorted, so you will delete all 3.
// z y x
// w v u        m = 3, n = 3
// t s r

//j = 0 < 3, i = 0 < 2 -> [0][0]: 'z'
//                        [1][0]: 'w'
//z > w -> not lexicographical order
//count = 0 -> 1

//j = 1 < 3, i = 1 < 2 -> [0][1]: 'y'
//                        [2][1]: 'v'
//y > v -> not lexicographical order
//count = 0 -> 1 -> 2

//j = 2 < 3, i = 1 < 2 -> [0][2]: 'x'
//                        [1][2]: 'u'
//x > u -> not lexicographical order
//count = 0 -> 1 -> 2 -> 3

deleteColumns(strs = ["cba","daf","ghi"]); //1 - Columns 0 and 2 are sorted, but column 1 is not, so you only need to delete 1 column
// c b a
// d a f       m = 3, n = 3
// g h i

//j = 0 < 3, i = 0 < 2 -> [0][0]: 'c'
//                        [1][0]: 'd'
//c > d -> lexicographical order
//count = 0 -> 0

//j = 0 < 3, i = 1 < 2 -> [1][0]: 'd'
//                        [2][0]: 'g'
//d < g -> lexicographical order
//count = 0 -> 0 -> 0

//j = 1 < 3, i = 0 < 2 -> [0][1]: 'b'
//                        [1][1]: 'a'
//b > a -> not lexicographical order
//count = 0 -> 0 -> 0 -> 1

//j = 2 < 3, i = 0 < 2 -> [0][2]: 'a'
//                        [2][2]: 'f'
//a < f -> lexicographical order
//count = 0 -> 0 -> 0 -> 1 -> 1

//j = 2 < 3, i = 1 < 2 -> [1][2]: 'f'
//                        [2][2]: 'i'
//f < i -> lexicographical order
//count = 0 -> 0 -> 0 -> 1 -> 1 -> 1

deleteColumns(strs = ["a","b"]); //0 - Column 0 is the only column and is sorted, so you will not delete any columns
// a
// b

