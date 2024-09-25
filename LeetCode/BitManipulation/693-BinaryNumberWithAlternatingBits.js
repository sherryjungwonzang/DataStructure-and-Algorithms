//693. Binary Number With Alternating Bits
//given a positive integer
//check whether it has alternating bits: namely,
//if two adjacent bits will always have different values

//Approach:
//using toString()
var alternatingBits = (n) => {
    //converting into binary string
    let binary = n.toString(2); 

    //checking adjacent bits
    for (let i = 1; i < binary.length; i++) {
        if (binary[i - 1] === binary[i]) return false;
    }

    return true;
}
alternatingBits(5); //true - 5 is: 101
//5.toString = 101
//0 != 1 && 1 != 0 -> true

alternatingBits(7); //false - 7 is: 111
//7.toString = 111
//1 = 1 && 1 = 1 -> false

alternatingBits(11); //false - 11 is: 1011
//11.toString = 1011
//0 != 1 && 1 != 0 -> true but 1 = 1 -> false
