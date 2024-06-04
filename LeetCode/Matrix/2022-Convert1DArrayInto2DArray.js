//2022. Convert 1D Array Into 2D Array
//given a 0-indexed 1-dimensional 1D integer array 'original' and two integers m and n
//are tasked with creating a 2D array with m rows and n columns using all the elements form original

//the elements from indices 0 to n - 1 of original should form the first row of the constructed 2D array
//the elements from indices n to 2 * n - 1 should form the second row of the constructed 2D array
//return an m x n 2D array constructed according to the above procedure or an empty 2D array if it is possible
var convert1DInto2DArray = (original, m, n) => {
    //base case
    if (original.length !== (m * n)) return [];

    let res = []; //2D array
    let arr = []; //populating with numbers from original array - equal to given 'n'

    for (let i = 0; i < original.length; i++) {
        arr.push(original[i]);

        if (arr.length === n) {
            res.push(arr); //when it is equal to n push into res
            arr = [];
        }
    }
    return res;
}
convert1DInto2DArray([1,2,3,4], 2, 2); //[[1,2], [3,4]]
//1 2 3 4  -> 1 2
//            3 4

//[1,2,3,4]
// ^
//res = [
//arr = [ 1
//arr length = 0 -> 1

//   ^
//res = [
//arr = [ 1 2
//arr length = 0 -> 1 -> 2

//res = [ [1, 2], 
//arr = [ 
//arr length = 0 

//    ^
//res = [ [1, 2]
//arr = [ 3
//arr length = 0 -> 1 

//      ^
//res = [ [1, 2]
//arr = [ 3 4
//arr length = 0 -> 1 -> 2

//res = [ [1, 2], [3, 4] ] 
//arr = [ ]
//arr length = 0 

//res = [ [1, 2], [3, 4] ] 

convert1DInto2DArray([1,2,3], 1, 3); //[[1,2,3]]
//1 2 3  -> 1 2 3

convert1DInto2DArray([1,2], 1,1); //[]
