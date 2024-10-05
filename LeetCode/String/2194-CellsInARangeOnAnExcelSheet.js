//2194. Cells In A Range On An Excel Sheet
//a cell (r, c) of an excel sheet is represented as a string "<col><row>" where:
//<col> denotes the column number c of the cell. It is represented by alphabetical letters
//for example, the 1st column is denoted by 'A', the 2nd by 'B', the 3rd by 'C', and so on
//<row> is the row number r of the cell. The rth row is represented by the integer r

//given a string s in the format "<col1><row1>:<col2><row2>" 
//where <col1> represents the column c1, <row1> represents the row r1, <col2> represents the column c2
//and <row2> represents the row r2, such that r1 <= r2 and c1 <= c2
//return the list of cells (x, y) such that r1 <= x <= r2 and c1 <= y <= c2
//the cells should be represented as strings in the format mentioned above and be sorted in non-decreasing order first by columns and then by rows

//Approach:
//using two loops for checking letter and char at the same time
var cellRangeExcelSheet = (s) => {
    let arr = s.split(":");
    let rowLen = arr[arr.length - 1][1]; //row length
    let res = [];

    //splitting char
    let firstChar = arr[0].charCodeAt(0);
    let lastChar = arr[arr.length - 1].charCodeAt(0);

    //two loops
    for (let i = firstChar; i <= lastChar; i++) {
        //checking char
        let letter = String.fromCharCode(i);

        //checking num
        for (let j = arr[0][1]; j <= rowLen; j++) {
            let char = letter + j;

            res.push(char);
        }
    }

    return res;
}
cellRangeExcelSheet("K1:L2"); //["K1","K2","L1","L2"]
//      K     L
// 1    |     |
// 2    |     |
//      v     v

//arr = ["K1", "L2"], rowLen = 2
//firstChar = "K" -> charCodeAt(K) = 75
//lastChar = "L" -> charCodeAt(L) = 76

//checking char
//i = 75                                                    i = 76
//letter = String.fromCharCode(75) = "K"                    letter = String.fromCharCode(76) = "L"
//j = 1                   j = 2                             j = 1                   j = 2
//char = 'K' + 1 = K1     char = 'K' + 2 = K2               char = 'L' + 1 = L1     char = 'L' + 2 = L2

//res = [ "K1", "K2", "L1", "L2" ]

cellRangeExcelSheet("A1:F1"); //["A1","B1","C1","D1","E1","F1"]
//        A       B       C       D       E       F
// 1    ----------------------------------------------->

//arr = ["A1", "F1"], rowLen = 1
//firstChar = "A" -> charCodeAt(K) = 65
//lastChar = "F" -> charCodeAt(L) = 70

//checking char
//i = 65                                                    i = 66                                                  i = 67
//letter = String.fromCharCode(65) = "A"                    letter = String.fromCharCode(66) = "B"                  letter = String.fromCharCode(67) = "C"
//j = 1                                                     j = 1                                                   j = 1                  
//char = 'A' + 1 = A1                                       char = 'B' + 1 = B1                                     char = 'C' + 1 = C1  

//i = 68                                                    i = 69                                                  i = 70
//letter = String.fromCharCode(68) = "D"                    letter = String.fromCharCode(69) = "E"                  letter = String.fromCharCode(70) = "F"
//j = 1                                                     j = 1                                                   j = 1                  
//char = 'D' + 1 = D1                                       char = 'E' + 1 = E1                                     char = 'F' + 1 = F1  


//res = [ "A1", "B1", "C1", "D1", "E1", "F1" ]
