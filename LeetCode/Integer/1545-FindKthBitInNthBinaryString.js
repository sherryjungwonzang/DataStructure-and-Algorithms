//1545. Find Kth Bit In Nth Binary String
//given two positive integers n and k, the binary string Sn is formed as follows:
//S1 = "0"
//Si = Si - 1 + "1" + reverse(invert(Si - 1)) for i > 1
//where + denotes the concatenation operation, reverse(x) returns the reversed string x, 
//and invert(x) inverts all the bits in x (0 changes to 1 and 1 changes to 0)

//for example, the first four strings in the above sequence are:
//S1 = "0"
//S2 = "011"
//S3 = "0111001"
//S4 = "011100110110001"
//return the kth bit in Sn. It is guaranteed that k is valid for the given n

//Approach:
//using recursion
var findKthBit = (n, k) => {

    //recursion
    function recurse(n) {
        //base case
        if (n === 1) return "0";

        //recursive call
        let str = recurse(n - 1);

        return str + "1" + str.split('').map(char => char === "0" ? "1" : "0").reverse().join('');
    }

    return recurse(n)[k - 1];
}
findKthBit(n = 3, k = 1); //"0" - S3 is "0111001"
//starting with recurse(3)[0]
//n = 3 -> str = recurse(2)
//recurse(2) + "1" + recurse(2).split('').map(char => char === "0" ? "1" : "0").reverse().join('')

//recurse(2)
//str = recurse(1) = 0
//recurse(1) + "1" + recurse(1).split('').map(char => char === "0" ? "1" : "0").reverse().join('') -> 0 + "1" + 0.split('').map(char => char === "0" ? "1" : "0").reverse().join('') 
//                                                                                                    0 + 1 + 1 = 011
//(2) = 011

//applying below:
//recurse(2) + "1" + recurse(2).split('').map(char => char === "0" ? "1" : "0").reverse().join('') -> 011 + "1" + 011.split('').map(char => char === "0" ? "1" : "0").reverse().join('')
//                                                                                                    011 + 1 + [1, 0, 0].reverse().join() = 011 + 1 + 001
//(3) = 0111001

//0 1 1 1 0 0 1
//^
//= 0 

findKthBit(n = 4, k = 11); //"1" - S4 is "011100110110001"
//starting with recurse(4)[10]
//n = 4 -> str = recurse(3)
//recurse(3) + "1" + recurse(3).split('').map(char => char === "0" ? "1" : "0").reverse().join('')

//n = 3 -> str = recurse(2)
//recurse(2) + "1" + recurse(2).split('').map(char => char === "0" ? "1" : "0").reverse().join('')

//recurse(2)
//str = recurse(1) = 0
//recurse(1) + "1" + recurse(1).split('').map(char => char === "0" ? "1" : "0").reverse().join('') -> 0 + "1" + 0.split('').map(char => char === "0" ? "1" : "0").reverse().join('') 
//                                                                                                    0 + 1 + 1 = 011
//(2) = 011

//applying below:
//recurse(2) + "1" + recurse(2).split('').map(char => char === "0" ? "1" : "0").reverse().join('') -> 011 + "1" + 011.split('').map(char => char === "0" ? "1" : "0").reverse().join('')
//                                                                                                    011 + 1 + [1, 0, 0].reverse().join() = 011 + 1 + 001
//(3) = 0111001

//applying below:
//recurse(3) + "1" + recurse(3).split('').map(char => char === "0" ? "1" : "0").reverse().join('') -> 0111001 + "1" + 0111001.split('').map(char => char === "0" ? "1" : "0").reverse().join('')
//                                                                                                    0111001 + 1 + [1, 0, 0, 0, 1, 1, 0].reverse().join() = 0111001 + 1 + 0110001
//(4) = 

//0 1 1 1 0 0 1 1 0 1 1 0 0 0 1
//                    ^
//=1
