//1009. Complement Of Base 10 Integer
//the complement of an integer is the integer you get when you flip all the 0's to 1's
//and all the 1's to 0's in its binary representation
//for example, the integer 5 is "101" in binary and its complement is "010" which is the integer 2

//given an integer n
//return its complement

//Approach:
//using toString(2)
var complementBase10Integer = (n) => {
    let binary = n.toString(2);
    let complement = binary.split('').map(x => x === "1" ? "0" : "1").join('');

    return parseInt(complement, 2);
}
complementBase10Integer(5); //2 - 5 is "101" in binary, with complement "010" in binary
//binary = 5 -> toString(2): 101
//complement: changing 1 to 0, 0 to 1 -> 010
//parseInt(010) -> 2

complementBase10Integer(7); //0 - 7 is "111" in binary, with complement "000" in binary
//binary = 7 -> toString(2): 111
//complement: changing 1 to 0, 0 to 1 -> 000
//parseInt(000) -> 0

complementBase10Integer(10); //5 - 10 is "1010" in binary, with complement "0101" in binary
//binary = 10 -> toString(2): 1010
//complement: changing 1 to 0, 0 to 1 -> 0101
//parseInt(0101) -> 5
