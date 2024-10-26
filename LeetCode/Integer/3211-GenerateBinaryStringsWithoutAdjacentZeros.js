//3211. Generate Binary Strings Without Adjacent Zeros
//given a positive integer n
//a binary string x is valid if all substrings of x of length 2 contain at least one "1"
//return all valid strings with length n, in any order

//Approach:
//using recursion
var noAdjacentZeros = (n) => {
    let res = [];

    //recursion
    function recurse(num) {
        if (num.length === n) return res.push(num);

        //recursive calls
        recurse(num + '1');

        //no adjacent zeros
        if (!num.endsWith('0')) recurse(num + '0');
    }

    recurse('');

    return res;
}
noAdjacentZeros(3); //["010","011","101","110","111"]
//                ""
//         "1"               "0"
//     "11"    "10"               "01"
//"111"  "110"     "101"      "011"   "010"

//starting with recurse('') -> recurse('' + '1')
//no adjacent zero          -> recurse('' + '0')

//recurse('' + '1') = "1"                                                                   recurse('' + '0') = "0"     
//1 != n -> continue recursion                                                              0 != n -> continue recursion
//recurse('1' + '1')                                                                        recurse('0' + '1')
//no adjacent zero -> recurse('1' + '0')                                                    adjacent zeros -> continue

//recurse('1' + '1') = "11"                      recurse('1' + '0') = "10"                  recurse('0' + '1') = "01"
//11 != n -> continue recursion                  10 != n -> continue recursion              01 != n -> continue recursion
//recurse('11' + '1')                            recurse('10' + '1')                        recurse('01' + '1')    
//no adjacent zero -> recurse('11' + '0')        adjacent zeros -> continue                 no adjacent zero -> recurse('01' + '0')

//recurse('11' + '1') = "111"                    recurse('10' + '1') = "101"                recurse('01' + '1') = "011"                        recurse('01' + '0') = "010"
//111 = n -> res                                 101 = n -> res                             011 = n -> res                                     010 = n -> res
//res = [ 111, ]                                 res = [ 111, 110, 101, ]                   res = [ 111, 110, 101, 011, ]                      res = [ 111, 110, 101, 011, 010 ]            

//recurse('11' + '0') = "110"
//110 = n -> res
//res = [ 111, 110, ]

//res = [ 111, 110, 101, 011, 010 ] 

noAdjacentZeros(1); //["0","1"]
