//779. Kth Symbol In Grammar
//build a table of n rows (1-indexed) - start by writing 0 in the 1st row
//now in every subsequent row, we look at the previous row and replace each occurence of 0 with 01, and each occurrence of 1 with 10
//for example, for n = 3, the 1st row is 0, the 2nd row is 01, and the 3rd row is 0110

//given two integer n and k
//eturn the kth (1-indexed) symbol in the nth row of a table of n rows

//Approach:
//using recursion
var kthSymbol = (n, k) => {
    //base case
    if (n === 1) return 0;

    let half = Math.pow(2, n - 1) / 2;

    if (k <= half) return kthSymbol(n - 1, k); //first half is same with the prev row
    else return kthGrammar(n - 1, k - half) === 0 ? 1 : 0; //inversing the first half
}
kthSymbol(n = 5, k = 10); //0
//half = 2^(5 - 1) = 2^4 / 2 = 8

//k = 10 > half -> second half                              -> second half, so inverse 1 -> 0
//kthSymbol(5 - 1, 10 - 8) = kthSymbol(4, 2) = 0

//starting with kthSymbol(4, 2)
//kthSymbol(4, 2) -> half = 2^(4 - 1) = 2^3 / 2 = 4
//k = 2 < half -> first half                                -> first half, return 1
//kthSymbol(4 - 1, 2) = kthSymbol(3, 2) = 1

//kthSymbol(3, 2) -> half = 2^(3 - 1) = 2^2 / 2 = 2
//k = 2 = half -> first half                                -> fisrt half, return 1
//kthSymbol(3 - 1, 2) = kthSymbol(2, 2) = 1

//kthSymbol(2, 2) -> half = 2^(2 - 1) = 2^1 / 2 = 1
//k = 2 > half -> second half                               -> secibd half, inverse 0 -> 1
//kthSymbol(2 - 1, 2) = kthSymbol(1, 2) = 0

//kthSymbol(1, 2) -> 0

//0

kthSymbol(n = 4, k = 3); //1
//half = 2^(4 - 1) = 2^3 / 2 = 4

//k = 3 < half -> first half                                                -> first half, so return 1
//return kthSymbol(4 - 1, 3) = kthSymbol(3, 3) = 1

//starting with kthSymbol(3, 3) -> half = 2^(3 - 1) = 2^2 / 2 = 2
//k = 3 > half -> second half                                               -> second half, so inverse 0 -> 1
//return kthSymbol(3 - 1, 3 - 2) = kthSymbol(2, 1)

//kthSymbol(2, 1) -> half = 2^(2 - 1) = 2^1 / 2 = 1
//k = 1 = half -> first half                                                -> first half, so return 0
//return kthSymbol(2 - 1, 1 - 1) = kthSymbol(1, 0)

//kthSymbol(1, 0) -> 0

//1

kthSymbol(n = 2, k = 2); //1
//half = 2^(2 - 1) = 2^1 / 2 = 1

//k = 2 > half -> second half
//kthSymbol(2 - 1, 2 - 1) = kthSymbol(1, 1)

//kthSymbol(1, 1) = 0 -> applying to kthSymbol(n = 2, k = 2)
//inverse 0 -> 1

kthSymbol(n = 2, k = 1); //0
